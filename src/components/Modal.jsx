const Modal = () => {
    return (
        <dialog class="rounded-lg shadow-xl text-left">
            <div class="w-full rounded-lg">
                <div class="p-6 mt-3">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        입력하신 내용을 확인해주세요.
                    </h3>
                    <div class="text-left">
                        <div class="mt-2">
                            아이디
                            <p class="text-sm text-blue-500 bold"></p>
                        </div>
                        <div class="mt-2">
                            비밀번호
                            <p class="text-sm text-blue-500 bold"></p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 flex justify-center rounded-lg">
                    <button
                        type="button"
                        class="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 mr-2"
                    >
                        취소하기
                    </button>
                    <button
                        type="button"
                        class="border border-transparent bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                    >
                        가입하기
                    </button>
                </div>
            </div>
        </dialog>
    )
}
export default Modal
