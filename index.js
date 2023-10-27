const store=require('./app/store')
const cakeActions=require('./features/cake/cakeSlice').cakeActions
const iceCreamActions=require('./features/iceCream/icecreamSlice').iceCreamActions
const fetchUsers=require('./features/user/userSlice').fetchUsers

console.log('initial state',store.getState())

const unsubscribe=store.subscribe(()=>{})

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()