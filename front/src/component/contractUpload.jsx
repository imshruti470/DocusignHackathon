import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ContractUpload = () => {
  const [selectedContractType, setSelectedContractType] = useState('');
  const [files, setFiles] = useState([]);

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf, .docx', // Specify accepted file types
    multiple: false, // Allow only one file to be uploaded at a time
  });

  const handleContractTypeChange = (e) => {
    setSelectedContractType(e.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload Your Contract</h2>

      {/* File Upload Section */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag and drop a file here, or click to select a file</p>
        <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOCX</p>
      </div>

      {/* Display Uploaded File */}
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium">Uploaded File:</h3>
          <p>{files[0].name}</p>
        </div>
      )}

      {/* Contract Type Selection */}
      <div className="mt-4">
        <label htmlFor="contractType" className="block text-gray-700 font-medium">
          Select Contract Type
        </label>
        <select
          id="contractType"
          value={selectedContractType}
          onChange={handleContractTypeChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
        >
          <option value="">-- Select --</option>
          <option value="nda">Non-Disclosure Agreement (NDA)</option>
          <option value="employment">Employment Contract</option>
          <option value="service">Service Agreement</option>
          <option value="sales">Sales Contract</option>
          <option value="lease">Lease Agreement</option>
        </select>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          disabled={!files.length || !selectedContractType}
        >
          Upload Contract
        </button>
      </div>
    </div>
  );
};

export default ContractUpload;
