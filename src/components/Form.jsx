import { useRef, useEffect, useCallback } from 'react'
import FormInput from './FormInput'
import Modal from './Modal'
import { useForm } from 'react-hook-form'

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const ERROR_MSG = {
    required: '필수 정보입니다.',
    invalidId:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
    invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
}

const Form = () => {
    const { register, handleSubmit, setFocus, getValues, formState, trigger } =
        useForm({
            mode: 'onBlur',
        })

    const modalRef = useRef(null)

    const onSubmit = useCallback(() => {
        modalRef.current.showModal()
    }, [])

    useEffect(() => {
        setFocus('id')
    }, [])

    return (
        <>
            <form
                id="form"
                className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    id={'id'}
                    label={'아이디'}
                    errorMsg={formState.errors['id']?.message}
                    inputProps={{
                        type: 'text',
                        placeholder: '아이디를 입력해주세요.',
                        ...register('id', {
                            pattern: {
                                value: ID_REGEX,
                                message: ERROR_MSG.invalidId,
                            },
                            required: ERROR_MSG.required,
                        }),
                    }}
                    trigger={trigger}
                />
                <FormInput
                    id={'pw'}
                    label={'비밀번호'}
                    errorMsg={formState.errors['pw']?.message}
                    inputProps={{
                        type: 'password',
                        placeholder: '비밀번호를 입력해주세요',
                        autoComplete: 'off',
                        ...register('pw', {
                            pattern: {
                                value: PW_REGEX,
                                message: ERROR_MSG.invalidPw,
                            },
                            required: ERROR_MSG.required,
                            onBlur: () => trigger('confirmPw'),
                        }),
                    }}
                />
                <FormInput
                    id={'confirmPw'}
                    label={'비밀번호 확인'}
                    errorMsg={formState.errors['confirmPw']?.message}
                    inputProps={{
                        type: 'password',
                        placeholder: '비밀번호 확인을 입력해주세요.',
                        autoComplete: 'off',
                        ...register('confirmPw', {
                            validate: {
                                sameWithPw: (v) =>
                                    v === getValues('pw') ||
                                    ERROR_MSG.invalidConfirmPw,
                            },
                            required: ERROR_MSG.required,
                        }),
                    }}
                />
                <div className="flex items-center justify-center">
                    <input
                        id="submit"
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                        value="가입하기"
                    />
                </div>
            </form>
            <Modal ref={modalRef} getValues={getValues} />
        </>
    )
}

export default Form
