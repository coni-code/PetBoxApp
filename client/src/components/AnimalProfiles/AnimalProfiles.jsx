import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../../assets/styles/animalProfiles.css';
import { useNavigate } from 'react-router-dom';

const AnimalProfiles = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'GET',
      credentials: 'include'
    };

    fetch('http://localhost:5000/api/animals', options)
      .then(response => response.json())
      .then(data => {
        setAnimals(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const handleAnimalClick = (animal) => {
    navigate('/home', { state: { animal } });
  }

  return (
    <div className='animal-profiles'>
     {loading ? (
        <ClipLoader size={50} color='#FBFBFB' loading={loading} />
      ) : (
        animals.length > 0 ? (
          animals.map(animal => (
            <div key={animal._id} className='animal-range' onClick={() => handleAnimalClick(animal)}>
            <img className='animal-profile-img' alt='Your pet' src={`http://localhost:5000/api/animals/showimage/${animal._id}`}></img>
            <span className='animal-profile-name'>{animal.name}</span>
          </div>
        ))
        ) : (
            <p>No animals found.</p>
        )
      )}
    </div>
  );
}

export default AnimalProfiles;
