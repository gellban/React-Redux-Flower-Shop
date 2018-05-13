//A Container: get data from reducers/index.js and render it
//to display all bouquet names
//Any time the data or states changes in the reducers: this .js will automatically update the data and render the page with new data
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//used to connect the dispatcher of react with the function
import {selectBouquet} from '../actions/index';//import the function selectBouquet from the js called ../actions/index.js

class BouquetList extends Component{
    //get the bouquet list and loop for every bouquet, to show bouquet names
    createBouquetItems(){
        return this.props.bouquets.map((bouquet) =>{
            return(
                //onclick call a function, so we use ()=> to call our function
                //because it is a function
                //the key is a property or prop so we just use {} in react
                <li key={bouquet.id} onClick={()=>this.props.selectBouquet(bouquet)}>{bouquet.name}</li>                
            );
            
        });
    }
    render(){
        return (
            <ul>
                {this.createBouquetItems()}
            </ul>
        );

    }
}
//it takes state(bouquetlist) and passes to component as property
function mapStateToProps(state){
    return{
        bouquets:state.bouquets        
    }

}
//Dispatchers are methods that returns a function instead of data or state
//used later to connect react function "selectBouquet" with redux
//we will pass the function as a prop to redux
function matchDispatchProps(dispatch){
    console.log('bouquet-list.js, matchDispatchProps(),selectBouquet:',selectBouquet)
    return bindActionCreators({
        selectBouquet:selectBouquet
    },
    dispatch
    );
}

//make ur component aware of bouquet data, and the function
export default connect(mapStateToProps,matchDispatchProps)(BouquetList);
