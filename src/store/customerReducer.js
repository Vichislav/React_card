
const defaultState = {
    customers: []
}

/*выносим типы action  в константы, что среда помогала нам в написании*/
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"
const EDIT_CUSTOMER = "EDIT_CUSTOMER"

export const customerReducer = (state =defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case EDIT_CUSTOMER:
            return {...state, customers: state.customers.map(customer => customer.id === action.payload.id ? {
                    /*возваращем копию customer*/
                    ...customer,
                    /*но его поле name теперь равно значению name пришедшего из экшена*/
                    name: action.payload.name
                    /*иначе (id не совпали) оставляем customer без изменений*/
                } : customer)}

        default:
            return state
    }
}

/*оптимизируем код, создаем функцию actionCreator, которая будет принемать данные и возвращать нужный тип
* action и переданные данные*/
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})
export const editCustomerAction = (payload) => ({type: EDIT_CUSTOMER, payload})