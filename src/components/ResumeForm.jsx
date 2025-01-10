import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

function ResumeForm({ data, onUpdate }) {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    onUpdate('personalInfo', {
      ...data.personalInfo,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate('personalInfo', {
          ...data.personalInfo,
          photo: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addEducation = () => {
    onUpdate('education', [
      ...data.education,
      { school: '', degree: '', year: '', gpa: '' }
    ]);
  };

  const addExperience = () => {
    onUpdate('experience', [
      ...data.experience,
      { company: '', position: '', duration: '', description: '' }
    ]);
  };

  const addProject = () => {
    onUpdate('projects', [
      ...data.projects || [],
      { name: '', description: '', details: [] }
    ]);
  };

  const addSkill = () => {
    onUpdate('skills', [...data.skills, '']);
  };

  const addLanguage = () => {
    onUpdate('languages', [...data.languages || [], '']);
  };

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={data.personalInfo.name}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="title"
            placeholder="Professional Title"
            value={data.personalInfo.title}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.personalInfo.email}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={data.personalInfo.phone}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={data.personalInfo.address}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={data.personalInfo.linkedin}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="summary"
            placeholder="Professional Summary"
            value={data.personalInfo.summary}
            onChange={handlePersonalInfoChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <button onClick={addEducation} className="text-blue-500 hover:text-blue-600">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        {data.education.map((edu, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="School"
              value={edu.school}
              onChange={(e) => {
                const newEducation = [...data.education];
                newEducation[index].school = e.target.value;
                onUpdate('education', newEducation);
              }}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => {
                const newEducation = [...data.education];
                newEducation[index].degree = e.target.value;
                onUpdate('education', newEducation);
              }}
              className="w-full p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...data.education];
                  newEducation[index].year = e.target.value;
                  onUpdate('education', newEducation);
                }}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="GPA"
                value={edu.gpa}
                onChange={(e) => {
                  const newEducation = [...data.education];
                  newEducation[index].gpa = e.target.value;
                  onUpdate('education', newEducation);
                }}
                className="p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          <button onClick={addExperience} className="text-blue-500 hover:text-blue-600">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        {data.experience.map((exp, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => {
                const newExperience = [...data.experience];
                newExperience[index].company = e.target.value;
                onUpdate('experience', newExperience);
              }}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => {
                const newExperience = [...data.experience];
                newExperience[index].position = e.target.value;
                onUpdate('experience', newExperience);
              }}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => {
                const newExperience = [...data.experience];
                newExperience[index].duration = e.target.value;
                onUpdate('experience', newExperience);
              }}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) => {
                const newExperience = [...data.experience];
                newExperience[index].description = e.target.value;
                onUpdate('experience', newExperience);
              }}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button onClick={addProject} className="text-blue-500 hover:text-blue-600">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        {(data.projects || []).map((project, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => {
                const newProjects = [...(data.projects || [])];
                newProjects[index].name = e.target.value;
                onUpdate('projects', newProjects);
              }}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => {
                const newProjects = [...(data.projects || [])];
                newProjects[index].description = e.target.value;
                onUpdate('projects', newProjects);
              }}
              className="w-full p-2 border rounded"
              rows="2"
            />
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <button onClick={addSkill} className="text-blue-500 hover:text-blue-600">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        {data.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => {
              const newSkills = [...data.skills];
              newSkills[index] = e.target.value;
              onUpdate('skills', newSkills);
            }}
            className="w-full p-2 border rounded mb-2"
          />
        ))}
      </section>

      {/* Languages Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Languages</h2>
          <button onClick={addLanguage} className="text-blue-500 hover:text-blue-600">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        {(data.languages || []).map((language, index) => (
          <input
            key={index}
            type="text"
            placeholder="Language"
            value={language}
            onChange={(e) => {
              const newLanguages = [...(data.languages || [])];
              newLanguages[index] = e.target.value;
              onUpdate('languages', newLanguages);
            }}
            className="w-full p-2 border rounded mb-2"
          />
        ))}
      </section>
    </div>
  );
}

export default ResumeForm;