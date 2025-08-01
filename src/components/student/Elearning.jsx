import React, { useState, useEffect } from 'react'
import H2 from '../h2'

const Elearning = () => {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('https://srgpc-colage.onrender.com/api/department-materials', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch department materials')
        }

        const data = await response.json()
        console.log('API Response:', data)

        // Ensure data is an array and has the expected structure
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received from server')
        }

        // Validate and transform the data
        const validatedData = data.map(dept => ({
          _id: dept._id,
          name: dept.name,
          icon: dept.icon,
          materials: Array.isArray(dept.materials) ? dept.materials.map(material => ({
            _id: material._id,
            title: material.title,
            type: material.type,
            fileUrl: material.fileUrl
          })) : []
        }))

        setDepartments(validatedData)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching departments:', err)
        setError(err.message)
        setLoading(false)
      }
    }

    fetchDepartments()
  }, [])

  if (loading) {
    return (
      <div className="py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <H2 className="text-3xl font-bold text-center mb-8" h2="Loading Department Materials..."></H2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <H2 className="text-3xl font-bold text-center mb-8" h2="Error Loading Materials"></H2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Department E-Learning Materials"></H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept._id} className="bg-white rounded-sm shadow-md mb-4 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{dept.name}</h3>
                <div className="space-y-2 w-full">
                  {dept.materials && dept.materials.length > 0 ? (
                    dept.materials.map((material) => (
                      <button
                        key={material._id}
                        className="w-full text-white px-4 py-2 flex items-center justify-between"
                        style={{
                          backgroundColor: '#7a8691',
                          fontSize: 'medium',
                          borderRadius: '7px',
                          border: 'solid #2c3e50 2px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#2c3e50'
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#7a8691'
                        }}
                      >
                        <span>{material.title}</span>
                        <span className="text-sm bg-white px-2 py-1 rounded" style={{ color: '#1f2937' }}>
                          {material.type}
                        </span>
                      </button>
                    ))
                  ) : (
                    <p className="text-gray-500">No materials available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Elearning 