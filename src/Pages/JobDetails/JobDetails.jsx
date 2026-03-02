import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const modalRef = useRef(null);

  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [coverNote, setCoverNote] = useState("");

  // Fetch job details
  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  // Open Modal
  const handleApply = () => {
    modalRef.current.showModal();
  };

  // Close Modal
  const closeModal = () => {
    modalRef.current.close();
  };

  // Submit Application
  const handleSubmitApplication = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      Swal.fire({
        icon: "error",
        title: "Upload resume",
        text: "Something went wrong!",
      })
      return;
    }

    const formData = new FormData();
    formData.append("job_id", job._id);
    formData.append("title", job.title);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("cover_note", coverNote);
    formData.append("resume", resumeFile); 

    try {
      const res = await fetch("http://localhost:3000/application", {
        method: "POST",
        body: formData, 
      });

      const data = await res.json();
      console.log(data)

      if (data.success) {
        closeModal();

         await Swal.fire({
        icon: "success",
        title: "Applied Successfully!",
        text: data.message,
        timer: 2000,
        showConfirmButton: false,
    });

        // Reset form
        setName("");
        setEmail("");
        setResumeFile(null);
        setCoverNote("");
      } else {

        closeModal();

        Swal.fire({
        icon: "error",
        title: "Application Failed",
        text: data.message,
      });
      }
    } catch (error) {
      console.error(error);
     Swal.fire({
        icon: "error",
        title: "Application Failed",
        text: "Something went wrong!",
      })
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="w-11/12 mx-auto my-20 space-y-5">
        <h2 className="text-2xl font-bold text-primary text-center">
          {job.title}
        </h2>

        <p>
          <span className="font-semibold">Company: </span>
          {job.company}
        </p>

        <p>
          <span className="font-semibold">Location: </span>
          {job.location}
        </p>

        <p>
          <span className="font-semibold">Description: </span>
          {job.description}
        </p>

        <div className="mt-5 space-x-3">
          <Link
            className="btn bg-white border-primary text-primary"
            to="/"
          >
            Back to Home
          </Link>

          <button
            onClick={handleApply}
            className="btn bg-primary text-white border-none"
          >
            Apply Now
          </button>
        </div>
      </div>

      <Footer />

      {/* APPLY MODAL */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-lg">
          <h3 className="font-bold text-lg mb-4">
            Apply for: {job.title}
          </h3>

          <form onSubmit={handleSubmitApplication} className="space-y-4">

            {/* Job ID (readonly) */}
            <input
              type="text"
              value={job._id}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />

            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* File Upload */}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="file-input file-input-bordered w-full "
              onChange={(e) => setResumeFile(e.target.files[0])}
              required
            />

            <textarea
              placeholder="Cover Note"
              className="textarea textarea-bordered w-full"
              value={coverNote}
              onChange={(e) => setCoverNote(e.target.value)}
              required
            />

            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-primary text-white"
              >
                Submit Application
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="btn bg-white border-none text-primary"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;