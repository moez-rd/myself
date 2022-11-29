import { ChangeEventHandler, FC } from 'react'

interface Props {
  name: string
  id: string
  type: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const FormInput: FC<Props> = ({
  name,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mt-3">
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="bg-transparent border w-full border-primary-300 px-3 py-2 focus:outline-secondary-500 rounded-lg"
      />
    </div>
  )
}

export default FormInput
