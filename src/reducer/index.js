import { combineReducers } from 'redux';
import {articledetails} from './article_reducer';
import {gallerydetails} from './gallery_reducer';

const rootReducer = combineReducers({
    articledetails,
    gallerydetails
})

export default rootReducer;

