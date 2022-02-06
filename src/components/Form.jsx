import { useState, useContext } from 'react'
import { FormContext } from '../App'
import FormInput from './FormInput'

const initialErrorData = {
    id: true,
    pw: true,
    confirmPw: true,
}

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9W]{8,16}$')

const Form = () => {
    const [errorData, setErrorData] = useState(initialErrorData)
    const { formData } = useContext(FormContext)

    const handleOnBlur = (id) => {
        const validateResult = validateInput(id)
        setErrorData((errorData) => ({ ...errorData, [id]: validateResult }))
        if (id === 'pw' && formData.confirmPw) {
            handleOnBlur('confirmPw')
        }
    }

    const validateInput = (id) => {
        const value = formData[id]
        if (value.length === 0) return 'required'
        switch (id) {
            case 'id':
                return ID_REGEX.test(value) ? true : 'invalidID'
            case 'pw':
                return PW_REGEX.test(value) ? true : 'invalidPW'
            case 'confirmPw':
                return value === formData.pw ? true : 'invalidConfirm'
            default:
                return
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = Object.values(errorData).every(
            (value) => value === undefined
        )
        console.log(isValid, errorData)
    }

    return (
        <form
            className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <FormInput
                label="아이디"
                id="id"
                inputProps={{
                    type: 'text',
                    placeholder: '아이디를 입력해주세요.',
                    // autoFocus: true,
                }}
                handleOnBlur={handleOnBlur}
                errorData={errorData}
            />
            <FormInput
                label="비밀번호"
                id="pw"
                inputProps={{
                    type: 'password',
                    placeholder: '비밀번호를 입력해주세요',
                    autoComplete: 'off',
                }}
                handleOnBlur={handleOnBlur}
                errorData={errorData}
            />
            <FormInput
                label="비밀번호 확인"
                id="confirmPw"
                inputProps={{
                    type: 'password',
                    placeholder: '비밀번호 확인을 입력해주세요.',
                    autoComplete: 'off',
                }}
                handleOnBlur={handleOnBlur}
                errorData={errorData}
            />
            <div className="flex items-center justify-center mt-6">
                <input
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                    value="가입하기"
                />
            </div>
        </form>
    )
}

export default Form
