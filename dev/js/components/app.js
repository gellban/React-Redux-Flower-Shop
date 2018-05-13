import React from 'react';
import BouquetList from '../containers/bouquet-list';
require('../../scss/style.scss');//to import and use style file


import BouquetDetail from '../containers/bouquet-detail';//import a class

const app = () => (
    <div>
        <h2>Bouquet list</h2>
        <BouquetList/>
        <hr/>
        <h2>Bouquet Profile</h2>
        <BouquetDetail />
    </div>
);

export  default app;