'use client'

import React from 'react'

const UploadForm = () => {
  const fileHandle = (evt) => {
    let selected = evt.target.files;
    let photos = JSON.parse(localStorage.getItem("photos")) || [];
    let newPhotos = [];
    for (let i = 0; i < selected.length; i++) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        newPhotos = newPhotos.concat([reader.result.toString()]);
        localStorage.setItem("photos", JSON.stringify(photos.concat(newPhotos)));
      }, false);

      if (selected.item(i)) {
        reader.readAsDataURL(selected.item(i));
      }
    }

   
  };

  return (
    <form>
      <input type="file" multiple onChange={fileHandle}/>
    </form>
  );
};

export default UploadForm;
