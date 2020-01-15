import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR 
    } from '../types';
export default (state,action)=>{
    switch(action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contacts:action.payload,
                loading:false
            }
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[...state.contacts,action.payload]
            };
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.map((contact,index)=>contact.id===action.payload.id?action.payload:contact)
            };
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(contact => contact.id !== action.payload)
            };
        case CLEAR_CONTACTS:
            return{
                ...state,
                contacts:null,
                error:null,
                current:null
            }
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            };
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            }
        case CONTACT_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
     }
}