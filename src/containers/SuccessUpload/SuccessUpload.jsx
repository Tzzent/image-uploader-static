import { BsCheckCircleFill } from 'react-icons/bs';
import './SuccesUpload.css';

export default function SuccesUpload({ setWay, url, setUrl }) {

  const copyLink = async () => {
    const input = document.querySelector('.input-link')
    input.select();
    await navigator.clipboard.writeText(input.value)
    setTimeout(() => {
      setWay(1)
      setUrl(null)
    }, 1000)
  }
  if (url == null) {
    return <h2>Loading...</h2>
  }
  return (
    <div className='card'>
      <div className="container__card">
        <div className="title__success">
          <BsCheckCircleFill size={35} color='green' />
          <h2>Uploaded Successfully!</h2>
        </div>

        <div className='image__uploaded'>
          <img src={url} alt='Image'></img>
        </div>

        <div className='box__copy'>
          <input className='input-link' value={url} readOnly />
          <button onClick={() => copyLink()}> Copy Link</button>
        </div>
      </div>
    </div>
  )

}