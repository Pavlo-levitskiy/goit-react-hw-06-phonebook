import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts, getFilter } from 'redux/slicer';
import { Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        value={filter}
        onChange={event => dispatch(filteredContacts(event.target.value))}
      />
    </div>
  );
};

export default Filter;

