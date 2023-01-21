//export default function(state=null,action){
//     switch(action.type){
//        case 'GALLERY_LIST':
//            return {...state,galleryr:action.payload}
//        default:
//            return state
//     }
//}


export const gallerydetails = (state={},action) =>{
      switch(action.type){
        case 'GALLERY_LIST':
            return {...state,gallerydata: action.payload};
         case 'CLEAR_GALLERY':
            return {};
         default:
            return state;      
      }
}

