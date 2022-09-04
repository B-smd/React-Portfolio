import React, { useState } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
} from 'mdb-react-ui-kit';

export default function ContactMe() {
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e: any ) =>  {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

  return (
    <MDBValidation className='contactme row g-3' isValidated>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          required
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={formValue.zip}
          name='zip'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <MDBValidationItem className='mb-3 pb-1 col-12' feedback='Please enter a message in the textarea.' invalid>
        <MDBTextArea
          label='Textarea'
          id='validationTextarea'
          placeholder='Required example textarea'
          required
        />
      </MDBValidationItem>
      <div className='col-12'>
        <MDBBtn type='submit'>Submit form</MDBBtn><hr/>
        <a href="mailto:djaja@iinet.net.au?subject=message"><img src="https://img.icons8.com/fluent/48/000000/mail--v1.png" alt="Mail" className="icon" width={"56"}/></a>
        <a href="tel: +61 413 406 968"><img src="https://img.icons8.com/fluent/48/000000/mobile--v1.png" alt="Mobile" className="icon" width={"56"}/></a>
      </div>

      
    </MDBValidation>
  );
}