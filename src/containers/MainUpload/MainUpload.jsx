import './MainUpload.css'
import { uploadImage } from '../../requests/requests-api';
import { useRef } from 'react';

export default function MainUpload({ handleProgress, setWay, setUrl }) {
  const wrapperRef = useRef(null);

  const uploadImages = async (img) => {
    setWay(2); //Go to progress
    const formData = new FormData();
    formData.append('image', img)
    setUrl(await uploadImage(formData, handleProgress));
  }

  const uploadData = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = async () => {
      await uploadImages(input.files[0])
    }
    input.click()
  }

  const onDragEnter = (e) => wrapperRef.current.classList.add('dragover');
  const onDragLeave = (e) => wrapperRef.current.classList.remove('dragover');

  const imgDropped = async (e) => {
    e.preventDefault()
    await uploadImages(e.dataTransfer.files[0])
  }

  return (
    <div className="container__mainUpload">
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png,...</p>

      <div
        ref={wrapperRef}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => imgDropped(e)}
        onDragEnter={(e) => onDragEnter(e)}
        onDragLeave={(e) => onDragLeave(e)}
        className="box__upload">
      </div>

      <div className='choose__file'>
        <p>Or</p>
        <button onClick={uploadData}>Choose a file</button>
      </div>
    </div>
  )
}