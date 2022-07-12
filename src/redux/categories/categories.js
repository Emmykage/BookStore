const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS'
export function checkSatus(){
    return {
        type: CHECKED_STATUS,
        id
    }
}

const defaultState = {
    categories: []
}

export default function statusReducer (state = defaultState, action ){
   if(action.type === CHECKED_STATUS){
    return{
        categories: 'Under construction'
    }
   }else{
    return state
   }


}