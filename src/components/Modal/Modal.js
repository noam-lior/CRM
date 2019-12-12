import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function handleUpdate(){
    const newName=document.getElementById('name-input').value
    const newSurname=document.getElementById('name-input').value
    const newCountry=document.getElementById('name-input').value    
    this.props.handleUpdate(newName,newSurname,newCountry)
}
function SimpleModal(props) {
    console.log(props.currentClient)
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
      </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div>
                    <button id="close-button" onClick={handleClose}>x</button><br />
                    <label for="name">Name:</label>
                    <input name="name" id="name-input" value={props.currentClient.name}></input><br />
                    <label for="surname">Surname:</label>
                    <input name="surname" id="surname-input" value={props.currentClient.surname}></input> <br />
                    <label for="country">Country:</label>
                    <input name="country" id="country-input" value={props.currentClient.country}></input><br /> }
         <button id="update-button" onClick={handleUpdate}>Update</button>

                </div>
            </Modal>
        </div>
    );
    // }l(props) {

    // return
    //  (<div id="popup">

    // </div >)
}

export default SimpleModal