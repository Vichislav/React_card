import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";

import '../css/home.css'
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, editCustomerAction, removeCustomerAction} from "../store/customerReducer";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


const Message = () => {

    const dispatch = useDispatch()

    const customers = useSelector(state => state.customerReducer.customers)



    /**состояние input для ввода сообщения**/
    const [messageInput, setMessageInput] = useState('');
    /**состояние input для редактирования сообщения**/
    const [editInput, setEditInput] = useState('');
    /**состояние чтобы отслеживать Id (промежуточное состояние id редактируемого)**/
    const [transientId, setTransientId] = useState('');

    const handleMessageInput = (event) => {
        setMessageInput(event.target.value)
    }
    const handleEditInput = (event) => {
        setEditInput(event.target.value)
    }

    const clearInputCash = () => {
        setMessageInput('') /*устанавливаем 0 значение состояния инпута*/
        document.getElementById('messageInput').value = ''  /*обнуляем отображение в инпуте на странице*/
    }

    const addMessage = (name) => {
        const customer = {
            name,
            id: Date.now() + 1, //
        }
        dispatch(addCustomerAction(customer))
        clearInputCash()
    }

    const removeMessage = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    const editMessage = () => {
        const currentName =  document.getElementById('messageEditInput').value;
        const currentCustomer = {
            name: currentName,
            id: transientId
        }
        dispatch(editCustomerAction(currentCustomer))
        document.getElementById('editBox').classList.remove('wrapEditBox')
    }

    const transferForEditMessage = (customer) => {
        document.getElementById('messageEditInput').value = customer.name; //перекинули имя вверх в инпут для редактирования
        setTransientId(customer.id); // закинули во времянку id
        document.getElementById('editBox').classList.add('wrapEditBox'); //сделали видимым меню редактирования
    }

    const cancelEditMessage = () => {
        document.getElementById('messageEditInput').value = '';
        document.getElementById('editBox').classList.remove('wrapEditBox')
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
                                id="messageInput"
                                onChange={handleMessageInput}
                            />
                        </InputGroup>
                        <Button  className={'messageButton'} variant="primary" onClick={() => addMessage(messageInput)}>Add</Button>
                    </div>
                    <div className=' wrapEditBoxBlock' id={"editBox"}>
                        <InputGroup className="messageEditInput">
                            <Form.Control
                                aria-label="Amount (to the nearest dollar)"
                                placeholder=""
                                id="messageEditInput"
                                onChange={handleEditInput}
                            />
                        </InputGroup>
                        <Button  className={'messageButton'} variant="primary" onClick={() => editMessage()}>Ok</Button>
                        <Button  className={'messageButton'} variant='danger' onClick={() => cancelEditMessage()}>Cancel</Button>
                    </div>

                    {customers.length > 0 ? // если длина массива > 0 то отрисовываем первый див если нет то div после :
                        <div>
                            {customers.map(customer => //пробежались по массиву и для каждого элемента создаем div с именем элемента
                                <div className={'wrapMessageBoxContainer'}>
                                    <div className={'wrapMessageBoxContainerContent'}>
                                        <p className={'wrapMessageBoxContainerText'}>{customer.name}</p>
                                    </div>
                                    <div className={'wrapMessageBoxContainerBtn'}>
                                        <Button variant={'primary'} className={'messageButtonEdit'} onClick={() => transferForEditMessage(customer)} >Edit</Button>
                                        <Button variant={'danger'} className={'messageButton'} onClick={() => removeMessage(customer)} >Delete</Button>
                                    </div>
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
