import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/home.css'
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "../store/customerReducer";




const Blog = () => {


    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.customerReducer.customers)
    /**состояние input для ввода зарплаты**/
    const [cashInput, setCashInput] = useState('');

    const handleCashInput = (event) => {
        setCashInput(event.target.value)
    }

    const addCash = (cash) => {
        /*прокидываем эекшн*/
        dispatch({type: "ADD_CASH", payload: cash})
        /*устанавливаем 0 значение состояния инпута*/
        setCashInput('')
        /*обнуляем отображение в инпуте на странице*/
        document.getElementById('cashInput').value = ''

    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(), //
        }
        dispatch(addCustomerAction(customer))
    }
    const removeCustomer = (customer) =>{
        dispatch(removeCustomerAction(customer.id))
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
                                    />
                                    <Form.Check
                                        inline
                                        label="$"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Euro"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                </div>
                            ))}
                        </Form>
                        <div className="wrapMoney">
                            <div>
                                <div className="wrapMoneyControl">
                                    <div className="wrapMoneyControlInput">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <Form.Control
                                                aria-label="Amount (to the nearest dollar)"
                                                placeholder="enter a number"
                                                id="cashInput"
                                                onChange={handleCashInput}
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className="wrapMoneyControlButton">
                                        <Button variant="primary" onClick={() => addCash(Number(cashInput))}>+</Button>
                                        <Button variant="primary" onClick={() => getCash(Number(prompt()))}>-</Button>
                                    </div>
                                </div>
                                <div className="wrapMoneyState">
                                    <p>{cash}</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="wrapContactContainer">
                    <Container style={{ width: '500px' }}>
                        <Button variant="primary" onClick={() => addCustomer(prompt())}>Add</Button>
                        {customers.length > 0 ? // если длина массива > 0 то отрисовываем первый див если нет то div после :
                            <div>
                                {customers.map(customer => //пробежались по массиву и для каждого элемента создаем div с именем элемента
                                    <div onClick={() => removeCustomer(customer)}
                                         style={{
                                             fontsize: "2rem",
                                             border: "1px solid black",
                                             marginTop: 5,
                                             padding: "10px"
                                         }}>
                                        {customer.name}
                                    </div>
                                )}
                            </div>
                            :
                            <div style={{fontsize: "2rem", marginTop: 20}}>
                                Клиенты отсутствуют!
                            </div>
                        }
                    </Container>
                </div>
            </div>
        );
}

export default Blog;
