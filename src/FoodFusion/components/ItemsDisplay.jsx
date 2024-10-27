// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { itemData } from "../data";

const ItemsDisplay = () => {
<<<<<<< HEAD
  // eslint-disable-next-line no-unused-vars
  const [displayItem, setDisplayItem] = useState(itemData);
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
=======
    // eslint-disable-next-line no-unused-vars
    const [displayItem, setDisplayItem] = useState(itemData);
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
>>>>>>> e1d15860f011f6d08b1f7edeb4b50e75bd979ad4
};

export default ItemsDisplay;
