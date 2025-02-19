import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import changeVideoSource from './navigation.jsx'
function DropdownRoom() {

    return (
        <Dropdown.Menu show>
            <Dropdown.Header>Room Finder</Dropdown.Header>
            <Dropdown.Item onClick={() => changeVideoSource(0)}>Room 1</Dropdown.Item>
            <Dropdown.Item onClick={() => changeVideoSource(1)}>Room 2</Dropdown.Item>
            </Dropdown.Menu>

    );
}



export default DropdownRoom;