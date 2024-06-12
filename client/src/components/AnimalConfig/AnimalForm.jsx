import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import { useRef } from 'react';
import '../../assets/styles/animalForm.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';


const AnimalForm = () => {

  const [animalName, setAnimalName] = useState('');
  const [animalWeight, setAnimalWeight] = useState('1');
  const [animalAge, setAnimalAge] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [animalImage, setAnimalImage] = useState('');
  const inputPhotoRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      const modalBg = document.querySelector(".animal-form-container");
      modalBg.classList.add("blur");
    }
  }, [isModalOpen]);

  const options = [
    {label: "Dog", value: 1},
    {label: "Cat", value: 2},
  ]

  function handleSelect(e){
    setSelectValue(e.target.value);
  }

  function closeModal() {
    setIsModalOpen(false); 
    const modalBg = document.querySelector(".animal-form-container");
      modalBg.classList.remove("blur");
  }

  const handleImageClick = () => {
    inputPhotoRef.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAnimalImage(file);
  }

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!animalImage) {
      const photoFrame = document.querySelector('.animalImageBlock');
      photoFrame.classList.add('error');
      alert('Please select an image.');
      return;
    } else {
      const photoFrame = document.querySelector('.animalImageBlock');
      photoFrame.classList.remove('error');
    }

    if(selectValue == 0){
      const selectFrame = document.querySelector('.dropdownRange');
      selectFrame.classList.add('error');
      alert('Please add animal gender.');
      return;
    } else {
      const selectFrame = document.querySelector('.dropdownRange');
      selectFrame.classList.remove('error');
    }

    const formData = new FormData();
    formData.append('photo', animalImage);
    formData.append('name', animalName);
    formData.append('birthDate', animalAge);
    formData.append('weight', animalWeight);
    formData.append('gender', selectValue);

    fetch('http://localhost:5000/api/animals/add', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return (
    <>
    {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p className='modalParagraph'>You can add your pet, here!</p>
            <button className='closeModalButton' onClick={closeModal}>Let's go</button>
          </div>
        </div>
      )}
      <div className='animal-form-container'>
        <div className='animal-form'>
            <form className='animal-form-structure' onSubmit={handleSubmit}>
              <label htmlFor="Profile Photo">Profile Photo</label>
              <div className='animalImageBlock' onClick={handleImageClick}>
                {animalImage ? (
                  <img src={URL.createObjectURL(animalImage)} alt="profile" className='profilePhoto'/>
                ) : (
                  <AiOutlinePlusCircle size={80} color='#FF6D00'/>
                )} 
                <input 
                      type="file" 
                      ref={inputPhotoRef}
                      onChange={handleImageChange} 
                      className="profilePhotoInput" 
                      id="profilePhoto" />
              </div>
              <label htmlFor="Name">Name</label>
              <input 
                        value={animalName} 
                        onChange={(e) => {
                            setAnimalName(e.target.value);                     
                        }} 
                        type="text" 
                        placeholder="Your pet name" 
                        id="petName" 
                        name="petName"
                        className="animalNameInput"
                        required 
                    />
              <label htmlFor="Age">Age</label>
              <div className='age-range'>
                <input 
                      type='date' 
                      className='date-input'
                      value={animalAge}
                      onChange={(e) => {
                        setAnimalAge(e.target.value);                     
                      }} 
                      id="petAge" 
                      name="petAge"
                      max={getCurrentDate()}
                      required
                  />
              </div>
              <label htmlFor="Weight">Weight</label>
              <div className='range'>
              <div className='sliderValue'>
                <span>{animalWeight} kg</span>
              </div>
              <div className='field'>
                <div className='value left'>1</div>
              <input 
                        value={animalWeight} 
                        onChange={(e) => {
                            setAnimalWeight(e.target.value);                     
                        }} 
                        type="range" 
                        id="petRange" 
                        name="petWeight"
                        className="animalRangeInput"
                        min='1'
                        max='100'
                        required 
                    />
              <div className='value right'>100</div>
              </div>
              </div>
              <label htmlFor="Gender">Gender</label>
              <div className='dropdownRange'>
                <select className="animalForm-select" value={selectValue} onChange={handleSelect}>
                  <option value="" disabled hidden>Select</option>
                  {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <button className="add-button" type="submit">Add</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default AnimalForm
