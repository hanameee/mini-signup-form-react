import { useEffect, useRef, useContext } from 'react'
import { FormContext } from '../App'
import { ErrorContext } from './Form'

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9W]{8,16}$')

const ERROR_MESSAGE = {
    invalidID:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPW: '8~16자 영문 대 소문자, 숫자만 사용 가능합니다.',
    invalidConfirm: '비밀번호가 일치하지 않습니다.',
    required: '필수 정보입니다.',
}

const FormInput = (props) => {
    const { label, id, inputProps } = props

    const inputRef = useRef(null)
    const { formData, setFormData } = useContext(FormContext)
    const { errorData, setErrorData } = useContext(ErrorContext)

    const handleOnBlur = () => {
        const validateResult = validateInput()
        setErrorData({ ...errorData, [id]: validateResult })
    }

    const validateInput = () => {
        const value = formData[id]
        if (value.length === 0) return 'required'
        switch (id) {
            case 'id':
                return ID_REGEX.test(value) ? true : 'invalidID'
            case 'pw':
                return PW_REGEX.test(value) ? true : 'invalidPW'
            case 'confirmPw':
                return value === formData.confirmPw ? true : 'invalidConfirmPw'
            default:
                return
        }
    }

    useEffect(() => {
        if (id === 'id') {
            inputRef?.current.focus()
        }
    }, [])

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
                onBlur={() => handleOnBlur()}
                onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                }
                {...inputProps}
            />
            {errorData[id] !== true && (
                <div className="mt-1 mb-3 text-xs text-red-500">
                    {ERROR_MESSAGE[errorData[id]]}
                </div>
            )}
        </div>
    )
}

export default FormInput
