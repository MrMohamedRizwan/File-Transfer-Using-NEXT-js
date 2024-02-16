// pages/admin-files.js

import { useState, useEffect } from 'react';

const AdminFilesPage = () => {
  // State to store the list of users
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ]);
  // State to store the files sent by the selected user
  const [selectedUserFiles, setSelectedUserFiles] = useState([]);

  // Function to fetch files sent by the selected user
  const handleUserSelect = async (userId) => {
    // Dummy files data (replace with actual data fetching)
    const dummyFiles = [
      { id: 1, name: 'File 1' },
      { id: 2, name: 'File 2' },
      { id: 3, name: 'File 3' }
    ];
    setSelectedUserFiles(dummyFiles);
  };

  return (
    <div className="container mx-auto py-6 flex flex-row justify-center">
      {/* Left side: Users list */}
      <div className="w-1/4 mr-4">
        <h2 className="text-xl font-semibold mb-4">Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="cursor-pointer hover:underline" onClick={() => handleUserSelect(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Files sent by the selected user */}
      <div className="w-3/4">
        <h2 className="text-xl font-semibold mb-4">Files Sent by Selected User</h2>
        <ul>
          {selectedUserFiles.map((file) => (
            <li key={file.id} className="text-lg text-gray-800">{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminFilesPage;
