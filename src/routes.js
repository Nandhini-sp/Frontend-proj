import React from 'react'
import Login from './views/pages/login/Login'
// import Reports from './views/reports'



const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))


// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms

const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Charts = React.lazy(() => import('./views/charts/Charts'))


// Reports
//call details

// const CallDetails = React.lazy(() => import('./views/reports/calldetails'))


// const PatientDetails = React.lazy(() => import('./views/reports/calldetails/reportpatientdetails'));
// const VehicleDetails = React.lazy(() => import('./views/reports/calldetails/reportvehicledetails'))
// const IncidentDetails = React.lazy(() => import('./views/reports/calldetails/reportincidentdetails'))

// const PatientHistory = React.lazy(() => import('./views/reports/assessment/reportpatienthistory'))
// const PrimaryAssessment = React.lazy(() => import('./views/reports/assessment/reportprimaryassessment'))
// const PatientAssessment = React.lazy(() => import('./views/reports/assessment/reportpatienthistory'));

// const PatientDetailsTreatment = React.lazy(() => import('./views/reports/treatment/reportpatientdetails'))
// const VitalSign = React.lazy(() => import('./views/reports/treatment/reportvitalsign'))











// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Charts = React.lazy(() => import('./views/charts/Charts'))

//reports









const routes = [
  { path: '/', exact: true, name: 'Base' },
  // { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/login', name: 'Login', element: Login },
  { path: '/register', name: 'Register', element: Login },

  // { path: '/reports', name: 'Reports', element: ReportCall , exact: true },
  // { path: '/reports/calldetails', name: 'CallDetails', element: CallDetails },
  // { path: '/reports/assessment', name: 'Assessment', element: Assessment},
  // { path: '/reports/treatment', name: 'Treatment', element: Treatment },

  

    // { path: '/reports/calldetails/patientdetails', name: 'PatientDetails', element: PatientDetails },
    // { path: '/reports/calldetails/vehicledetails', name: 'VehicleDetails', element: VehicleDetails },
    // { path: '/reports/calldetails/incidentdetails', name: 'IncidentDetails', element: IncidentDetails},
    // { path: '/reports/assessment/patienthistory', name: 'PatientHistory', element: PatientHistory },
    // { path: '/reports/assessment/primaryassessment', name: 'PrimaryAssessment', element: PrimaryAssessment },
    // { path: '/reports/assessment/patientassessment', name: 'PatientAssessment', element: PatientAssessment },
    // { path: '/reports/tratment/Patientdetailstreatment', name: 'PatientDetailsTreatment', element: PatientDetailsTreatment },
    // { path: '/reports/treatment/vitalsign', name: 'VitalSign', element: VitalSign },





    



  

  





]

export default routes
