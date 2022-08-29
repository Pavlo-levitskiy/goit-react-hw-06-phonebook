import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slicer';
import { ContactListItemContainer } from './ContactListItem.styled';

export const ContactListItem = ({ item: { id, number, name } }) => {
    const dispatch = useDispatch();
    return (    
        <li>
            <ContactListItemContainer>
                    <p>{name}</p>
                    <p>{number}</p>
                <button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </ContactListItemContainer>
        </li>
        )
    }

 export default ContactListItem;  

 ContactListItem.propTypes = {
    contacts: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };