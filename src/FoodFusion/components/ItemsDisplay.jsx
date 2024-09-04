// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { itemData } from '../data';

const ItemsDisplay = () => {
    // eslint-disable-next-line no-unused-vars
    const [displayItem, setDisplayItem] = useState(itemData);
    console.log("This is data", displayItem);
    return (

        <div className="itemSection">
            {displayItem.map((item) => {
                return (
                    <div className="gallery" key={item.item_img}>
                        <img src={item.item_img} alt={item.item_img} />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemsDisplay;