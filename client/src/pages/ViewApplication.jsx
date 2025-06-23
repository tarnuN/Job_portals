import React, { useState } from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

const ViewApplication = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className="text-2xl font-bold mb-4">Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm max-sm:text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">User Name</th>
              <th className="px-4 py-3 border">Job Title</th>
              <th className="px-4 py-3 border">Location</th>
              <th className="px-4 py-3 border">Resume</th>
              <th className="px-4 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 relative">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border flex items-center gap-2">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="px-4 py-2 border">{applicant.jobTitle}</td>
                <td className="px-4 py-2 border">{applicant.location}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={applicant.resumeLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="Download"
                      className="w-4 h-4"
                    />
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      className="text-gray-700 px-2 py-1 rounded hover:bg-gray-200"
                    >
                      ⋮
                    </button>
                    {openDropdownIndex === index && (
                      <div className="absolute right-0 z-10 mt-2 bg-white border border-gray-200 shadow-md rounded w-24">
                        <button className="w-full px-4 py-2 text-green-600 hover:bg-gray-100 text-sm">
                          Accept
                        </button>
                        <button className="w-full px-4 py-2 text-red-600 hover:bg-gray-100 text-sm">
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
