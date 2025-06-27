'use client'

import { Add } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useRef } from "react";

export const UploadForm = () => {
  const imgRef = useRef(null);

  const onChangeFile = (evt) => {
    let selected = evt.target.files;
    let photos = JSON.parse(localStorage.getItem("photos")) || [];
    let newPhotos = [];
    for (let i = 0; i < selected.length; i++) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        newPhotos = newPhotos.concat([reader.result.toString()]);
        // console.info('UploadForm: new', newPhotos);
        localStorage.setItem("photos", JSON.stringify(photos.concat(newPhotos)));
        window.dispatchEvent(
          new StorageEvent('storage', 
            { key: 'photos', newValue: reader.result.toString() }
          )
        );
      }, false);

      if (selected.item(i)) {
        reader.readAsDataURL(selected.item(i));
      }
    }
  };

  const handleClick = () => {
    imgRef.current.click();
  }

  return (
    <Box sx={{ position: 'fixed', right: '40px', bottom: '40px' }}>
      <input
        type='file'
        ref={imgRef}
        multiple
        style={{ display: 'none' }}
        onChange={onChangeFile}
      />
      <IconButton sx={{ width: '20px', height: '20px' }} onClick={handleClick}>
        <Add color="primary" sx={{ fontSize: '48px', border: 'solid', borderRadius: '5px', borderWidth: '2px' }} />
      </IconButton>
    </Box>
  )
}

export default UploadForm;