import React, { useState } from 'react'

const Task = () => {
    const [task,setTask] = useState("")
    const [error,setError] = useState(false)
    const handleOnchane =(e)=>{
       setTask(e.target.value);
        
    }
    const handleAddTaskBtn =()=>{
        
        if (!task) {
            console.log("task is missing");
            setError(true)

            
            
        }

        
        
    }
  return (
    <>
<div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6">
  <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-3">
    CRUD Operations List
  </h1>
  <div className="mb-8 p-5 border border-green-200 rounded-lg bg-green-50 shadow-md">
    <h2 className="text-xl font-semibold text-green-800 mb-4">
      ➕ Add New Record
    </h2>
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 items-end">
      <div className="flex-grow w-full md:w-auto">
        <label
          htmlFor="new_name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input onChange={handleOnchane}
          type="text"
          id="new_name"
          placeholder="Enter name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 shadow-sm"
        />
      </div>
      <div className="flex-grow w-full md:w-auto">
        <label
          htmlFor="new_status"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Status
        </label>
        <input
          type="text"
          id="new_status"
          placeholder="e.g., Active or Inactive"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 shadow-sm"
        />
      </div>
      <button onClick={handleAddTaskBtn}
        type="submit"
        className="w-full md:w-auto py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-200 shadow-md"
      >
        Save
      </button>
    </div>
    {error && 
<div  className="py-5 text-red-300 mt-3 text-center">Something Error</div>
    }
  </div>
  <h2 className="text-xl font-extrabold text-gray-900 mb-4 border-b pb-2">
    Existing Records
  </h2>
  <ul className="space-y-4">
    <li className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-150">
      <div className="mb-3 md:mb-0">
        <p className="text-lg font-semibold text-gray-800">Record ID: #001</p>
        <p className="text-sm text-gray-500">Name: Jane Doe | Status: Active</p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-md transition duration-150">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded-md transition duration-150">
          Delete
        </button>
      </div>
    </li>
    <li className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-150">
      <div className="mb-3 md:mb-0">
        <p className="text-lg font-semibold text-gray-800">Record ID: #002</p>
        <p className="text-sm text-gray-500">
          Name: John Smith | Status: Inactive
        </p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-md transition duration-150">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded-md transition duration-150">
          Delete
        </button>
      </div>
    </li>
  </ul>
</div>

    </>
  )
}

export default Task