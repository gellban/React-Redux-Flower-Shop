//action creator
//used in the containers/bouquet-list.js
export const selectBouquet = (bouquet) => {
    console.log('You Have clicked on bouquet',bouquet);
    return{//return the action which is type and payload in redux
        type:'Bouquet_Selected',//type of action name
        payload: bouquet //you can name payload as data. It is the selected bouquet
    }
};