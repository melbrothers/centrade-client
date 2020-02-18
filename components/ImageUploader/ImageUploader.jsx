import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { uploadImageStart } from "../../redux/quote/quote.actions";
import { selectUploadedImages } from "../../redux/quote/quote.selectors";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import "./imageUploader.styles.scss";

const ImageUploader = ({ onUploadImageStart, uploadedImages }) => {
  const onLoadFileChange = event => {
    if (event.target.files[0]) {
      const formData = new FormData();
      const sFile = event.target.files[0];
      formData.append("file", sFile, sFile.name);
      onUploadImageStart(formData);
    }
  };
  console.log("uploaded images", uploadedImages);
  return (
    <div className="image-uploader">
      <div className="item-pictures">
        {uploadedImages
          ? uploadedImages.map((mediaObj, index) => {
              return (
                <img
                  className="item-pic"
                  src={mediaObj.contentUrl}
                  alt="item image"
                  key={index}
                />
              );
            })
          : null}
      </div>
      <input
        accept="image/*"
        className="upload-image hidden"
        id="raised-button-file"
        type="file"
        onChange={() => onLoadFileChange(event)}
      />
      <label htmlFor="raised-button-file">
        <Fab
          aria-label="add"
          className="add-item-image-btn"
          variant="round"
          component="span"
        >
          <AddIcon color="action" fontSize="large" />
        </Fab>
      </label>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onUploadImageStart: file => dispatch(uploadImageStart(file))
});

const mapStateToProps = createStructuredSelector({
  uploadedImages: selectUploadedImages
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
