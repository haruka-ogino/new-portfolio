import '../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

export default function PopUp({ setShow, title }: Props) {
  return (
    <>
      <h2 className="popup-title">{title}</h2>
      <button id="close" onClick={() => setShow(false)}>
        x
      </button>
      <p>
        This Project is currently undergoing development and has yet to be
        deployed.
      </p>
    </>
  )
}
