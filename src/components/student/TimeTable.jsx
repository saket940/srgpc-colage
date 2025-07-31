import React from 'react'
import H2 from '../h2'

const TimeTable = () => {
  const departments = [
  {
    name: 'Architecture & Interior Design',
    icon: '🏛️',
    file: 'Architecture-&-Interior-Design-timetable.pdf'
  },
  {
    name: 'Computer Science',
    icon: '💻',
    file: 'Computer-Science-timetable.pdf'
  },
  {
    name: 'Electronics & Telecommunication',
    icon: '📡',
    file: 'Electronics-&-Telecommunication-timetable.pdf'
  },
  {
    name: 'Fashion Technology',
    icon: '👗',
    file: 'Fashion-Technology-timetable.pdf'
  },
  {
    name: 'Modern Office Management',
    icon: '📊',
    file: 'Modern-Office-Management-timetable.pdf'
  },{
  name: 'Exam Time Table',
  icon: '🗓️',
  file: 'Exam-Time-Table-timetable.pdf'
}

]


  const handleDownload = (file) => {
    try {
      // Create a link element
      const link = document.createElement('a')
      // Set the file path (assuming files are in public/timetables folder)
      link.href = `/timetables/${file}`
      // Set the download attribute
      link.download = file
      // Append to body
      document.body.appendChild(link)
      // Trigger click
      link.click()
      // Clean up
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading file:', error)
      alert('Error downloading file. Please try again.')
    }
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Department Timetables"></H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-sm shadow-md mb-4 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <button
                  onClick={() => handleDownload(dept.file)}
                  className="text-white px-6 py-2 flex items-center gap-2"
                  style={{
                    backgroundColor: '#7a8691',
                    fontSize: 'x-large',
                    borderRadius: '7px',
                    border: 'solid #2c3e50 3px'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Timetable
                </button>
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{dept.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeTable 