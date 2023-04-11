import React from 'react'
import { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import AuthAxios from 'src/Interceptors/AuthAxios'

const Register = () => {
  const [state, setState] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    userType: '',
  })
  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const submitHandler = () => {
    // AuthAxios.post('Users', state)
    //   .then((res) => {
    //     console.log(res.data)
    //     location.href = '/#/login'
    //   })
    //   .catch((err) => console.error(err.message))
    console.log(state)
    location.href = '/#/login'
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm method="post" encType="multipart/form-data" className="form-horizontal">
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      name="userName"
                      value={state.userName}
                      onChange={(event) => handleInputChange(event, 'userName')}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      value={state.email}
                      onChange={(event) => handleInputChange(event, 'email')}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      value={state.password}
                      onChange={(event) => handleInputChange(event, 'password')}
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
                      name="phone"
                      value={state.phone}
                      onChange={(event) => handleInputChange(event, 'phone')}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormSelect
                      aria-label="Default select example"
                      name="userType"
                      value={state.userType}
                      onChange={(event) => handleInputChange(event, 'userType')}
                    >
                      <option>User Type</option>
                      <option value="admin">Admin</option>
                      <option value="client">Client</option>
                    </CFormSelect>
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={() => submitHandler()} color="success">
                      Create Account
                    </CButton>
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
