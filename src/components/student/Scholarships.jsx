import React from 'react'
import H2 from '../h2'

const Scholarships = () => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Scholarships"></H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-sm shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Available Scholarships</h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Merit Scholarship</h4>
                <p className="text-gray-600">For students with outstanding academic performance</p>
                <p className="text-sm text-gray-500 mt-1">Deadline: June 30, 2024</p>
              </li>
              <li className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Need-Based Scholarship</h4>
                <p className="text-gray-600">For students with financial need</p>
                <p className="text-sm text-gray-500 mt-1">Deadline: July 15, 2024</p>
              </li>
              <li className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Sports Scholarship</h4>
                <p className="text-gray-600">For outstanding athletes</p>
                <p className="text-sm text-gray-500 mt-1">Deadline: August 1, 2024</p>
              </li>
            </ul>
          </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default Scholarships 