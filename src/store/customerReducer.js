
const defaultState = {
    customers: []
}

/*выносим типы action  в константы, что среда помогала нам в написании*/
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"

export const customerReducer = (state =defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}

        default:
            return state
    }
}

/*оптимизируем код, создаем функцию actionCreator, которая будет принемать данные и возвращать нужный тип
* action и переданные данные*/
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})