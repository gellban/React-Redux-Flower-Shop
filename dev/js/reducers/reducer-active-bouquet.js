//a state that holds which is is active (when the client click on a bouquet in bouquet-list.js program)
//the job of this .js is to listen to the action
//state default value is null. it usually has the previous state. in this application, we do not care about previous state; so, we have it null always
export default function (state=null, action){
    
    console.log('action',action,'state=',state);
    switch(action.type){
        case "Bouquet_Selected":
            return action.payload;//return the selected bouquet information
           
    }
    return state;
}