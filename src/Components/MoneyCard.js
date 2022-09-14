import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/home.css'
import {useDispatch, useSelector} from "react-redux";
import cash_0 from "../Assets/cash_0.jpg"
import cash_1 from "../Assets/cash_1.jpg"
import cash_2 from "../Assets/cash_2.jpg"
import cash_3 from "../Assets/cash_3.jpg"


const MoneyCard = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    /**состояние input для ввода зарплаты**/
    const [cashInput, setCashInput] = useState('');
    /**состояние для радиокнопок выбора волют**/
    const [currency, setCurrency] = useState('Руб');
    /**состояние для расчета зарплаты**/
    const [salary, setSalary] = useState();

    /*устанавливаем значение состояния инпута*/
    const handleCashInput = (event) => {
        setCashInput(event.target.value)
    }

    /*устанавливаем значение зарплаты*/
    const handleSalary = (cash) => {
        if (currency === 'Руб') {
            setSalary(cash)
        }
        if (currency === '$') {
            setSalary(cash*60)
        }
        if (currency === 'Euro') {
            setSalary(cash*65)
        }
        else {
            setSalary(cash)
        }
    }

    /*скпываем все картинки реакции*/
    const makeInvisible = () => {

        document.querySelectorAll('.wrapMoneyReactionImg').forEach(function (element) {
            element.style.visibility = 'hidden'
        })
    }

    const makeVisible = (cash) => {
        makeInvisible()
        handleSalary(cash)
        console.log('это до if ' + cash + ' ' + salary)
        if ( (0 < salary) && (salary < 30000) ) {
            document.querySelector('.card0').style.visibility = 'visible'
            console.log('if №0' + cash)
        }
        if ( (30000 < salary) && (salary < 40000)) {
            document.querySelector('.card1').style.visibility = 'visible'
            console.log('if №1' + cash + salary)
        }
        if ( (40000 < salary) && (salary < 50000)) {
            document.querySelector('.card2').style.visibility = 'visible'
            console.log('if №2' + cash + salary)
        }
        if ( 50000 < salary ) {
            document.querySelector('.card3').style.visibility = 'visible'
            console.log('if №3' + cash + salary)
        }
    }

    const clearInputCash = () => {
        setCashInput('') /*устанавливаем 0 значение состояния инпута*/
        document.getElementById('cashInput').value = ''  /*обнуляем отображение в инпуте на странице*/
    }

    const subCash = (cash) => {
        dispatch({type: "SUBMIT_CASH", payload: cash}) /*прокидываем экшн*/
        makeVisible(cash)
        clearInputCash()

    }
    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
        makeVisible(cash)
        clearInputCash()
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
        makeVisible(cash)
        clearInputCash()
    }
    const clearCash = (cash) => {
        dispatch({type: "CLEAR_CASH", payload: cash})
        makeVisible(cash)
        clearInputCash()
    }



    return (
        <div className="wrapContact">
            <div className="wrapContactContainer">
                <Container style={{ width: '500px' }}>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Руб"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    value={'Руб'}
                                    onChange={ event => setCurrency(event.target.value)}
                                />
                                <Form.Check
                                    inline
                                    label="$"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    value={'$'}
                                    onChange={ event => setCurrency(event.target.value)}
                                />
                                <Form.Check
                                    inline
                                    label="Euro"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    value={'Euro'}
                                    onChange={ event => setCurrency(event.target.value)}
                                />
                            </div>
                        ))}
                    </Form>
                    <div className="wrapMoney">
                        <div className={'wrapMoneyForm'}>
                            <p>Введите своё предложение</p>
                            <div className="wrapMoneyControl">
                                <div className="wrapMoneyControlInput">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>{currency}</InputGroup.Text>
                                        <Form.Control
                                            aria-label="Amount (to the nearest dollar)"
                                            placeholder="enter a number"
                                            id="cashInput"
                                            onChange={handleCashInput}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="wrapMoneyControlButton">
                                    <Button variant="primary" onClick={() => subCash(Number(cashInput))}>Submit</Button>
                                    <Button variant="primary" className={'squareButton'} onClick={() => addCash(Number(cashInput))}>+</Button>
                                    <Button variant="primary" className={'squareButton'} onClick={() => getCash(Number(cashInput))}>-</Button>
                                    <Button variant="danger" className={'clearButton'} onClick={() => clearCash(Number(cashInput))}>Clear</Button>
                                </div>
                            </div>
                            <div className="wrapMoneyState">
                                <p>Ваше предложение составляет {salary} руб. </p>
                            </div>
                        </div>
                        <div className={'wrapMoneyReaction'}>
                            <img  className={'wrapMoneyReactionImg  card0'} style={{visibility: 'visible'}} src={cash_0} alt="not interesting"/>
                            <img  className={'wrapMoneyReactionImg  card1'} style={{visibility: 'hidden'}} src={cash_1} alt="interesting"/>
                            <img  className={'wrapMoneyReactionImg  card2'} style={{visibility: 'hidden'}} src={cash_2} alt="ok that's good"/>
                            <img  className={'wrapMoneyReactionImg  card3'} style={{visibility: 'hidden'}} src={cash_3} alt="I'm in!"/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default MoneyCard;
