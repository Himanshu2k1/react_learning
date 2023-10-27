const initialState={
    data :[]
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NEW_ENTRY':

    //   const new_obj={
    //     name:action.payload.name,
    //     dept:action.payload.dept,
    //     skype:action.payload.skype,
    //     email:action.payload.email
    //   }
        return {
          ...state,
          data : [...state.data,action.payload],
        };
      default:
        return state;
    }
  };

  export default formReducer;