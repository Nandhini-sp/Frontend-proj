import React from 'react'
import { useState ,useRef} from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
  CRow,
  CFormCheck,
  CToast,
  CToastHeader,
  CToastBody,
  CToaster
} from '@coreui/react'
import { Input } from 'reactstrap'
// import AuthAxios from 'src/Interceptors/AuthAxios'
// import AuthAxios from 'src/Interceptors/AuthAxios'

const accordion = () => {
  const [visible, setVisible] = useState(false)

  // const [toast, addToast] = useState(0)
  const [toast, addToast] = useState(0)
const toaster = useRef()

  const [state, setState] = useState({
    firstname: '',
    surname: '',
    street: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    telephone_no: '',
    aadhar_no: '',
    DOB: '',
    age: '',
    gender: '',
    medical_ins: '',
    typesOfInsurance: '',
    govt_ins_Id: '',
    coverage_Amount: '',
    govt_benefits: '',
    private_ins_id: '',
    private_benefits: '',
    hospital_chart_no: '',
    commends: '',
  })
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">CoreUI for React.js</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const submitHandler = () => {
    // event.preventDefault()
    // console.log(state)

    //  AuthAxios.post('Users', state)
    //   .then((res) => {
    //     console.log(res.data)
    //     location.href = '/#/callDetails'
    //   })
    //   .catch((err) => console.error(err.message))
    console.log(state)
    location.href = '/#/login'
  }

  const Types_ins = ['Private', 'Goverment']

  const Benefides_scheme = ['Aayushman Bharat Yojana', 'Pradhan Mantri Jeeven Jyoti Beema Yojana']

  const Private_Benefides_scheme = [
    'Individual',
    'Family Floater',
    'Group Health',
    'Senior Citizen health',
    'Maternity Health ',
    'Critical Illness ',
    'Top-up health plan',
  ]
  

  return (
    <form  method="post" encType="multipart/form-data">
      <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="firstname"
              value={state.firstname}
              onChange={(event) => handleInputChange(event, 'firstname')}
              
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">FirstName</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="surname"
              value={state.surname}
              onChange={(event) => handleInputChange(event, 'surname')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Surname</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="street"
              value={state.street}
              onChange={(event) => handleInputChange(event, 'street')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Street Address</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="city"
              value={state.city}
              onChange={(event) => handleInputChange(event, 'city')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">City</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="state"
              value={state.state}
              onChange={(event) => handleInputChange(event, 'state')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">state</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="country"
              value={state.country}
              onChange={(event) => handleInputChange(event, 'country')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Country</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="postal_code"
              value={state.postal_code}
              onChange={(event) => handleInputChange(event, 'postal_code')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="telephone_no"
              value={state.telephone_no}
              onChange={(event) => handleInputChange(event, 'telephone_no')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Telephone</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
              <Input type='date' style={{height:"50px"}} name='DOB' value={state.DOB} onChange={(event) => handleInputChange(event, 'DOB')}></Input>
            <CFormLabel htmlFor="floatingInput">Date of Birth</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

       <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="age"
              value={state.age}
              onChange={(event) => handleInputChange(event, 'age')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Age</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          
            <CFormLabel htmlFor="floatingInput"
                        name="gender"
                        value={state.gender}
                        onChange={(event) => handleInputChange(event, 'gender')}
                        
            >Gender</CFormLabel>
            
            <div>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="Male"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="Female"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="Other"/>
            </div>  
        </CCol>
      </CRow>
      
      <CRow>
        <CCol xs={12}>

        <CFormLabel htmlFor="floatingInput"
                        name="medical_ins"
                        value={state.medical_ins}
                        onChange={(event) => handleInputChange(event, 'medical_ins')}
                        style={{height:"50px"}}

            >Medical Insurance</CFormLabel>
            
            <div>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="Yes"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="No"/>
            </div>  

            <CFormLabel htmlFor="floatingInput">(fill the below details only if Medical Insurance exist)

            </CFormLabel>
         
        </CCol>
        
      </CRow>

      <CRow>
        <CCol xs={12}>

        <CFormSelect size="sm" className="mt-3" aria-label="Large select example"
        
        name ="Types_ins"
        value={state.Types_ins}
        onChange={(event) => handleInputChange(event, 'Types_ins')}
        
        >

        <option>Types Of Insurance</option>
        <option value="1">Aayushman Bharat Yojana</option>
          <option value="2">Pradhan Mantri Jeevan Jyoti Beema Yojana</option>
   
          </CFormSelect>

        </CCol>
      </CRow>

      <CRow>
        <CCol>
        <CFormLabel htmlFor="floatingInput">((For Goverment Insurance))</CFormLabel>

        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
        <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder=""
              name="govt_ins_id"
              value={state.govt_ins_Id}
              onChange={(event) => handleInputChange(event, 'govt_ins_Id')}
              style={{height:"20px"}}

            />
            <CFormLabel htmlFor="floatingInput">Goverment Insurance ID Number</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="coverage_Amount"
              value={state.coverage_Amount}
              onChange={(event) => handleInputChange(event, 'coverage_Amount')}
              style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Maximum Coverage Amount</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
        <CFormSelect 
          aria-label="Default select example"
          size='sm'
          options={[
    
          { label: 'Aayushman Bharat Yojana', value: '1' },
          { label: 'Pradhan Mantri Jeevan Jyoti Beema Yojana', value: '2' },
    
                  ]}
                  
                  name="typesOfInsurance"
                value={state.typesOfInsurance}
                onChange={(event) => handleInputChange(event, 'typesOfInsurance')}
                style={{height:"50px"}}

                  />
        </CCol>
      </CRow>

      <CRow>
        <CCol>
        <CFormLabel htmlFor="floatingInput">((For Private Insurance))</CFormLabel>

        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
        <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder=""
              name="private_ins_id"
              value={state.private_ins_id}
              onChange={(event) => handleInputChange(event, 'private_ins_id')}
            />
            <CFormLabel htmlFor="floatingInput">Private Insurance ID Number</CFormLabel>
          </CFormFloating>
          
        </CCol>
      </CRow>

      <CRow>
        <CCol>


        <CFormSelect 
          size="sm" className="mb-3" aria-label="Large select example"
          options={[
          { label:'Types of Insurance', value:'0' },
          { label: 'Individual', value: '1' },
          { label: 'Family Floater', value: '2' },
          { label: 'Group Health', value: '1' },
          { label: 'Senior Citizen Health', value: '1' },
          { label: 'Maternity Health', value: '1' },
          { label: 'Criticial lllness', value: '1' },
          { label: 'Top-up Health', value: '1' },
    
                  ]}
                  name="typesOfInsurance"
                value={state.typesOfInsurance}
                onChange={(event) => handleInputChange(event, 'typesOfInsurance')}
                  />

        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="hospital_chart_no"
              value={state.hospital_chart_no}
              onChange={(event) => handleInputChange(event, 'hospital_chart_no')}
            />
            <CFormLabel htmlFor="floatingInput">Hospital Chart No</CFormLabel>
          </CFormFloating>
        </CCol>
        </CRow>
        <CRow>
        <CCol xs={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="commends"
              id="floatingInput"
              placeholder=""
              name="commends"
              value={state.commends}
              onChange={(event) => handleInputChange(event, 'commends')}
            />
                        <CFormLabel htmlFor="floatingInput">Commends</CFormLabel>

          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>

        <CCol xs={12}>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="submit"
            onClick={() => setVisible(!visible)}
            // onClick={() => submitHandler()}
            >
              Submit
            </button>
            <CModal visible={visible} onClose={() => setVisible(false)}>
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>DOTTY CARE</CModalTitle>
              </CModalHeader>

              <div class="modal-body mx-3">
                <div class="md-form mb-4">
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <input type="email" id="form2" class="form-control validate" />
                  <label data-error="wrong" data-success="right" for="form2">
                    Hospital EMail-Id
                  </label>
                </div>

                <div class="md-form mb-4">
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <input type="email" id="form2" class="form-control validate" />
                  <label data-error="wrong" data-success="right" for="form2">
                    Ambulance EMail-Id
                  </label>
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-success" onSubmit={submitHandler} onClick={() => addToast(exampleToast)}>
                  Send <i class="fas fa-paper-plane-o ml-1"></i>
                </button>
                <CToaster ref={toaster} push={toast} placement="top-end" />
                
              </div>

              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
                <CButton color="primary" onClick={() => submitHandler()}>Submit</CButton>
              </CModalFooter>
            </CModal>
          </div>
        </CCol>

      </CRow>
      

   
    </form>
  )
}

export default accordion
