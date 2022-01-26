import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Components/Home.css';


const Home = () => {

    const[datas, setDatas] = useState([]);
    const[suggestions, setSuggestions] = useState([]);

    const[location, setLocation] = useState('')
    const[type, setType] = useState('')
    const[submit, setSubmit] = useState(false)
    

    const submitData = async () => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .catch(err => {
            console.log("err: " + err)
        })

        setDatas(response.data)
        console.log('after submission')
        console.log(datas)

    }

    const fetchData = async () => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .catch(err => {
            console.log("err: " + err)
        })

        setSuggestions(response.data)
        console.log("after fetching...")
        console.log(suggestions)
    }

    useEffect(() => {

        if(submit){

            submitData()
            console.log('submitted')
        
        }
        else if(location !== ''){
            
            fetchData()
            console.log('fetching...')
           
        }
        else{
            setSuggestions([])
        }


    }, [location, submit]);


    const onChangeHandlerLocation = (e) => {
        setLocation(e.target.value)
    }

    const onChangeHandlerType = (e) => {
        setType(e.target.value)
    }

    const onClickHandlerSuggestion = (e) => {
        setLocation(e.target.innerHTML)
    }

    const submitEventHandler = (e) => {
        e.preventDefault()

        type === '' || location === '' ? window.alert('Fill the form properly') : setSubmit(true)


        console.log({
            type: type,
            location: location
        })
        
    }
    
    
    
  return (

    <form action="#" className="home-container" onSubmit={submitEventHandler}>

        <div className="type-container">
            <input 
                type="text" 
                className="type" 
                placeholder="Type*"
                value={type}
                onChange={onChangeHandlerType}
                
            />
        </div>

        <div className="location-container">
            <input 
                type="text" 
                className="location" 
                placeholder="Location*"
                value = {location}
                onChange={onChangeHandlerLocation}
                
            />
            <div className="suggestion-container">
                {
                    (suggestions !== [])?  suggestions.map(suggestion => (

                        <div onClick={onClickHandlerSuggestion}  key = {suggestion.id} className="suggestion">{suggestion.userId}</div>
                    
                    )) : {}
                    
                }
       
            </div>
                 
        </div>
        
        <div className="button-container">
            <button className="search">Search</button>
        </div>

       

    </form>
    



  );

};

export default Home;

