import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

export default function SwitchMode({ mode, setMode }) {

    const toggleMode = () => {
        setMode(!mode)
    }

    return (
        <>
            <button onClick={toggleMode} className='btn__switchMode'>toggle mode {!mode ? <MdDarkMode size={18} /> : <MdOutlineDarkMode size={18} />}</button>
        </>
    )
}