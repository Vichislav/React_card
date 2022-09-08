import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import '../css/home.css'

const Contacts =() => {

    //создаем состояние для соотвествующего поля с его изначальным значением в initialState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //создаем состояние отражающие были ли мы внутри input и по умолчанию оно false
    //как только мы коснемся опр. input(а) будем делать его true
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    //состояние для отражение ошибки в заполнении input
    const [emailError, setEmailError] = useState('Email is empty')
    const [passwordError, setPasswordError] = useState('Password is empty')
    //состояние отвечающие за валидацию самой формы
    const [formValid, setFormValid] = useState(false)

    //управляем кнопкой submit (делаем доступной для нажатия)
    // useEffect получает 2 параметра, 1 функция, 2 массив зависимотей
    // если какая либо зав. из массива изменятесмя, то вызывается 1 функция
    useEffect(() => {
        //если какая либо ошибка вознкла то форма не валидна
        if (emailError || passwordError) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    //функция изменения состояния и до кучи валидации email
    const emailHandler = (e) => {
        setEmail(e.target.value)
        //регулярное выражение
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //если то что внутри input(а) несоответсвует re то устанавливаем след. state
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email not correct')
        }else {
            setEmailError('')
        }
    }
    //функция изменения состояния и до кучи валидации email
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        //если колличество знаков в пароле <3 или >8
        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('The correct number of characters is from 3 to 8')
            if(!e.target.value) {
                setPasswordError('Password is empty')
            }
        }else {
            setPasswordError('')
        }
    }


    // данная фынуция должна срабатывать когда мы убрали крусор с input(а)
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

        return (
            <div className="wrapContact">
                <div className="wrapContactContainer">
                    <Container style={{ width: '500px' }}>
                        <h1 className="text-center"> Contact me</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter yor message" rows="3"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                    <Card className="wrapContactCard">
                        <Card.Body> Form & Validation from React-bootstrap</Card.Body>
                    </Card>
                </div>
                <div className="wrapContactContainer">
                    <Container style={{ width: '500px' }} >
                        <h1 className="text-center"> Contact me</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                {/*если emailDirty или emailError true выводим div*/}
                                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                                <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter email" />

                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                {/*если passwordDirty или passwordError true выводим div*/}
                                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                                <Form.Control onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password"  placeholder="Enter yor password" />

                            </Form.Group>
                            <Button disabled={!formValid} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                    <Card className="wrapContactCard">
                        <Card.Body> Form from React-bootstrap & custom Validation</Card.Body>
                    </Card>
                </div>
            </div>
        );

}

export default Contacts;
