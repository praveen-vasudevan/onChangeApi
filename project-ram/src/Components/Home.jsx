import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Components/Home.css';


const Home = () => {
    //This state will hold the final data after submission. We can send this data to another 
    //component by props and render there...
    const[datas, setDatas] = useState([]);

    //This state will hold the suggested locations respective to onchange location input
    const[suggestions, setSuggestions] = useState([]);

    //This two state holds the location and type value
    const[location, setLocation] = useState('')
    const[type, setType] = useState('')

    //This state is to check whether the form is submitted or not
    const[submit, setSubmit] = useState(false)



    /*
        This function will be called after clicking the submit button. This function
        fetch for final data and store it in 'data-state'. 
    */ 
    const submitData = async () => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .catch(err => {
            console.log("err: " + err)
        })

        setDatas(response.data)
        console.log('after submission')
        console.log(datas)

    }

    /*
        This function will be called whenever there is a change in location value. 
        The response will be stored in the 'suggestion-state' 

    */

    const fetchData = async () => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .catch(err => {
            console.log("err: " + err)
        })

        setSuggestions(response.data)
        console.log("after fetching...")
        console.log(suggestions)
    }

    /*
        This useEffect hook will be executed at the beginning and is also execute when there
        is a change in 'location-state' and 'submit-state'.
    */
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


    //This function will set the location value in 'location-state'
    const onChangeHandlerLocation = (e) => {
        setLocation(e.target.value)
    }

    //This function will set the type value in 'type-state'
    const onChangeHandlerType = (e) => {
        setType(e.target.value)
    }

    //This function will change location value by suggested value(which is clicked by the user)
    const onClickHandlerSuggestion = (e) => {
        setLocation(e.target.innerHTML)
    }

    //This function is for form validation and submission. It will change the 'submit-state' as true.
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
                    //This is where we are rendering the suggested locations. If the suggestion is null
                    //we render nothing... 
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

