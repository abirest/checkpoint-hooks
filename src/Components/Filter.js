import React, { useState } from 'react';


const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
    onFilter({ title: event.target.value, rating: ratingFilter });
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
    onFilter({ title: titleFilter, rating: event.target.value });
  };

  return (
    <div className='filter'>
      <input type="text" placeholder="Filter by title" value={titleFilter} onChange={handleTitleFilterChange} />
      <input type="number" placeholder="Filter by rating" value={ratingFilter} onChange={handleRatingFilterChange} />
    </div>
  );
};

export default Filter;