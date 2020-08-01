import React from 'react';

import { FirebaseContext } from '../Firebase';
 
const Home = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>I've access to Firebase and render Home.</div>;
        }}
    </FirebaseContext.Consumer>
);
 
export default Home;