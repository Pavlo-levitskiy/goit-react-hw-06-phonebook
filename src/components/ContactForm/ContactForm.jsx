import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/slicer";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {StyledForm, Input} from './ContactForm.styled';
import { getItems } from 'redux/slicer';
import Notiflix from "notiflix";

export const ContactForm = () => {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const items = useSelector(getItems);
   const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    }

    const handleSubmitForm = (event) => {
     if (items.find(item => item.name === name)) {
            Notiflix.Notify.warning('This contact is already exists');
            return;
        }
        event.preventDefault();
        dispatch (addContact({id: nanoid(), name, number}));
        setName('');
        setNumber('');
    }

    return (
        <StyledForm onSubmit={handleSubmitForm}>
            <Input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
            <Input type="text" name="number" placeholder="Number" value={number} onChange={handleChange} />  
            <button type="submit">Add contact</button>
        </StyledForm>
    )   
    }
export default ContactForm;

    ContactForm.propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
    }