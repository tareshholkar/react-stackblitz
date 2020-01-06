import * as types from './type';

export function make_Array(payload){
    return{
        type: types.TO_GET_ARRAY,
        payload : payload
    }
}




