import React, { useState, useRef } from 'react';
import './sale.css';

const properties = [
  {
    id: 1,
    image: '/client/src/components/Sale/img/pexels-binyaminmellish-1396122.jpg',
    city: 'Mumbai',
    price: '₹85,00,000',
    type: 'Flat',
    bedrooms: 3,
  },
  {
    id: 2,
    image: '/client/src/components/Sale/img/pexels-curtis-adams-1694007-3288103 (1).jpg',
    city: 'Pune',
    price: '₹1,50,00,000',
    type: 'Villa',
    bedrooms: 4,
  },
  {
    id: 3,
    image: '/client/src/components/Sale/img/pexels-curtis-adams-1694007-3288103.jpg',
    city: 'Delhi',
    price: '₹60,00,000',
    type: 'Land',
    bedrooms: 0,
  },
  {
    id: 4,
    image: '/client/src/components/Sale/img/pexels-michaelgaultphotos-7710011.jpg',
    city: 'Mumbai',
    price: '₹95,00,000',
    type: 'Flat',
    bedrooms: 2,
  },
  {
    id: 5,
    image: '/client/src/components/Sale/img/pexels-michaelgaultphotos-7710011.jpg',
    city: 'Pune',
    price: '₹1,80,00,000',
    type: 'Villa',
    bedrooms: 5,
  },
  // Add more properties as needed
];

function Sale() {
  const [filter, setFilter] = useState({
    city: '',
    type: '',
    bedrooms: '',
  });

  const scrollRef = useRef(null);

  const filteredProperties = properties.filter((prop) => {
    return (
      (filter.city === '' || prop.city === filter.city) &&
      (filter.type === '' || prop.type === filter.type) &&
      (filter.bedrooms === '' || prop.bedrooms === Number(filter.bedrooms))
    );
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sale-section">
      <h2>Properties for Sale</h2>
      <div className="filters">
        <select value={filter.city} onChange={e => setFilter({ ...filter, city: e.target.value })}>
          <option value="">All Cities</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
        </select>
        <select value={filter.type} onChange={e => setFilter({ ...filter, type: e.target.value })}>
          <option value="">All Types</option>
          <option value="Flat">Flat</option>
          <option value="Villa">Villa</option>
          <option value="Land">Land</option>
        </select>
        <select value={filter.bedrooms} onChange={e => setFilter({ ...filter, bedrooms: e.target.value })}>
          <option value="">Any Bedrooms</option>
          <option value="0">Land</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
          <option value="5">5 BHK</option>
        </select>
      </div>
      <div className="scroll-buttons">
        <button onClick={() => scroll('left')} aria-label="Scroll left">&lt;</button>
        <button onClick={() => scroll('right')} aria-label="Scroll right">&gt;</button>
      </div>
      <div className="property-scroll" ref={scrollRef}>
        {filteredProperties.length === 0 ? (
          <div className="no-results">No properties found.</div>
        ) : (
          filteredProperties.map((prop) => (
            <div className="property-card" key={prop.id}>
              <img src={prop.image} alt={prop.type} />
              <div className="property-info">
                <h3>{prop.city}</h3>
                <p>Type: {prop.type}</p>
                <p>Bedrooms: {prop.bedrooms > 0 ? prop.bedrooms : 'N/A'}</p>
                <p className="price">{prop.price}</p>
              </div>
            </div>
            
          ))
        )}
     
      </div>
    </div>
  );
}

export default Sale;