import React, { useState, useEffect } from 'react'
import H2 from '../h2'
import Cookies from "js-cookie"

const UpdateMaterials = () => {
  const [departments, setDepartments] = useState([])
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Form states
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    type: 'PDF',
    fileUrl: ''
  })

  useEffect(() => {
    fetchDepartments()
  }, [])

  const fetchDepartments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/department-materials')
      if (!response.ok) {
        throw new Error('Failed to fetch departments')
      }
      const data = await response.json()
      // Filter out any departments with invalid materials
      const validDepartments = data.map(dept => ({
        ...dept,
        materials: Array.isArray(dept.materials) 
          ? dept.materials.filter(m => m && m.title && m.type && m.fileUrl)
          : []
      }))
      setDepartments(validDepartments)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleDepartmentSelect = (dept) => {
    setSelectedDepartment(dept)
    setMaterials(Array.isArray(dept.materials) ? dept.materials.filter(m => m && m.title && m.type && m.fileUrl) : [])
  }

  const handleAddMaterial = async (e) => {
    e.preventDefault()
    if (!selectedDepartment || !newMaterial.title || !newMaterial.type || !newMaterial.fileUrl) {
      alert('Please fill all required fields')
      return
    }

    try {
      const updatedMaterials = [...materials, newMaterial]
      const response = await fetch(`http://localhost:5000/api/department-materials/${selectedDepartment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Cookies.get("auth")
        },
        body: JSON.stringify({
          name: selectedDepartment.name,
          icon: selectedDepartment.icon,
          materials: updatedMaterials
        })
      })

      if (!response.ok) {
        throw new Error('Failed to add material')
      }

      const updatedDept = await response.json()
      setMaterials(updatedDept.data.materials)
      setNewMaterial({ title: '', type: 'PDF', fileUrl: '' })
      alert('Material added successfully')
    } catch (err) {
      alert('Error adding material: ' + err.message)
    }
  }

  const handleDeleteMaterial = async (materialIndex) => {
    if (!window.confirm('Are you sure you want to delete this material?')) {
      return
    }

    try {
      const updatedMaterials = materials.filter((_, index) => index !== materialIndex)
      const response = await fetch(`http://localhost:5000/api/department-materials/${selectedDepartment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Cookies.get("auth")
        },
        body: JSON.stringify({
          name: selectedDepartment.name,
          icon: selectedDepartment.icon,
          materials: updatedMaterials
        })
      })

      if (!response.ok) {
        throw new Error('Failed to delete material')
      }

      const updatedDept = await response.json()
      setMaterials(updatedDept.data.materials)
      alert('Material deleted successfully')
    } catch (err) {
      alert('Error deleting material: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <H2 className="text-3xl font-bold text-center mb-8" h2="Loading..."></H2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <H2 className="text-3xl font-bold text-center mb-8" h2="Error"></H2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <H2 className="text-3xl font-bold text-center mb-8" h2="Update E-Learning Department Materials"></H2>
        
        {/* Department Selection */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Department
          </label>
          <select
            value={selectedDepartment?._id || ''}
            onChange={(e) => {
              const dept = departments.find(d => d._id === e.target.value)
              handleDepartmentSelect(dept)
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Add New Material Form */}
        {selectedDepartment && (
          <div className="bg-white rounded-sm shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Add New Material</h3>
            <form onSubmit={handleAddMaterial} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Material Title
                </label>
                <input
                  type="text"
                  value={newMaterial.title}
                  onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Material Type
                </label>
                <select
                  value={newMaterial.type}
                  onChange={(e) => setNewMaterial({...newMaterial, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="Document">Document</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  File URL
                </label>
                <input
                  type="text"
                  value={newMaterial.fileUrl}
                  onChange={(e) => setNewMaterial({...newMaterial, fileUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="abtn"
              >
                Add Material
              </button>
            </form>
          </div>
        )}

        {/* Materials List */}
        {selectedDepartment && (
          <div className="bg-white rounded-sm shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Current Materials</h3>
            <div className="space-y-4">
              {materials.map((material, index) => (
                <div key={material._id || index} className="flex items-center justify-between p-4 border border-gray-200 rounded-sm">
                  <div>
                    <h4 className="font-semibold">{material.title}</h4>
                    <p className="text-sm text-gray-600">Type: {material.type}</p>
                    <p className="text-sm text-gray-600">URL: {material.fileUrl}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteMaterial(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {materials.length === 0 && (
                <p className="text-gray-500 text-center">No materials added yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UpdateMaterials 