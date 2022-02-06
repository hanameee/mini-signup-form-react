import { useEffect, useRef, useContext } from 'react'
import { FormContext } from '../App'

const ERROR_MESSAGE = {
    invalidID:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPW: '8~16자 영문 대 소문자, 숫자만 사용 가능합니다.',
    invalidConfirm: '비밀번호가 일치하지 않습니다.',
    required: '필수 정보입니다.',
}

const FormInput = (props) => {
    const { label, id, inputProps, handleOnBlur, errorData } = props

    const inputRef = useRef(null)
    const { formData, setFormData } = useContext(FormContext)

    useEffect(() => {
        if (id === 'id') {
            inputRef?.current.focus()
        }
    }, [])

    useEffect(() => {})

    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id={id}
                ref={inputRef}
                onBlur={() => handleOnBlur(id)}
                onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                }
                {...inputProps}
            />
            <div className="mt-1 mb-3 text-xs text-red-500">
                {errorData[id] !== true && ERROR_MESSAGE[errorData[id]]}
            </div>
        </div>
    )
}

export default FormInput
