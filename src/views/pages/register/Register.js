import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'


import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CDropdown,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
  CInputGroupText,
  CDropdownToggle,
  // CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFormSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Link } from 'react-router-dom'


const Register = () => {


  const [state, setState] = useState({
    userName:"",
    email:"",
    phone:"",
    password:"",
    userType:"",
    
	})
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setState((prevProps) => ({
		  ...prevProps,
		  [name]: value
		}));
	  };
	
	  const submitHandler = (event) => {
		event.preventDefault();
		console.log(state);
	  };


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onClick={submitHandler}
    method="post"
    encType="multipart/form-data"
    className="form-horizontal">
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username"
                    name='userName'
								    value={state.userName}
                      			onChange={handleInputChange} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" 
                    name='email'
								    value={state.email}
                      			onChange={handleInputChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name='password'
								    value={state.password}
                      			onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="phone-number"
                      placeholder="Mobile Number"
                      autoComplete="mobile-number"
                      name='phone'
								    value={state.phone}
                      			onChange={handleInputChange}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                  {/* <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic"
      name='userType'
      value={state.userType}
              onChange={handleInputChange}>
        User Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  value="admin" >Admin</Dropdown.Item>
        <Dropdown.Item  value="client">Client</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
    <CFormSelect aria-label="Default select example"
    name='userType'
    value={state.userType}
            onChange={handleInputChange}>
  <option>User Type</option>
  <option value="1">Admin</option>
  <option value="2">Client</option>
</CFormSelect>
                  </CInputGroup>

                  <div className="d-grid">

                  <Link to="/login">

                    <CButton color="success">Create Account</CButton>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
