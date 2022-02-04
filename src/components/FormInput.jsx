import { useEffect, useRef, useState } from 'react'

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')

const FormInput = (props) => {
    const { label, id, inputProps } = props
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const validateInput = () => {
        if (value.length === 0) return 'required'
        switch (id) {
            case 'id':
                return ID_REGEX.test(value) ? true : 'invalidId'
            default:
                return
        }
    }

    useEffect(() => {
        if (id === 'id') {
            inputRef?.current.focus()
        }
    }, [])

    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id={id}
                ref={inputRef}
                onBlur={() => console.log(validateInput())}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                {...inputProps}
            />
            <div className="mt-1 mb-3 text-xs text-red-500"></div>
        </div>
    )
}

export default FormInput
