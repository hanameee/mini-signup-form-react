import { createContext, useState } from 'react'
import FormInput from './FormInput'

const initialErrorData = {
    id: true,
    pw: true,
    confirmPw: true,
}

export const ErrorContext = createContext({
    errorData: initialErrorData,
    setErrorMsg: () => {},
})

const Form = () => {
    const [errorData, setErrorData] = useState(initialErrorData)

    return (
        <ErrorContext.Provider value={{ errorData, setErrorData }}>
            <form
                className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                autoComplete="off"
            >
                <FormInput
                    label="아이디"
                    id="id"
                    inputProps={{
                        type: 'text',
                        placeholder: '아이디를 입력해주세요.',
                        // autoFocus: true,
                    }}
                />
                <FormInput
                    label="비밀번호"
                    id="pw"
                    inputProps={{
                        type: 'password',
                        placeholder: '비밀번호를 입력해주세요',
                        autoComplete: 'off',
                    }}
                />
                <FormInput
                    label="비밀번호 확인"
                    id="confirmPw"
                    inputProps={{
                        type: 'password',
                        placeholder: '비밀번호 확인을 입력해주세요.',
                        autoComplete: 'off',
                    }}
                />
                <div className="flex items-center justify-center mt-6">
                    <input
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                        value="가입하기"
                    />
                </div>
            </form>
        </ErrorContext.Provider>
    )
}

export default Form
