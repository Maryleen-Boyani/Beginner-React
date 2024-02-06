
import PropTypes from 'prop-types';

import  { useState} from "react";
export default function Homepage(props) {

    {/*Deals with textarea

    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );
  
   {/*
   const handleChange =(event) =>{
    setTextarea(event.target.value)
   }
 */}
 const [myCar, setMyCar] = useState("Ford")
 const handleChange = (event)=>{
    setMyCar(event.target.value)
 }
    return (
        <>
            I am a {props.color} Car!
            <br />
            I am a {props.brand} Car!
            <br />
            <br />
            {/*
            <form>
                <textarea value={textarea} onChange={handleChange} />
             </form> 
            */}

            <form >
                <select value={myCar} onChange={handleChange}>
                    <option value="Select an option">Select an option</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                    <option value="Lexus">Lexus</option>
                </select>
            </form>
            

            
        </>



    )
}

Homepage.propTypes = {
    color: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
};
 
