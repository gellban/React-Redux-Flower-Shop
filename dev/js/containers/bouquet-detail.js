//A Container: get data from reducers/index.js and render it
//to display all bouquet names
//Any time the data or states changes in the reducers: this .js will automatically update the data and render the page with new data
//video #8
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//used to connect the dispatcher of react with the function
import {selectBouquet} from '../actions/index';//import the function selectBouquet from the js called ../actions/index.js

//style css
//import styles from '../css/style.css';
class BouquetDetail extends Component{
    render(){
       console.log('###bouquet-detail.js, render(), bouquet:',this.props.bouquet,'this.props:',this.props);
        if(!this.props.bouquet){
            return (<h4>Please click on any bouquet name</h4>);
        };
        console.log('after IF');
        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={this.props.bouquet.pic} />
                </div>
                <div className="col-md-8">
                    <h2> {this.props.bouquet.name} </h2>
                    <h3> Rate: </h3> <span>{this.props.bouquet.rate} </span>
                    <h3> Description :</h3> <span>{this.props.bouquet.description} </span>                    
                </div>
            </div>    
        );

    }
}
//it takes state(bouquetlist) and passes to component as property
//state: has bouquets, and activeBouquet states
function mapStateToProps(state){
    console.log('mapStateToProps,state:',state);
    return{
        bouquet:state.activeBouquet        
    }

}
//make ur component aware of bouquet data
export default connect(mapStateToProps)(BouquetDetail);
