import { useRef, useEffect } from 'react'

// https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs

const FormInput = (props) => {
    const { label, id, inputProps, formState, setFormState, errorMessage } =
        props
    const inputRef = useRef(null)

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
                id={id}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                {...inputProps}
                ref={inputRef}
                // 객체로 변수를 넣을 때는 [] 안에 넣는다.
                onChange={(e) =>
                    setFormState({ ...formState, [id]: e.target.value })
                }
                value={formState[id]}
            />
            {errorMessage !== true && (
                <div className="mt-1 mb-3 text-xs text-red-500">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default FormInput