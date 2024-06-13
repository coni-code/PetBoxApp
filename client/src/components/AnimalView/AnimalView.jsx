import React, { useEffect, useState } from 'react'
import '../../assets/styles/animal.css'
// Animal: object z id, oraz danymi CloseFunc: funkcja do zamykania

const AnimalView = ({animal, closeFunc}) =>{
    const [editorState, setEditorState] = useState(false);
    const [events, setEvents] = useState([]);
    const [editorValue, setEditorValue] = useState(['',''])
    
    const getEvents = () =>{
        let url = `http://localhost:5000/api/event/show/${animal._id}`;
        let options = {
            method: 'GET',
            credentials: 'include',
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            setEvents((a)=> json.map((e)=> 
                <Event
                key={e._id}
                id={e._id} 
                desc={e.description} 
                date={e.date} 
                func={deleteEvent}>
                </Event>));
        })
        .catch(err => {
            console.error('error:' + err);
            setTimeout(()=>getEvents(), 1000);
        });
    }

    const changeState = () =>{
        setEditorValue(['',''])
        setEditorState((s) => !s)
    }

    const deleteEvent = (id) =>{
        let url = 'http://localhost:5000/api/event/delete';
        let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: `{"eventId":"${id}"}`,
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => getEvents())
        .catch(err => console.error('error:' + err));
    }

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
        let url = 'http://localhost:5000/api/event/add';
        let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            "animalId":animal._id,
            "desc":editorValue[0],
            "date":editorValue[1]
        })
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            getEvents()
            changeState()
        })
        .catch(err => {
            if(editorValue[0] == ""){
                alert("You need to specify the event")
            }
            if(editorValue[1]==""){
                alert("You need to specyfi date of event")
            }
        });
    }

    useEffect(()=>{
        getEvents()
    },[])

    const onDescChange = (e) =>{
        setEditorValue((tab)=>[e.target.value, tab[1]])
    }

    const onDateChange = (e) =>{
        console.log(e.target.value)
        setEditorValue((tab)=>[tab[0], e.target.value])
    }

    const editor =
    <div className='event-editor event-element'>
        <input placeholder='' className='animalNameInput' onChange={onDescChange}></input>
        <span className='datetime-container'>
            <input type='date' onChange={onDateChange} className='date-input'></input>
        </span>
        <button className='confirm-button' onClick={confirm}>&#x2713;</button>
    </div>

    return (
        <div className='background'>
            <div className='animal-container'>
                <div className='animal-data-section'>
                    <img className='animal-img' alt='Your pet' src={`http://localhost:5000/api/animals/showimage/${animal._id}`}></img>
                    <h1 className='animal-name'>{animal.name||"N/A"}</h1>
                    <div className='animal-line'></div>
                    <div className='animal-desc'>Weight: {animal.weight||"N/A"} kg</div>
                    <div className='animal-desc'>birthDate: {animal.birthDate||"N/A"}</div>
                    <div className='animal-desc'>Description: {animal.description||"N/A"}</div>
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