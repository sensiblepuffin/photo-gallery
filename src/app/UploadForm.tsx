import { Add } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import styled from '@emotion/styled';
import { useRef } from "react";

export const UploadForm = () => {
  const imgRef = useRef<HTMLInputElement | null>(null);

  const onChangeFile = (evt) => {
    console.info('click?');
    let selected = evt.target.files;
    let photos = JSON.parse(localStorage.getItem("photos")) || [];
    let newPhotos = [];
    for (let i = 0; i < selected.length; i++) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        newPhotos = newPhotos.concat([reader.result.toString()]);
        console.info('new', newPhotos);
        localStorage.setItem("photos", JSON.stringify(photos.concat(newPhotos)));
      }, false);

      if (selected.item(i)) {
        reader.readAsDataURL(selected.item(i));
      }
    }
  };

  return (
    <IconButton onClick={() => imgRef.current?.click()}>
      <Add />
      <input id="photo-upload"
        type='file'
        ref={imgRef}
        style={{ display: 'none' }}
        onChange={onChangeFile}
      // onClick={onChangeFile}
      />
    </IconButton>
  )
}