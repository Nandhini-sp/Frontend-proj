import React from 'react'
import { useState } from 'react'


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
  
  CFormCheck
} from '@coreui/react'
import { Input } from 'reactstrap'

const accordion = () => {
  const [visible, setVisible] = useState(false)

  // const [toast, addToast] = useState(0)

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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(state)
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
    <form onSubmit={submitHandler} method="post" encType="multipart/form-data">
      <CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="firstname"
              value={state.firstname}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Telephone</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
              <Input type='date'></Input>
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
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Age</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          
            <CFormLabel htmlFor="floatingInput"
                        name="gender"
                        value={state.gender}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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

        <CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="Types_ins"
        value={state.Types_ins}
        onChange={handleInputChange}>

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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Maximum Coverage Amount</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
        <CFormSelect 
          aria-label="Default select example"
          options={[
    
          { label: 'Aayushman Bharat Yojana', value: '1' },
          { label: 'Pradhan Mantri Jeevan Jyoti Beema Yojana', value: '2' },
    
                  ]}
                  name="typesOfInsurance"
                value={state.typesOfInsurance}
                onChange={handleInputChange}
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
              onChange={handleInputChange}
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
                onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              name="Commends"
              value={state.commends}
              onChange={handleInputChange}
            />
                        <CFormLabel htmlFor="floatingInput">Commends</CFormLabel>

          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>

        <CCol xs={12}>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="submit" onClick={() => setVisible(!visible)}>
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
                <button class="btn btn-success" onSubmit={submitHandler}>
                  Send <i class="fas fa-paper-plane-o ml-1"></i>
                </button>
              </div>

              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
                <CButton color="primary">Submit</CButton>
              </CModalFooter>
            </CModal>
          </div>
        </CCol>

      </CRow>
      

   
    </form>
  )
}

export default accordion
