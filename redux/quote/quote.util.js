import api from '../../src/api';

export const saveQuote = async (quote) => {
  const saveQuoteUrl = '/api/quotes';
  return api.post(saveQuoteUrl, quote);
};

export const uploadImage = async (imageFile) => {
  const uploadImageUrl = '/api/media-objects';
  return api.post(uploadImageUrl, imageFile);
};

export const create_blob = async (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => { callback(reader.result) };
  reader.readAsDataURL(file);
};

export const addUploadImages = (uploadedImages, imageToAdd) => {

  return [...uploadedImages, imageToAdd];
};
