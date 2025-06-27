'use client'

import { Add, Delete } from "@mui/icons-material";
import { Box, Button, IconButton, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { UploadForm } from "./UploadForm";

const Photo = ({ children }) => (
  <ImageListItem sx={{ border: 'solid', borderWidth: '1px' }}>
    {children}
  </ImageListItem>
);

export const Photos = () => {
  const [photos, setPhotos] = useState<Array<Blob>|null>([]);

  useEffect(() => {
    setPhotos(JSON.parse(localStorage.getItem('photos')) || []);
    window.addEventListener("storage", (event: StorageEvent) => { 
      if (event.key === 'photos') {
        const n: Blob = new Blob([event.newValue]);
        console.info('Photos: new', n);
        console.info('Photos: rest', photos);
        // localStorage.setItem(event.key, JSON.stringify(photos.concat(n)));
        setPhotos(JSON.parse(localStorage.getItem('photos')));
      }
    });
   }, []);

  return (
    <ImageList cols={3} gap={2} variant="masonry">
      {photos.map((photo: Blob, idx: Number) => (
        <Photo key={`photo-${idx}`}>
          <img src={photo} />
          <IconButton sx={{ position: 'absolute', right: 0, top: 0 }}>
            <Delete />
          </IconButton>
        </Photo>
      ))}
      <UploadForm />
    </ImageList>
  );
};