import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from "react-dropzone";
import ReactCropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import styled from "styled-components";

const StyledDropdown = styled.div`
  border: dashed 5px #ddd;
`;


const dataURLtoFile = (dataUrl, filename) => {
  const arr = dataUrl.split(',');
  const mimeTxt = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mimeTxt});
}

const Cropper = ({ onCrop=()=>{} }) => {
  const [cropperData, setCropperData] = useState(null)
  const cropper = useRef();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/jpeg, image/png',
    onDrop: acceptedFiles => {
      if (!acceptedFiles?.[0]) return;
      setCropperData({
        name: acceptedFiles[0].name,
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
  });

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    if(cropperData) URL.revokeObjectURL(cropperData.preview);
  }, [cropperData]);

  const handleCrop = () => {
    try {
      const preview = cropper.current.cropper.getCroppedCanvas().toDataURL();
      const file = dataURLtoFile(preview, cropperData.name);
      onCrop({ file, preview });
    } catch (e) {
      //console.log(e)
      console.error('unknown error')
    }
  }
  const clearPhoto = () => {
    setCropperData(null);
    onCrop({ file: undefined, preview: undefined });
  }

  if (!cropperData)
    return (
      <div className="w-100">
        <StyledDropdown {...getRootProps({className: 'text-dark-50 d-flex flex-column cursor-pointer my-1 py-4 px-2 text-center'})}>
          <input {...getInputProps()} />
          <h4 className="m-0">Przeciągnij zdjęcie</h4>
          <div className="my-3 big">lub</div>
          <h4 className="m-0">Kliknij aby wybrać plik</h4>
        </StyledDropdown>
      </div>
    );

  return (
    <>
      <div className="w-100">
        <ReactCropper
          ref={cropper}
          src={cropperData.preview}
          style={{ height: 400, width: '100%' }}

          cropend={handleCrop}
          ready={handleCrop}
        />
        <div className="mb-1"/>
      </div>
      <div className="btn btn-outline-secondary" onClick={clearPhoto}>
        Wybierz ponownie
      </div>
    </>
  );

};

export default Cropper;
