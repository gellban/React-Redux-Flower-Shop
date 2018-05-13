//the reducers to tell the redux that there was an action
//the reducer is responsible how to update the data or state 
//according to fullfill the requirement of this action

//one big file to have all reducers which are combined in one object
import {combineReducers} from 'redux';
import BouquetReducer from './reducer-bouquets';
import BouquetReducerSelected from './reducer-active-bouquet';
const allReducers = combineReducers({
    bouquets:BouquetReducer ,//this bouquets variable has all values in ./reducer-bouquets.js
    activeBouquet:BouquetReducerSelected
});

export default allReducers;