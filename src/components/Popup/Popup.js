import React from 'react'
function Popup(props) {
    return (<div id="popup">
        <button id="close-button">x</button><br/>
        <label for="name">Name:</label>
        <input name="name" id="name-input" value={props.name}></input><br />
        <label for="surname">Surname:</label>
        <input  name="surname" id="surname-input" value={props.surname}></input> <br />
        <label for="country">Country:</label>
        <input  name="country" id="country-input" value={props.country}></input><br />
        <button id="update-button">Update</button>
    </div >)
}

export default Popup