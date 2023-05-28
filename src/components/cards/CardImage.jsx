import { useState } from "react"
import { deleteImage } from "../../requests/requests-api";

export default function CardImage({
  id,
  image,
  setCopied,
}) {
  const [isOver, setIsOver] = useState(false);

  const copyLink = async () => {
    const input = document.querySelector('.input-link')
    input.select();
    await navigator.clipboard.writeText(input.value)
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800)
  };

  const removeImg = async () => {
    await deleteImage(id);
    window.location.reload();
  }

  return (
    <div
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      style={{
        maxWidth: '26em',
        maxHeight: '40em',
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        marginBottom: '1.8em'
      }}
      className="card-img"
    >
      <img
        src={image}
        alt={id}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div
        className={`
      ${isOver ? 'visible' : 'hidden'}
      `}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(000, 000, 000, 0.5)',
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 100
        }}
      >
        <button
          onClick={removeImg}
          style={{
            backgroundColor: "red",
            color: "#fff",
            fontWeight: "bold",
            padding: ".5em",
            borderRadius: "10px",
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '.8em',
            right: '.8em',
          }}
        >Delete 🚮</button>

        <button
          onClick={copyLink}
          style={{
            backgroundColor: "blue",
            color: "#fff",
            fontWeight: "bold",
            padding: ".5em",
            borderRadius: "10px",
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            bottom: '.8em',
            left: '.8em',
          }}
        >Copy 🗒️</button>
        <input className='input-link' value={image} readOnly style={{ display: 'none' }} />
      </div>
    </div>
  )
}
