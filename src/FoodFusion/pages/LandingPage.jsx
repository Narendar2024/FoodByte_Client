// eslint-disable-next-line no-unused-vars
import React from 'react';
import TopBar from '../components/TopBar';
import ItemsDisplay from '../components/ItemsDisplay';


const LandingPage = () => {
    return (
        <div>
            <TopBar />
            <div className="landingSection">
                <ItemsDisplay />
            </div>
        </div>
    );
};

export default LandingPage;