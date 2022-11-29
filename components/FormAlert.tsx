import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEventHandler } from 'react'

interface Props {
  message: string
  type: 'success' | 'danger'
  onClose: MouseEventHandler<HTMLButtonElement>
}

const FormAlert: FC<Props> = ({ message, type, onClose }) => {
  return (
    <div
      className={`border w-48 sm:w-60 rounded-lg text-sm  px-2 py-1.5 relative ${
        type == 'success'
          ? 'bg-success-100 border-success-400 text-success-700'
          : 'bg-danger-100 border-danger-400 text-danger-700'
      }`}
    >
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-2 py-1.5">
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faX} className="text-xs" />
        </button>
      </span>
    </div>
  )
}

export default FormAlert
