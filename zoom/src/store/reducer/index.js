import {combineReducers} from 'redux';
import videoReducer from './videoReducer';

export default combineReducers({
  video: videoReducer,
});
