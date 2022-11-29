import { ChangeEventHandler, FC } from 'react'

interface Props {
  name: string
  id: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const FormTextarea: FC<Props> = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mt-3">
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={8}
        required
        // Min height (min-h-[20px]) need to be fixed
        className="bg-transparent border min-h-[20px] w-full border-primary-300 px-3 py-1.5 focus:outline-secondary-500 rounded-lg"
      />
    </div>
  )
}

export default FormTextarea
