import React, { useState } from 'react';
    import { addItem } from '../utils/db';

    function AddItem() {
      const [name, setName] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        await addItem(name);
        setName('');
      };

      return (
        <div className="form-container">
          <h2>Add New Item</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Item Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <button type="submit">Add Item</button>
          </form>
        </div>
      );
    }

    export default AddItem;
