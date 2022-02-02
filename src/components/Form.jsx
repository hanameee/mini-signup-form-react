const Form = () => {
    return (
        <form
            class="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            autocomplete="off"
        >
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="id"
                >
                    아이디
                </label>
                <input
                    class="shadow border rounded w-full py-2 px-3 text-gray-700"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                />
                <div class="mt-1 mb-3 text-xs text-red-500"></div>
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="pw"
                >
                    비밀번호
                </label>
                <input
                    type="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight"
                    placeholder="비밀번호를 입력해주세요"
                    autocomplete="off"
                />
                <div class="mt-1 mb-3 text-xs text-red-500"></div>
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="pw-check"
                >
                    비밀번호 확인
                </label>
                <input
                    type="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    placeholder="비밀번호 확인을 입력해주세요."
                    autocomplete="off"
                />
                <div class="mt-1 mb-3 text-xs text-red-500"></div>
            </div>
            <div class="flex items-center justify-center">
                <input
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                    value="가입하기"
                />
            </div>
        </form>
    )
}

export default Form
