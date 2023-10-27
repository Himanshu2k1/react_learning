// cakeshop redux app
// 1.Actions, an ordercake function which return an object

const redux=require('redux')
// const { default: logger } = require("redux-logger")
const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware

const reducerLogger=require('redux-logger')
const logger=reducerLogger.createLogger()

const CAKE_ORDERED='CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'
const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'

function orderCake(){
    return {
        type:CAKE_ORDERED,
        payload:1
    }
}

function restockCake(qty){
    return{
        type:CAKE_RESTOCKED,
        payload:qty
    }
}

function orderIceCream(){
    return {
        type:ICECREAM_ORDERED,
        payload:1
    }
}

function restockIceCream(qty){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

//2. Reducer
const initialCakeState={numOfCakes:10}
const initialIceCreamState={numOfIceCream:15}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes:state.numOfCakes-action.payload,
            };
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload,
            };
        default:
            return state;
    }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream-action.payload,
            };
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream+action.payload,
            };
        default:
            return state;
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})

const store=createStore(rootReducer,applyMiddleware(logger));

console.log("initial state is :",store.getState());

const unsubscribe=store.subscribe(()=>{});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4));
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(2));

unsubscribe();
