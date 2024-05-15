import React from 'react'
import {useState} from 'react';
import '../../assets/styles/animalForm.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const AnimalForm = () => {

  const [animalName, setAnimalName] = useState('');
  const [animalWeight, setAnimalWeight] = useState('1');
  const [animalAge, setAnimalAge] = useState('1');
  const [selectValue, setSelectValue] = useState('');

  const options = [
    {label: "Pies", value: 1},
    {label: "Kot", value: 2},
  ]

  function handleSelect(e){
    setSelectValue(e.target.value);
  }

  return (
    <>
      <div className='animal-form-container'>
        <div className='animal-form'>
            <form className='animal-form-structure'>
              <label htmlFor="Zdjęcie">Zdjęcie</label>
              <div className='animalImageBlock'>
                <AiOutlinePlusCircle size={80} />
              </div>
              <label htmlFor="Imię">Imię</label>
              <input 
                        value={animalName} 
                        onChange={(e) => {
                            setAnimalName(e.target.value);                     
                        }} 
                        type="text" 
                        placeholder="Imię pupila" 
                        id="petName" 
                        name="petName"
                        className="animalNameInput"
                        required 
                    />
              <label htmlFor="Wiek">Wiek</label>
              <div className='range'>
              <div className='sliderValue'>
                {animalAge == 1 ? <span>{animalAge} rok</span> : <span>{animalAge} lat'a</span>}
              </div>
              <div className='field'>
                <div className='value left'>1</div>
                <input 
                          value={animalAge} 
                          onChange={(e) => {
                              setAnimalAge(e.target.value);                     
                          }} 
                          type="range" 
                          id="petRange" 
                          name="petAge"
                          className="animalRangeInput"
                          min='1'
                          max='30'
                          required 
                      />
              <div className='value right'>30</div>
              </div>
              </div>
              <label htmlFor="Waga">Waga</label>
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
              <label htmlFor="Rasa">Rasa</label>
              <div className='dropdownRange'>
                <select className="animalForm-select" onChange={handleSelect}>
                  {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default AnimalForm