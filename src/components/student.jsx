import React from 'react'
import Bu from './bu'
import H2 from './h2'

const Student = () => {
  return (
    <div className="student-section py-8 px-4 bg-gray-50 main">
      <div className="max-w-6xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Student Portal"></H2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Links Card */}
          <div className="bg-white rounded-sm shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li><Bu href="/e-learning" data='E-Learning'></Bu></li>
              <li><Bu href="/scholarships" data='Scholarships'></Bu></li>
              <li><Bu href="/time-table" data='Time Table'></Bu></li>
              <li><Bu href="/syllabus" data='Syllabus'></Bu></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student
