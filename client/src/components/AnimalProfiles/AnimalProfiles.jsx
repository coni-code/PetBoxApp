import React, { useState, useEffect } from 'react';
import '../../assets/styles/animalProfiles.css';

const AnimalProfiles = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      credentials: 'include'
    };

    fetch('http://localhost:5000/api/animals', options)
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='animal-profiles'>
      {animals.length > 0 ? (
        animals.map(animal => (
          <div key={animal.id} className='animal-profile'>
            <h2>{animal.name}</h2>
          </div>
        ))
      ) : (
        <p>Ładowanie danych...</p>
      )}
    </div>
  );
}

export default AnimalProfiles;
