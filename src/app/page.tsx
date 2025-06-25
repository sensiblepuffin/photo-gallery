'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [ photos, setPhotos ] = useState([]);

  useEffect(() => {
    setPhotos(JSON.parse(localStorage.getItem('photos')));
  }, []);

  const Photos = () => {

    return (
      <div>
        {photos.map((photo: Blob, idx: Number) => (
          <img key={`photo-${idx}`} src={photo} />
        ))}
      </div>
    )
  };

    return (
      <div>
        <h1>Welcome to the Photo Gallery!</h1>
        <Link href="/import">Add some photos!</Link>
        <Photos />
      </div>
    );
}
