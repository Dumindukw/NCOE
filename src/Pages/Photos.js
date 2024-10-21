import React from 'react'
import { useState } from 'react'
import './Photos.css'

const DropdownWithImages = () => {
  // State to hold the selected value from the dropdown
  const [selectedItem, setSelectedItem] = useState('');

  // Image URLs associated with the dropdown options
  const images = {
    office: '../office.jpg',
    gate: '../gate.jpeg',
    hostal: '../hostal.jpeg',
    pt: '../PT.jpeg',
    mainhall: '../mainhall.jpeg',
  };

  // Handler for dropdown selection
  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <h1 className='CourseP'>Select a Area:</h1>
      <select value={selectedItem} onChange={handleSelectChange}>
        <option value="">-- Choose a Area --</option>
        <option value="office">OFFICE</option>
        <option value="gate">MAIN ENTRANCE</option>
        <option value="hostal">HOSTALS</option>
        <option value="pt">PLAYGROUND</option>
        <option value="mainhall">MAIN HALL</option>
      </select>

      {/* Display the image based on the selected item */}
      {selectedItem && (
        <div className="image-container">
          <h2>You selected: {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)}</h2>
          <img
            src={images[selectedItem]}
            alt={selectedItem}
            className="fruit-image"
          />
        </div>
      )}
    </div>
  );
};

export default DropdownWithImages;

