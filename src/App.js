import './App.css'

function App() {
    return (
        <>
            <section className="form-wrapper">
                <form
                    id="form"
                    className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    autoComplete="off"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="id"
                        >
                            아이디
                        </label>
                        <input
                            id="id"
                            className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            type="text"
                            placeholder="아이디를 입력해주세요."
                        />
                        <div
                            id="id-msg"
                            className="mt-1 mb-3 text-xs text-red-500"
                        ></div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="pw"
                        >
                            비밀번호
                        </label>
                        <input
                            id="pw"
                            type="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight"
                            placeholder="비밀번호를 입력해주세요"
                            autoComplete="off"
                        />
                        <div
                            id="pw-msg"
                            className="mt-1 mb-3 text-xs text-red-500"
                        ></div>
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="pw-check"
                        >
                            비밀번호 확인
                        </label>
                        <input
                            id="pw-check"
                            type="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            placeholder="비밀번호 확인을 입력해주세요."
                            autoComplete="off"
                        />
                        <div
                            id="pw-check-msg"
                            className="mt-1 mb-3 text-xs text-red-500"
                        ></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <input
                            id="submit"
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                            value="가입하기"
                        />
                    </div>
                </form>
                <footer className="text-center text-gray-500 text-xs">
                    ©2022 Hanameee Corp. All rights reserved
                </footer>
            </section>
            <aside
                id="font-control-box"
                className="flex fixed bottom-0 right-0"
            >
                <button
                    id="increase-font-btn"
                    className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
                >
                    +
                </button>
                <button
                    id="decrease-font-btn"
                    className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
                >
                    -
                </button>
            </aside>
            <dialog id="modal" className="rounded-lg shadow-xl text-left">
                <div className="w-full rounded-lg">
                    <div className="p-6 mt-3">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            입력하신 내용을 확인해주세요.
                        </h3>
                        <div className="text-left">
                            <div className="mt-2">
                                아이디
                                <p
                                    id="confirm-id"
                                    className="text-sm text-blue-500 bold"
                                ></p>
                            </div>
                            <div className="mt-2">
                                비밀번호
                                <p
                                    id="confirm-pw"
                                    className="text-sm text-blue-500 bold"
                                ></p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 flex justify-center rounded-lg">
                        <button
                            id="cancel-btn"
                            type="button"
                            className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 mr-2"
                        >
                            취소하기
                        </button>
                        <button
                            id="approve-btn"
                            type="button"
                            className="border border-transparent bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                        >
                            가입하기
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default App
