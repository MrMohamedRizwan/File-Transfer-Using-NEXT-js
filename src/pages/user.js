// pages/index.js

import RadioGroup from '@/components/DropDown';
import { useRouter } from "next/router";

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Users () {
  const router = useRouter()

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [files, setFiles] = useState([]);

  // Function to handle file drop
  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  // UseDropzone hook to handle file dropping
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Function to handle user selection
  const handleUserSelect = (event) => {
    const userId = event.target.value;
    setSelectedUsers([...selectedUsers, userId]);




    
  };
  const [valee,setVal] = useState('user');
  const handleRoleChange = (event) => {
    setVal(event.target.value);
    // console.log(valee);
  };
  const handleLogin = async(e) => {
    e.preventDefault();

    router.push('/finalPage');
  }
  
  return (
    <div className="max-w-3xl mx-auto py-8">
          <form onSubmit={handleLogin}>

      <h1 className="text-3xl font-bold mb-4">Select Sender and Drop Files</h1>

      <div className="mb-8">
        
        <h2 className="text-xl font-bold mb-2">Select Senders</h2>
        {/* <select className="w-full h-10 border-gray-300 rounded-md shadow-sm mb-2" onChange={handleUserSelect} multiple> */}
        <RadioGroup
                options={[
                  { label: 'User1', value: 'user1' },
                  { label: 'User2', value: 'user2' },
                  { label: 'User3', value: 'user3' },


                ]}
                selectedOption={valee}
                onChange={handleRoleChange}
              />
        {/* </select> */}
        {/* <p className="text-gray-500">Selected Users: {}</p> */}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Drop Files</h2>
        <div {...getRootProps()} className="border-2 border-gray-300 border-dashed p-8">
          <input {...getInputProps()} />
          <p className="text-gray-500">Drag and drop files here, or click to select files</p>
        </div>
        <ul className="mt-4">
          {files.map((file, index) => (
            <li key={index} className="text-gray-500">{file.name}</li>
          ))}
        </ul>
      </div>
      <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
              </form>
    </div>
  );
};


