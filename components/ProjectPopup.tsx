import '../styles/popup.css'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  renderContent: JSX.Element
}

export default function PopUp({ setShow, title, renderContent }: Props) {
  return (
    <>
      <h2 className="popup-title">{title}</h2>
      <button id="close" onClick={() => setShow(false)}>
        x
      </button>
      {renderContent}
    </>
  )
}
