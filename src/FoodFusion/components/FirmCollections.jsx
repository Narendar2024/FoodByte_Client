// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';

const FirmCollections = () => {
    const [firmData, setFirmData] = useState([]);

    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newFirmData = await response.json();
            setFirmData(newFirmData.vendors);
            console.log("Firm Data", newFirmData);
        } catch (error) {
            alert("Firm data is not fetched");
            console.error("Firm data is not fetched", error);
        }
    };

    useEffect(() => {
        firmDataHandler();
    }, []);
    return (

        <>
            <h3>Restaurants with online food delivery in Hyderabad</h3>
            <section className="firmSection">
                {firmData.map((apple) => {
                    return (
                        <>
                            {apple.firm.map((item) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className='firmGroupBox'>
                                        <div className='firmGroup'>
                                            <img src={`${API_URL}/uploads/${item.image}`} alt="image not found" />
                                            <div className="firmOffer">
                                                {item.offer}
                                            </div>
                                        </div>
                                        {/* <div className='firmGroup'>
                                            <img src={`${API_URL}/uploads/${item.image}`} alt="image not found" />
                                        </div>
                                        <div className='firmGroup'>
                                            <img src={`${API_URL}/uploads/${item.image}`} alt="image not found" />
                                        </div> */}
                                        <div className='firmDetails'>
                                            <ul>
                                                <li className='firmnName'><strong>{item.firmName}</strong></li>
                                                <li>{item.region}</li>
                                                <li>{item.area}</li>
                                            </ul>

                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    );
                })}
            </section>
        </>
    );
};

export default FirmCollections;