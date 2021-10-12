import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function DropDown_typeOfActivism(){
    return(

        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type of Activism
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Protest and Demonstrations</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Letter-Writing and Petitions</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Speaker Events and Discussion</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Organizational Meetings</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

    );
}