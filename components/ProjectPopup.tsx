import '../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopUp({ setShow }: Props) {
  return (
    <div>
      <button id="close" onClick={() => setShow(false)}>
        x
      </button>
      <h2>
        This Project is currently undergoing development and has yet to be
        deployed.
      </h2>
    </div>
  )
}
