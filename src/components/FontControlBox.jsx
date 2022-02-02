const FontControlBox = () => {
    return (
        <aside className="flex absolute bottom-0 right-0">
            <button className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full">
                +
            </button>
            <button className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full">
                -
            </button>
        </aside>
    )
}

export default FontControlBox
