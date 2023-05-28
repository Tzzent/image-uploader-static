import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const uploadImage = async (formData, handleProgress) => {
  const response = await axios(`${API}/upload`, {
    method: 'POST',
    data: formData,
    redirect: 'follow',
    onUploadProgress: (e) => handleProgress(e),
  })
  return response.data.obj.image.secure_url
}

const getGallery = async () => {
  return await axios(`${API}/gallery`, { method: 'GET', redirect: 'follow' })
    .then(data => data.data.images)
    .catch(err => console.log(err))
}

const deleteImage = async (id) => {
  await fetch(`${API}/gallery/${id}`, { method: 'DELETE', redirect: 'follow' })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

export {
  uploadImage,
  getGallery,
  deleteImage
}