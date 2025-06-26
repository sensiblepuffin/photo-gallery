import { Add, Delete } from "@mui/icons-material";
import { Box, Button, IconButton, ImageList, ImageListItem } from "@mui/material";

const Photo = ({ children }) => (
  <ImageListItem sx={{ border: 'solid', borderWidth: '1px' }}>
    {children}
  </ImageListItem>
);

export const Photos = ({ photos }) => {

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
      <Photo key={`photo-add`}>
        <Box minHeight={300} sx={{ display: 'flex' }}>
          <Button sx={{ height: '100%', width: '100%' }}>
            <Add />
          </Button>
        </Box>
      </Photo>
    </ImageList>
  );
};