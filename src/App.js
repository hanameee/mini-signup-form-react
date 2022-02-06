import { createContext, useState, useRef } from 'react'
import './App.css'
import FontControlBox from './components/FontControlBox'
import Footer from './components/Footer'
import Form from './components/Form'
import Modal from './components/Modal'

const initialFormData = {
    id: '',
    pw: '',
    confirmPw: '',
}

export const FormContext = createContext({
    formState: initialFormData,
    setFormData: () => {},
})

function App() {
    const [formState, setFormData] = useState(initialFormData)
    // Ref: html dialog 태그의 native method를 사용하기 위한 방법
    const modalRef = useRef(null)

    return (
        <FormContext.Provider value={{ formState, setFormData }}>
            <section className="form-wrapper">
                <Form modalRef={modalRef} />
                <Footer />
            </section>
            <FontControlBox />
            <Modal ref={modalRef} />
        </FormContext.Provider>
    )
}

export default App
