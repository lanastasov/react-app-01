import React from 'react';

function Header({ setShowAddCategory }) {
    return (
      <>
        <h1> Header Component </h1>
        <button 
          onClick={() => setShowAddCategory(true)}>
          Add new Category
        </button>
      </>
    );
}

export default Header;