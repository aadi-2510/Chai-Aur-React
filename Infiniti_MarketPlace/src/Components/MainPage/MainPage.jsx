import React from 'react';
import './MainPage.css'
const MainPage = () => {
    return (
        <>
            <div className="main-page">
                <div className="button-container">
                    <button className="btn btn-primary custom-btn1">Request Anything</button>
                    <button className="btn btn-primary custom-btn2">Create Events</button>
                    <button className="btn btn-primary custom-btn3">Auction Events</button>
                </div>
            </div>
        </>
    );
};

export default MainPage;
