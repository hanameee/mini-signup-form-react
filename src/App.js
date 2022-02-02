import { useState, useRef } from 'react'
import Form from './components/Form'
import Footer from './components/Footer'
import FontControlBox from './components/FontControlBox'
import Modal from './components/Modal'
import './App.css'

function App() {
    const [formState, setFormState] = useState({
        id: '',
        pw: '',
        confirmPw: '',
    })
    // Ref: html dialog 태그의 native method를 사용하기 위한 방법
    const modalRef = useRef(null)

    return (
        <>
            <section className="form-wrapper">
                <Form
                    formState={formState}
                    setFormState={setFormState}
                    modalRef={modalRef}
                />
                <Footer />
            </section>
            <FontControlBox />
            <Modal formState={formState} ref={modalRef} />
        </>
    )
}

export default App
