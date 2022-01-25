import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Components/Home.css';


const Home = () => {

    let response

    const[location, setLocation] = useState('')
    const[type, setType] = useState('')
    const[submit, setSubmit] = useState(false)


    useEffect(() => {

        if(submit){

            const fetchData = async () => {
                response = await axios.get(``)
                .catch(err => {
                    console.log("err: " + err)
                })
            }
        }
        else{
            
            const fetchData = async () => {
                response = await axios.get(``)
                .catch(err => {
                    console.log("err: " + err)
                })
            }
        }

      console.log('useeffect')

    }, [location, submit]);


    const onChangeHandlerLocation = (e) => {
        setLocation(e.target.value)
    }

    const onChangeHandlerType = (e) => {
        setType(e.target.value)
    }

    const submitEventHandler = (e) => {
        e.preventDefault()

        type === '' || location === '' ? window.alert('Fill the form properly') : setSubmit(true)
        
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
                
                <div className="suggestion"></div>
                <div className="suggestion"></div>
                <div className="suggestion"></div>
                <div className="suggestion"></div>
                <div className="suggestion"></div>
                <div className="suggestion"></div>
       
            </div>
                

            
        </div>
        
        <div className="button-container">
            <button className="search">Search</button>
        </div>

       

    </form>
    



  );

};

export default Home;

