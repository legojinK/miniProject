
const initialState ={
    contactList:[],
    search:'',
}


function reducer(state=initialState,action) {

    const {type,payload} = action

    switch (type) {
        case 'add_contact':
            return {
                ...state,
                contactList: [...state.contactList, { name: payload.name, phone: payload.phone,photo:payload.photo }]
            }
        case 'search':
            return {
                ...state,
                search: payload
            };
        default:
            return{ ...state}
    }
}
export default reducer;