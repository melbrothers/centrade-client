import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

import './imageUploader.styles.scss';

const ImageUploader = () => {
  // const [imageUrls, setImageUrls] = useState([]);
  const [uploadedImages, setUploadedImages] = useState({ images: [] });

  const onLoadFileChange = event => {
    const url = URL.createObjectURL(event.target.files[0]);
    // imageUrls.push(url);
    // setImageUrls(imageUrls);
    uploadedImages.images.push(url)
    setUploadedImages({ images: uploadedImages.images });
  };


  return (
    < div className='image-uploader' >
      <div className='item-pictures'>
        {
          uploadedImages.images ?
            uploadedImages.images.map((url, index) => {
              return (<img className='item-pic' src={url} alt='item image' key={index} />)
            }) : null
        }
      </div>
      <input
        accept="image/*"
        className="upload-image hidden"
        id="raised-button-file"
        type="file"
        onChange={onLoadFileChange}
      />
      <label htmlFor="raised-button-file">
        <Fab aria-label="add" className="add-item-image-btn" variant="round" component="span">
          <AddIcon color='action' fontSize='large' />
        </Fab>
      </label>
    </div >
  )
};

export default ImageUploader;