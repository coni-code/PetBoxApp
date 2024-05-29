import React, { useEffect, useState } from 'react'
import '../../assets/styles/animal.css'
const AnimalView = ({animal, closeFunc}) =>{
    const [editorState, setEditorState] = useState(false);
    const [events, setEvents] = useState([]);
    const [editorValue, setEditorValue] = useState(['',''])


    const getEvents = () =>{
        //fetch data then load it through events element
    }

    const changeState = () =>{
        setEditorValue(['',''])
        setEditorState((s) => !s)
    }

    const deleteEvents = (id) =>{
        //call server to delete event
        getEvents()
    }

    useEffect(()=>{
        getEvents()
    },[])


    const Event = ({id, desc, date, func}) => {
        let data = new Date(date)
        date = `${data.getDay()}.${data.getMonth()}.${data.getFullYear()}r.`
        return <div className='event-element event'>
                <h4 className='event-desc'>{desc}</h4>
                <h4 className='event-desc date'>{date}</h4>
                <button className='confirm-button' onClick={()=>func(id)}>x</button>
        </div>
    }

    const confirm = () =>{
        //call server to add event then fetch data
        getEvents()
        changeState()
    }
    
    const onDescChange = (e) =>{
        setEditorValue((tab)=>[e.target.value, tab[1]])
    }
    const onDateChange = (e) =>{
        console.log(e.target.value)
        setEditorValue((tab)=>[tab[0], e.target.value])
    }
    const editor =
    <div className='event-editor event-element'>
        <input placeholder='' onChange={onDescChange}></input>
        <span className='datetime-container'>
            <input type='date' onChange={onDateChange}></input>
        </span>
        <button className='confirm-button' onClick={confirm}>&#x2713;</button>
    </div>

    return (
        <div className='background'>
            <div className='animal-container'>
                <div className='animal-data-section'>
                    <img className='animal-img' alt='Your pet' src={`http://localhost:5000/api/animals/showimage/${animal.src}`}></img>
                    <h1 className='animal-name'>{animal.name}</h1>
                    <div className='animal-line'></div>
                    <div className='animal-desc'>Weight: {animal.weight} kg</div>
                    <div className='animal-desc'>Age: {3} Years</div>
                    <div className='animal-desc'>Description: {animal.description}</div>
                </div>
                <div className='animal-event-section'>
                    <h1 className='event-title'>Wizyty:</h1>
                    {events}
                    {editorState? editor : <button className='add-button event-element' onClick={changeState}>+</button>}
                </div>
                <button className='close-button' onClick={closeFunc}>x</button>
            </div>
        </div>
    )
}

export default AnimalView;