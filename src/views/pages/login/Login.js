import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import {
	CButton,
	CCard,
	CCardBody,
	CCardGroup,
	CCol,
	CContainer,
	CForm,
	CFormInput,
	CInputGroup,
	CInputGroupText,
	CRow,
} from '@coreui/react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Box,
	Typography,
	Container,
  } from "@mui/material";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {


	const [state, setState] = useState({
		userName:"",
		
		password:"",
		
		
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
				<CRow className="justify-content-center mb-5 p-5">
					<CCol md={8}>
						<CCardGroup>
							<CCard className="p-4 m-5">
								<CCardBody>
									<CForm onClick={submitHandler}
    method="post"
    encType="multipart/form-data"
    className="form-horizontal">
		<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
										<h1 className='text-center mb-5'>Sign In</h1>
										<CInputGroup className="mb-3">
											<CInputGroupText>
												<CIcon icon={cilUser} />
											</CInputGroupText>
											<CFormInput placeholder="Username" autoComplete="username"
											 name='userName'
											 value={state.userName}
										   onChange={handleInputChange} />
										</CInputGroup>
										<CInputGroup className="mb-4">
											<CInputGroupText>
												<CIcon icon={cilLockLocked} />
											</CInputGroupText>
											<CFormInput
												type="password"
												placeholder="Password"
												autoComplete="current-password"
												name='password'
												value={state.password}
											  onChange={handleInputChange}
											/>
										</CInputGroup>
										<CRow>
											<CCol xs={6}>
                      <Link to="/base/accordion">

											    <CButton color="primary " className="px-4" >
													Login
												</CButton>
                        </Link>
											</CCol>
											<CCol xs={6} className="text-right">
												<CButton color="link" className="px-0">
													Forgot password?
												</CButton>
											</CCol>
										</CRow>
										<CCardBody className="text-center">
									<div>
										
										<Link to="/register">
											<CButton color="primary" className="mt-3" active tabIndex={-1}>
												Register Now!
											</CButton>
										</Link>
									</div>
								</CCardBody>

									</CForm>
								</CCardBody>
							</CCard>
						
						</CCardGroup>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	
	)
}

export default Login
