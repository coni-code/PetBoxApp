import React from 'react'
import '../../assets/styles/animalOptions.css';
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const AnimalOptions = () => {

  const navigate = useNavigate();

  const handleClickAdd = () => {
      navigate('/animal-form');
  }

  const handleClickChoose = () => {
    navigate('/animal-profiles');
}

  return (
    <div className='option-container'>
        <h1 className='option-header'>Select next step</h1>
        <div className='ranges'>
          <div className='div-range'>
              <AiOutlinePlusCircle size={80} color='#FF6D00' className='option-circle' onClick={handleClickAdd}/>
              <p className='option-desc'>Add new animal</p>
          </div>
          <div className='div-range'>
              <AiOutlineCheckCircle size={80} color='#FF6D00' className='option-circle' onClick={handleClickChoose}/>
              <span className='option-desc'>Choose animal profile</span>
          </div>
        </div>
    </div>
  )
}

export default AnimalOptions
