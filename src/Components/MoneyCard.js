import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/home.css'
import {useDispatch, useSelector} from "react-redux";
import cash_0 from "../Assets/cash_0.jpg"
import cash_1 from "../Assets/cash_1.jpg"
import cash_2 from "../Assets/cash_2.jpg"
import cash_3 from "../Assets/cash_3.jpg"
import {cashReducer} from "../store/cashReducer";


const MoneyCard = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    /**состояние input для ввода зарплаты**/
    const [cashInput, setCashInput] = useState('');
    /**состояние для радиокнопок выбора волют**/
    const [currency, setCurrency] = useState('Руб');
    /**состояние для расчета зарплаты**/
    const [salary, setSalary] = useState(0);

    /*устанавливаем значение состояния инпута*/
    const handleCashInput = (event) => {
        setCashInput(event.target.value)
    }

     /*устанавливаем значение зарплаты*/
    /*const handleSalary = (cash) => {
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
     }*/

    /*скпываем все картинки реакции*/
    const makeInvisible = () => {
        document.querySelectorAll('.wrapMoneyReactionImg').forEach(function (element) {
            element.style.visibility = 'hidden'
        })
    }

    const makeVisible = (value) => {
        makeInvisible()
        //handleSalary(cash)
        console.log('это до if '  + ' ' +  value )
        if ( (0 <= value) && (value < 35000) ) {
            document.querySelector('.card0').style.visibility = 'visible'
            console.log('if №0' + ' ' +  value)
        }
        if ( (35000 <= value) && (value < 50000)) {
            document.querySelector('.card1').style.visibility = 'visible'
            console.log('if №1'  + ' ' +  value)
        }
        if ( (50000 <= value) && (value < 65000)) {
            document.querySelector('.card2').style.visibility = 'visible'
            console.log('if №2' + ' ' + value)
        }
        if ( 65000 <= value ) {
            document.querySelector('.card3').style.visibility = 'visible'
            console.log('if №3'  + ' ' +  value)
        }
    }

    const clearInputCash = () => {
        setCashInput('') /*устанавливаем 0 значение состояния инпута*/
        document.getElementById('cashInput').value = ''  /*обнуляем отображение в инпуте на странице*/
    }

    const subCash = (value) => {
        dispatch({type: "SUBMIT_CASH", payload: value}) /*прокидываем экшн*/
        console.log('dispatch subCash ' +  cash)
        makeVisible(value)
        clearInputCash()

    }

    const addCash = (value) => {
        dispatch({type: "ADD_CASH", payload: value})
        const currentCash = cash + value
        makeVisible(currentCash)
        clearInputCash()
    }

    const getCash = (value) => {
        dispatch({type: "GET_CASH", payload: value})
        const currentCash = cash - value
        makeVisible(currentCash)
        clearInputCash()
    }

    const clearCash = (value) => {
        dispatch({type: "CLEAR_CASH", payload: value})
        makeVisible(0)
        clearInputCash()
    }



    return (
        <div className="wrapMoney">
            <div className="wrapMoneyContainer">
                <Form>
                    {/*{['radio'].map((type) => (
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
                                value={'Dollar'}
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
                    ))}*/}
                </Form>
                <div className='wrapMoneyForm'>
                    <p>Введите своё предложение</p>
                    <div className="wrapMoneyControl">
                        <div className="wrapMoneyControlInput">
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Руб</InputGroup.Text>
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
                </div>
                <div className="wrapMoneyState">
                    <p>Ваше предложение составляет:</p>
                    <div className="wrapMoneyStateBox">
                        <p className='wrapMoneyStateBoxText'> {cash} руб.</p>
                        <div className='wrapMoneyReaction'>
                            <img  className={'wrapMoneyReactionImg  card0'} style={{visibility: 'visible'}} src={cash_0} alt="not interesting"/>
                            <img  className={'wrapMoneyReactionImg  card1'} style={{visibility: 'hidden'}} src={cash_1} alt="interesting"/>
                            <img  className={'wrapMoneyReactionImg  card2'} style={{visibility: 'hidden'}} src={cash_2} alt="ok that's good"/>
                            <img  className={'wrapMoneyReactionImg  card3'} style={{visibility: 'hidden'}} src={cash_3} alt="I'm in!"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MoneyCard;
