const createSlice=require('@reduxjs/toolkit').createSlice
const {cakeActions}=require('../cake/cakeSlice')
const initialState={
    numOfIceCream:20,
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfIceCream--
        },
        restocked:(state,action)=>{
            state.numOfIceCream+=action.payload
        },
    },
    extraReducers :(builder)=>{
        builder.addCase(cakeActions.ordered,state =>{
            state.numOfIceCream--
        })
    }
})

module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions