import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';

function ResumePreview({ data }) {
  return (
    <div className="max-w-[800px] mx-auto bg-white shadow-lg">
      <div className="grid grid-cols-[1.5fr_2.5fr] min-h-[297mm]">
        {/* Left Column */}
        <div className="bg-[#F3F4F6] p-8">
          {data.personalInfo.photo && (
            <div className="mb-8 text-center">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg"
              />
            </div>
          )}

          <div className="space-y-8">
            {/* Contact Information */}
            <section>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="break-words">{data.personalInfo.address}</span>
                </p>
                <p className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="break-words">{data.personalInfo.phone}</span>
                </p>
                <p className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="break-words">{data.personalInfo.email}</span>
                </p>
                {data.personalInfo.linkedin && (
                  <p className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faLink} className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="break-words">{data.personalInfo.linkedin}</span>
                  </p>
                )}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="font-bold text-gray-800 mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-600">{edu.year}</p>
                  {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="font-bold text-gray-800 mb-4 uppercase">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <p key={index} className="text-gray-700">{skill}</p>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          {/* Add content for the right column */}
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
