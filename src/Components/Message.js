import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";

import '../css/home.css'
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "../store/customerReducer";


const Message = () => {

    const dispatch = useDispatch()

    const customers = useSelector(state => state.customerReducer.customers)


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

export default Message;
