import * as types from '../action/type';

const initialState={
    array:[]
}

export default function mainReducer(state=initialState,action){
    switch(action.type){
        case types.TO_GET_ARRAY:{
            console.log(action.payload);
            let array_save = state.array;
              array_save.unshift(action.payload);
              return{...state, array:array_save};
        }
        default: 
            return state;
    }    
}