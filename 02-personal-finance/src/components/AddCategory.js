import React from 'react';

function AddCategory({ setShowAddCategory }) {
    return (
        <>
        <h1> AddCategory Component </h1>
        <button onClick={() => setShowAddCategory(false)}>
            Return to main screen
        </button>
        </>
    );
}

export default AddCategory;