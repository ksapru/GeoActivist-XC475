import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form';

export default function DropDown_typeOfActivism(){
    return(
     
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type of Activism
        </Dropdown.Toggle>
      
       
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1"><Form.Check aria-label="option 1"/>Protest and Demonstrations</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Form.Check aria-label="option 1"/>Letter-Writing and Petitions</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> <Form.Check aria-label="option 1"/>Speaker Events and Discussion</Dropdown.Item>
            <Dropdown.Item href="#/action-3"><Form.Check aria-label="option 1"/> Organizational Meetings</Dropdown.Item>
        </Dropdown.Menu>
        
         
        </Dropdown>
         
    );
}