import React from 'react'
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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
	return (
		
		<div className="bg-light min-vh-100 d-flex flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center m-5">
					<CCol md={8}>
						<CCardGroup>
							<CCard className="p-4 m-5">
								<CCardBody>
									<CForm>
										<h1 className='text-center'>Sign In</h1>
										<CInputGroup className="mb-3">
											<CInputGroupText>
												<CIcon icon={cilUser} />
											</CInputGroupText>
											<CFormInput placeholder="Username" autoComplete="username" />
										</CInputGroup>
										<CInputGroup className="mb-4">
											<CInputGroupText>
												<CIcon icon={cilLockLocked} />
											</CInputGroupText>
											<CFormInput
												type="password"
												placeholder="Password"
												autoComplete="current-password"
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
