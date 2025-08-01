import React, { useState } from 'react'
import H2 from '../h2'
import Cookies from "js-cookie";

const UpdateTimetable = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const departments = [
    'Architecture & Interior Design',
    'Computer Science',
    'Electronics & Telecommunication',
    'Fashion Technology',
    'Modern Office Management',
    'Exam Time Table timetable'
  ]

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!selectedDepartment || !selectedFile) {
      alert('Please select both department and file')
      return
    }

    // Here you would typically handle the file upload
    // For example, using FormData and sending to your backend
    const formData = new FormData()
    formData.append('department', selectedDepartment)
    formData.append('timetable', selectedFile)



  try {
    const response = await fetch('https://srgpc-colage.onrender.com/api/upload-timetable', {
      method: 'POST',
      headers: {
              authorization: Cookies.get("auth")
            },
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      alert('Timetable uploaded successfully!');
    } else {
      alert(`Upload failed: ${result.message}`);
    }
  } catch (error) {
    alert('An error occurred while uploading the file.');
    console.log(error)
    console.error(error);
  }



      setSelectedDepartment('')
      setSelectedFile(null)

  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Update Department Timetables"></H2>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-md p-6 main"encType="multipart/form-data">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Department
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Timetable (PDF)
            </label>
            <input
             name="timetable"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="abtn"
          ><a href="">
            Update Timetable</a>
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateTimetable 