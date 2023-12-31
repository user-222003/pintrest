import React, { useState } from 'react';
import { HiArrowUpCircle } from 'react-icons/hi2';

const UploadImage = ({ setFile }) => {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const renderImage = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setSelectedFile(imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="h-[450px] bg-[#e9e9e9] rounded-lg">
      <label
        className="m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600"
        htmlFor="dropzone-file"
      >
        {!selectedFile ? (
          <div className="flex items-center flex-col">
            <HiArrowUpCircle className="text-[22px]" />
            <h2 className="font-semibold">Click to Upload</h2>
          </div>
        ) : null}
        {selectedFile ? (
          <img
            src={selectedFile}
            alt="selected-image"
            width={500}
            height={800}
            className="object-contain h-[90%]"
            onLoad={renderImage}
          />
        ) : null}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default UploadImage;
