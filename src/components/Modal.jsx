import { useContext, forwardRef } from 'react'
import { FormContext } from '../App'

const Modal = forwardRef((props, ref) => {
    const { formState } = useContext(FormContext)

    return (
        <dialog className="rounded-lg shadow-xl text-left" ref={ref}>
            <div className="w-full rounded-lg">
                <div className="p-6 mt-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        입력하신 내용을 확인해주세요.
                    </h3>
                    <div className="text-left">
                        <div className="mt-2">
                            아이디
                            <p className="text-sm text-blue-500 bold">
                                {formState.id}
                            </p>
                        </div>
                        <div className="mt-2">
                            비밀번호
                            <p className="text-sm text-blue-500 bold">
                                {formState.pw}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex justify-center rounded-lg">
                    <button
                        type="button"
                        className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 mr-2"
                        onClick={() => ref.current.close()}
                    >
                        취소하기
                    </button>
                    <button
                        type="button"
                        className="border border-transparent bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                        onClick={() => {
                            ref.current.close()
                            window.alert('가입되었습니다 🥳')
                        }}
                    >
                        가입하기
                    </button>
                </div>
            </div>
        </dialog>
    )
})

export default Modal
