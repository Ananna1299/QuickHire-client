import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate=useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        Oops, page not found!
      </h1>
      <p className="text-secondary mb-6">
        The page you are looking for is not available.
      </p>
      <button
        onClick={()=>navigate(-1)}
        className="bg-primary text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Go Back!
      </button>
    </div>
    );
};

export default ErrorPage;