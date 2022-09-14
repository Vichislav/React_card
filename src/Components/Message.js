import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";

import '../css/home.css'
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "../store/customerReducer";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


const Message = () => {

    const dispatch = useDispatch()

    const customers = useSelector(state => state.customerReducer.customers)

    /**состояние input для ввода сообщения**/
    const [messageInput, setMessageInput] = useState('');


    const handleMessageInput = (event) => {
        setMessageInput(event.target.value)
    }

    const clearInputCash = () => {
        setMessageInput('') /*устанавливаем 0 значение состояния инпута*/
        document.getElementById('massageInput').value = ''  /*обнуляем отображение в инпуте на странице*/
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(), //
        }
        dispatch(addCustomerAction(customer))
        clearInputCash()
    }

    const removeCustomer = (customer) =>{
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="wrapMoney">
            <div className="wrapMoneyContainer">
                <Container >
                    <div className='wrapMessageBox'>
                        <InputGroup className="messageInput">
                            <Form.Control
                                aria-label="Amount (to the nearest dollar)"
                                placeholder="enter yor message"
                                id="massageInput"
                                onChange={handleMessageInput}
                            />
                        </InputGroup>
                        <Button  className={'messageButton'} variant="primary" onClick={() => addCustomer(messageInput)}>Add</Button>
                    </div>

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
                            Сообщения пока отсутствуют!
                        </div>
                    }
                </Container>
            </div>
        </div>
    );
}

export default Message;
