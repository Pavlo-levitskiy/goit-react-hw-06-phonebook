import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/slicer';
import { ContactListItem } from './ContactListItem/ContactListItem';


export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ul>
        {filteredItems.map(item => (
          <ContactListItem key={item.id} item={item} />
        ))}
      </ul>
    );

}
export default ContactList;
