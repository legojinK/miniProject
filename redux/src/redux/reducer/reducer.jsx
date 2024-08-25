
const initialState ={
    count:0,
    id:'',
    password:''
}


function reducer(state=initialState,action) {


    switch (action.type) {
        case 'Increase':
            return {...state, count: state.count + 1 }
        case 'Decrease':
            return {...state, count: state.count - 1 }
        case 'Login':
            return {...state, id:action.payload.id, password:action.payload.password }
        default:
            return{ ...state}
    }
}
export default reducer;