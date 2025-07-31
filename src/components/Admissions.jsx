import React from 'react'
import H2 from './h2'

const Admissions = () => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Admissions"></H2>
        
        {/* Admission Process Section */}
        <div className="bg-white rounded-sm shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg">1. Application Submission</h4>
              <p className="text-gray-600">Submit your application form along with required documents through our online portal or in person.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg">2. Document Verification</h4>
              <p className="text-gray-600">All submitted documents will be verified by our admission committee.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg">3. Entrance Examination</h4>
              <p className="text-gray-600">Qualified candidates will be called for department-specific entrance examinations.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg">4. Interview</h4>
              <p className="text-gray-600">Shortlisted candidates will be invited for a personal interview.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg">5. Final Selection</h4>
              <p className="text-gray-600">Selected candidates will be notified and required to complete the admission formalities.</p>
            </div>
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="bg-white rounded-sm shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Required Documents</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Completed application form</li>
            <li>Recent passport size photographs</li>
            <li>Previous academic records and certificates</li>
            <li>Transfer certificate (if applicable)</li>
            <li>Character certificate</li>
            <li>Identity proof (Aadhar Card/Passport)</li>
            <li>Category certificate (if applicable)</li>
          </ul>
        </div>

        {/* Important Dates Section */}
        <div className="bg-white rounded-sm shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-sm">
              <h4 className="font-semibold">Application Start Date</h4>
              <p className="text-gray-600">1st June 2024</p>
            </div>
            <div className="border p-4 rounded-sm">
              <h4 className="font-semibold">Application End Date</h4>
              <p className="text-gray-600">30th June 2024</p>
            </div>
            <div className="border p-4 rounded-sm">
              <h4 className="font-semibold">Entrance Examination</h4>
              <p className="text-gray-600">15th July 2024</p>
            </div>
            <div className="border p-4 rounded-sm">
              <h4 className="font-semibold">Result Declaration</h4>
              <p className="text-gray-600">25th July 2024</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-sm shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Admission Office Contact</h3>
          <div className="space-y-2 text-gray-600">
            <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
            <p><strong>Email:</strong> admissions@srgp.edu.in</p>
            <p><strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
            <p><strong>Address:</strong> S.R.G.P. College, [Your College Address]</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admissions 