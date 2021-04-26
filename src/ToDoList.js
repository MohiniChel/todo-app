import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom";

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);  /* state variable hai empty variable may conver hogay hai */

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewItem((prevValue) => {          /* preValue ke maddat se useState([]) may jo v data/property tha unko may access kr sakta hu*/ 
            return [...prevValue, item];     /* ak array return krna hai like item- likhne se use jo avi type kr raha hai wo print hoga and ...prevValue(spread operator)- likhne se user ne phle jo v likha tha wo print hojaega jo empty array may store tha */
        });
        setItem(" ");                        /* setItem(updated data)- ko empty krne se ak empty space deta hai jise kya hai ki jab v kuch likhte hai to waha likhne ke bad wo jaga khali hojata hai*/
    };

    return (
    <>
        <div className="main_div">
            <div className="center_div">
                <br />
                    <h1> ToDo List  </h1>
                <br />
                <input 
                type="text"
                value={item} 
                placeholder="Add an Items"
                onChange={itemEvent}
                 />

                <Button className="newBtn" onClick={listOfItems}> 
                    <AddIcon />
                </Button>

                <br />
                    <ol>
                       { newitem.map((val, index) => {                   /* map method- in map methos 4 parameters r there  {array.map(function(currentvalue, current value index, and konsi array ke sat deal kr rahe hai uska name), this value- not needed }*/
                            return <ListCom  key= {index} text={val}/>;     /* listcom ke andar ak attrebute pass liya "text" jismay may ak property pass kiya val name ka */
                        })}  
                    </ol>
                <br/> 
           </div>
        </div>    
    </>
    );
};

export default ToDoList;