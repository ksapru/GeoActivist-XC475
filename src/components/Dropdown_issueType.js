import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form';
export default function DropDown_issueType(){
    return(

        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type of Social Issue
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1"> <Form.Check aria-label="option 1"/>Climate Change</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Form.Check aria-label="option 1"/>Civil Rights and Racial Discrimination</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> <Form.Check aria-label="option 1"/>Immigration Policy</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> <Form.Check aria-label="option 1"/>Gender Inequality</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> <Form.Check aria-label="option 1"/>Gun Violence</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> <Form.Check aria-label="option 1"/>Hunger and Food Insecurity</Dropdown.Item>
            
        </Dropdown.Menu>
        </Dropdown>

    );
}