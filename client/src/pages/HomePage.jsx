import React, {useState, useEffect} from 'react';
import AnimalView from '../components/AnimalView/AnimalView';
import { useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const { animal } = location.state || {};
    const [animalData, setAnimalData] = useState({});
    console.log(animal._id)
    
    useEffect(() => {
        if (animal && animal._id) {
            const options = { method: 'GET', credentials: 'include' };
    
            fetch(`http://localhost:5000/api/animals/show/${animal._id}`, options)
                .then(response => response.json())
                .then(data => {
                    setAnimalData(data);
                })
                .catch(err => console.error(err));
        }
    }, [animal]);
        
    return (
        <div>      
            {animal ? (
                <AnimalView animal={animalData} />
            ) : (
                <p>No animal selected.</p>
            )}
        </div>
    );
};

export default HomePage;
