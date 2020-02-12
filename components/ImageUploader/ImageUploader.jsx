import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';

import { create_blob } from '../../redux/quote/quote.util';

import { setQuoteImages } from '../../redux/quote/quote.actions';

import AddIcon from '@material-ui/icons/Add';

import './imageUploader.styles.scss';

const ImageUploader = ({ saveUploadImages }) => {
  const [uploadedImages, setUploadedImages] = useState({ images: [] });
  const [selectedFile, setSelectedFile] = useState(null);

  const onLoadFileChange = event => {
    if (event.target.files[0]) {
      const sFile = event.target.files[0];
      const url = URL.createObjectURL(sFile);
      setSelectedFile(sFile);
      uploadedImages.images.push(url);
      setUploadedImages({ images: uploadedImages.images });
    }
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
        onChange={() => onLoadFileChange(event)}
      />
      <label htmlFor="raised-button-file">
        <Fab aria-label="add" className="add-item-image-btn" variant="round" component="span">
          <AddIcon color='action' fontSize='large' />
        </Fab>
      </label>
    </div >
  )
};

const mapDispatchToProps = dispatch => ({
  saveUploadImages: images => dispatch(setQuoteImages(images)),
});

export default connect(null, mapDispatchToProps)(ImageUploader);