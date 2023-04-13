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

const PatientDetails = React.lazy(() => import('./views/reports/calldetails/reportpatientdetails'))
const VehicleDetails = React.lazy(() => import('./views/reports/calldetails/reportvehicledetails'))
const IncidentDetails = React.lazy(() =>
  import('./views/reports/calldetails/reportincidentdetails'),
)

const PatientHistory = React.lazy(() => import('./views/reports/assessment/reportpatienthistory'))
const PrimaryAssessment = React.lazy(() =>
  import('./views/reports/assessment/reportprimaryassessment'),
)
const PatientAssessment = React.lazy(() =>
  import('./views/reports/assessment/reportpatientassessment'),
)

const PatientDetailsTreatment = React.lazy(() =>
  import('./views/reports/treatment/reportpatientdetails'),
)
const VitalSign = React.lazy(() => import('./views/reports/treatment/reportvitalsign'))

// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Charts = React.lazy(() => import('./views/charts/Charts'))

//reports

const routes = [
  { path: '/', exact: true, name: 'Base' },
  // { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/callDetails', name: 'Call Details', element: Cards, exact: true },
  { path: '/callDetails/PatientDetails', name: 'Patient Details', element: Accordion },
  { path: '/callDetails/VehicleDetails', name: 'Vehicle Details', element: Breadcrumbs },
  { path: '/callDetails/IncidentDetails', name: 'Incident Details', element: Cards },

  { path: '/assessment', name: 'Assessment', element: Buttons, exact: true },
  { path: '/assessment/PatientHistory', name: 'Patient History', element: Buttons },
  { path: '/assessment/PatientAssessment', name: 'Patient Assessment', element: Dropdowns },
  { path: '/assessment/PrimaryAssessment', name: 'Primary Assessment', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },

  { path: '/treatment', name: 'Treatment', element: FormControl, exact: true },
  { path: '/treatment/PatientDetails', name: 'Patient Details', element: FormControl },
  { path: '/treatment/VitalSign', name: 'Vital Sign', element: Select },
  { path: '/login', name: 'Login', element: Login },
  { path: '/register', name: 'Register', element: Login },

  // { path: '/reports', name: 'Reports', element: ReportCall , exact: true },
  // { path: '/reports/calldetails', name: 'CallDetails', element: CallDetails },
  // { path: '/reports/assessment', name: 'Assessment', element: Assessment},
  // { path: '/reports/treatment', name: 'Treatment', element: Treatment },

  { path: '/reports/calldetails/patientdetails', name: 'Patient Report', element: PatientDetails },
  { path: '/reports/calldetails/vehicledetails', name: 'Vehicle Report', element: VehicleDetails },
  {
    path: '/reports/calldetails/incidentdetails',
    name: 'Incident Report',
    element: IncidentDetails,
  },
  {
    path: '/reports/assessment/patienthistory',
    name: 'Patient History Report',
    element: PatientHistory,
  },
  {
    path: '/reports/assessment/primaryassessment',
    name: 'Primary Assess Report',
    element: PrimaryAssessment,
  },
  {
    path: '/reports/assessment/patientassessment',
    name: 'Patient Assess Report',
    element: PatientAssessment,
  },
  {
    path: '/reports/tratment/Patientdetailstreatment',
    name: 'Patient Report',
    element: PatientDetailsTreatment,
  },
  { path: '/reports/treatment/vitalsign', name: 'Vital Sign Report', element: VitalSign },
]

export default routes
