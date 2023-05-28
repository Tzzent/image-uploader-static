import React, { useEffect, useState } from 'react'
import CardImage from '../components/cards/CardImage';
import { getGallery } from '../requests/requests-api'

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [copied, setCopied] = useState(false);


  useEffect(() => {
    const fetchGallery = async () => {
      const images = await getGallery();
      setGallery(images);
    };

    fetchGallery();
  }, [])

  return (
    <div className='gallery'>
      {gallery.map((img, index) => (
        <CardImage
          key={index}
          id={img._id}
          image={img.image.secure_url}
          setCopied={setCopied}
        />
      ))}

      <div className={`
      ${copied ? 'visible' : 'hidden'}
      notification
     ` }>It has been copied to the clipboard. ✅</div>
    </div>
  )
}
