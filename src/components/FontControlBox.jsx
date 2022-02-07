import { useEffect, useState } from 'react'

const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12

const $html = document.documentElement

const getBodyFontSize = () => {
    const bodyFontSize = window
        .getComputedStyle($html, null)
        .getPropertyValue('font-size')
    return parseFloat(bodyFontSize)
}

const FontControlBox = () => {
    const [fontSize, setFontSize] = useState(getBodyFontSize())
    const onClickFontSizeControl = (flag) => {
        if (flag === 'increase') {
            setFontSize((prev) => (prev += 1))
        }
        if (flag === 'decrease') {
            setFontSize((prev) => (prev -= 1))
        }
    }

    useEffect(() => {
        $html.style.fontSize = fontSize + 'px'
    }, [fontSize])

    return (
        <aside id="font-control-box" className="flex absolute bottom-0 right-0">
            <button
                className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
                onClick={() => onClickFontSizeControl('increase')}
                disabled={fontSize >= MAX_FONT_SIZE}
            >
                +
            </button>
            <button
                className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
                onClick={() => onClickFontSizeControl('decrease')}
                disabled={fontSize <= MIN_FONT_SIZE}
            >
                -
            </button>
        </aside>
    )
}

export default FontControlBox
