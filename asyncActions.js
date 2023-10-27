const redux=require('redux')
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const initialState={
    loading:false,
    users:[],
    error:'',
}
// actions
const FETCH_USERS_REQUSETED='FETCH_USERS_REQUSETED'
const FETCH_USERS_SUCCEDED='FETCH_USERS_SUCCEDED'
const FETCH_USERS_FAILED='FETCH_USERS_FAILED'

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUSETED,
    }
}

const fetchUsersSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCEDED,
        payload:users
    }
}

const fetchUsersFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILED,
        payload:error,
    }
}

// reducers
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUSETED:
            return{
                ...state,
                loading:true,
            }
        case FETCH_USERS_SUCCEDED:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILED:
            return{
                loading:false,
                users:[],
                error:action.payload,
            }
    }
}

const fetchUsers=()=>{
    // redux thunk middleware allows to return this action a function instead of an object 
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data.map((user)=>user.id)
            dispatch(fetchUsersSuccess(users))
        }).catch(error=>{
            // error
            dispatch(fetchUsersFailure(error.message))
        })
    }
}


const store=createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())