import React from 'react';

const JobCard = ({job}) => {
    const { title, company, location, type, description, tags} = job;
    console.log(title)

    const getTagStyle = (tagName) => {
   

    if (tagName=='Marketing')  {
      return {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-200',
      };
    }
    if (tagName=='Business')  {
      return {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        border: 'border-purple-200',
      };
    }
    if (tagName=='Technology' ) {
      return {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border-blue-200',
      };
    }
    if (tagName=='Design') {
      return {
        bg: 'bg-amber-100',
        text: 'text-amber-800',
        border: 'border-amber-200',
      };
    }
    

    // Default 
    return {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      border: 'border-gray-200',
    };
  };

  const tagStyle = getTagStyle(tags);
    return (
       <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-blue-400 transition-all duration-200 cursor-pointer group">
     
      <div className="flex items-start justify-end gap-3 mb-2 flex-wrap">
        <span className="inline-flex items-center px-2.5 py-0.5  text-xs font-medium  text-primary border border-primary whitespace-nowrap ">
          {type}
        </span>

        
      </div>
      <h3 className="font-semibold text-gray-900 text-lg leading-tight group-hover:text-blue-700 transition-colors">
          {title}
        </h3>

      {/* Company · Location */}
      <p className="text-sm text-gray-600 mb-3">
        {company}
        <span className="mx-2 text-gray-400">·</span>
        {location}
      </p>

      {/* Description (truncated to 2 lines) */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed min-h-[3rem]">
        {description}
      </p>

      {/* Single tag with dynamic color */}
        <div className="mt-1">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${tagStyle.bg} ${tagStyle.text} ${tagStyle.border}`}
          >
            {tags}
          </span>
        </div>
     
    </div>
  );
};
    ;

export default JobCard;