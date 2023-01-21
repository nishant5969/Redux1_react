//export default function(state={},action){
//    switch(action.type){
//        case 'GET_ARTICLE':
//            return {...state,articledata:action.payload} 
//        default:
//            return state 
//    }
//}

export const articledetails = (state={},action) =>{
       switch(action.type){
         case 'ARTICLE_DETAILS':
            return {...state,articledata: action.payload};
         case 'CLEAR_ARTICLE':
            return {};
         default:
            return state;  
       }
}



