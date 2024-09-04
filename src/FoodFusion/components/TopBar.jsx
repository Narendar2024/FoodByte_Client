// eslint-disable-next-line no-unused-vars
import React from 'react';

const TopBar = () => {
    return (
        <section className='topBarSection'>
            <div className="companyTitle">
                <h2>Food Fusion</h2>
            </div>
            <div className="SearchBar">
                <input type="text" placeholder='search...' />
            </div>
            <div className="userAuth">
                Login / SignUp
            </div>
        </section>
    );
};

export default TopBar;