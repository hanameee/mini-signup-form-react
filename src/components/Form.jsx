import { useState } from 'react'
import FormInput from './FormInput'

const ERROR_MESSAGE = {
    invalidID:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPW: '8~16자 영문 대 소문자, 숫자만 사용 가능합니다.',
    invalidConfirm: '비밀번호가 일치하지 않습니다.',
    required: '필수 정보입니다.',
}

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9W]{8,16}$')

const Form = ({ formState, setFormState, modalRef }) => {
    const [errorState, setErrorState] = useState({
        id: '',
        pw: '',
        confirmPw: '',
    })
    const validationResult = (id, value) => {
        if (value.length === 0) {
            return 'required'
        }
        switch (id) {
            case 'id':
                return ID_REGEX.test(value) ? true : 'invalidID'
            case 'pw':
                return PW_REGEX.test(value) ? true : 'invalidPW'
            case 'confirmPw':
                return formState.pw === value ? true : 'invalidConfirm'
            default:
                return
        }
    }

    const validateInput = (id, value) => {
        const result = validationResult(id, value)
        // setState에 함수 건네주기
        setErrorState((prevState) => ({
            ...prevState,
            [id]: ERROR_MESSAGE[result],
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = Object.values(errorState).every(
            (value) => value === undefined
        )
        if (isValid) {
            modalRef.current.showModal()
        }
    }

    const handleOnBlur = (e) => {
        const { id, value } = e.target
        if (id === 'pw') {
            formState.confirmPw &&
                validateInput('confirmPw', formState.confirmPw)
        }
        validateInput(id, value)
    }

    return (
        <form
            className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            autoComplete="off"
            onSubmit={onSubmit}
            onBlur={handleOnBlur}
        >
            <FormInput
                id="id"
                label="아이디"
                inputProps={{
                    type: 'text',
                    placeholder: '아이디를 입력해주세요',
                    required: true,
                    // autoFocus: true,
                }}
                formState={formState}
                setFormState={setFormState}
                errorMessage={errorState.id}
                validateInput={validateInput}
            />
            <FormInput
                id="pw"
                label="비밀번호"
                inputProps={{
                    type: 'password',
                    placeholder: '비밀번호를 입력해주세요',
                    required: true,
                    autoComplete: 'off',
                }}
                formState={formState}
                setFormState={setFormState}
                errorMessage={errorState.pw}
                validateInput={validateInput}
            />
            <FormInput
                id="confirmPw"
                label="비밀번호 확인"
                inputProps={{
                    type: 'password',
                    placeholder: '비밀번호를 입력해주세요',
                    required: true,
                    autoComplete: 'off',
                }}
                formState={formState}
                setFormState={setFormState}
                errorMessage={errorState.confirmPw}
                validateInput={validateInput}
            />
            <div className="flex justify-center">
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
