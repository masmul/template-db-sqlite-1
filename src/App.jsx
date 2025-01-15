import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import ItemList from './components/ItemList';
    import AddItem from './components/AddItem';

    function App() {
      return (
        <div className="container">
          <nav className="nav">
            <Link to="/">Items</Link>
            <Link to="/add">Add Item</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/add" element={<AddItem />} />
          </Routes>
        </div>
      );
    }

    export default App;
