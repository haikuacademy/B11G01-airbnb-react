import { useState } from 'react'

function Gallery(props) {
  const images = props.images
  console.log('gallery', props)
  return (
    <div className="grid grid-cols-2 gap-10 rows-1 p-2">
      <div className="grid">
        <img src={images[1]} alt="House" className="rounded-md" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-1">
        {images.map((image, index) => (
          <img key={index} src={image} className="rounded-md" alt={'house'} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
