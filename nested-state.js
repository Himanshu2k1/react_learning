const redux=require('redux')
const createStore=redux.createStore
const produce=require('immer').produce

const UPDATE_CITY='UPDATE_CITY'

function updateCity(city){
    return{
        type:UPDATE_CITY,
        payload:city,
    }
}

const initialState={
    name:'Himanshu Sharma',
    address:{
        city:'Jind',
        state:'Haryana',
        country:'India',
    },
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case(UPDATE_CITY):
            return produce(state,(draft)=>{
                draft.address.city=action.payload
            })
        default:
            return state
    }
}

const store=createStore(reducer);

console.log("initial state:",store.getState());
const unsubscribe=store.subscribe(()=>console.log("updated state is ",store.getState()));
store.dispatch(updateCity('Gurgaon'));
unsubscribe();

