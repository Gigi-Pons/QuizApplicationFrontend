import React from 'react';

const CategorySelection = ({ onSelectCategory }) => {
  return (
    <div>
      <h2>Select a Category to Play</h2>
      <button className="custom-button" onClick={() => onSelectCategory('1')}>Animals</button>
      <button className="custom-button" onClick={() => onSelectCategory('2')}>Technology</button>
      <button className="custom-button" onClick={() => onSelectCategory('3')}>Outer Space</button>
    </div>
  );
};

export default CategorySelection;
