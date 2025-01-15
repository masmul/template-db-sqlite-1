import React, { useState, useEffect } from 'react';
    import { getItems, rentItem } from '../utils/db';

    function ItemList() {
      const [items, setItems] = useState([]);

      useEffect(() => {
        const fetchItems = async () => {
          const fetchedItems = await getItems();
          setItems(fetchedItems);
        };
        fetchItems();
      }, []);

      const handleRent = async (id) => {
        await rentItem(id);
        const updatedItems = await getItems();
        setItems(updatedItems);
      };

      return (
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>Available: {item.available ? 'Yes' : 'No'}</p>
              <button onClick={() => handleRent(item.id)} disabled={!item.available}>
                Rent
              </button>
            </div>
          ))}
        </div>
      );
    }

    export default ItemList;
