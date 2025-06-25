'use client'

import React from 'react'

// const getBase64Image = (img: canvas) => {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

const UploadForm = () => {

  const fileHandle = (evt) => {
    let selected = evt.target.files;
    console.info('selected', selected);
    let photos = JSON.parse(localStorage.getItem("photos")) || [];
    let newPhotos = [];
    for (let i = 0; i < selected.length; i++) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        console.info('load', reader.result.toString());
        newPhotos = newPhotos.concat([reader.result.toString()]);

        console.info('old', photos);
        console.info('new', newPhotos);
        console.info('combined', photos.concat(newPhotos));

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
