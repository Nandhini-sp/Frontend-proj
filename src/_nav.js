import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilCursor, cilNotes, cilPuzzle } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'DOTTY CARE',
  },
  {
    component: CNavGroup,
    name: 'Call Details',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Patient Details',
        to: '/callDetails/PatientDetails',
      },
      {
        component: CNavItem,
        name: 'Vehicle Details',
        to: '/callDetails/VehicleDetails',
      },
      {
        component: CNavItem,
        name: 'Incident Details',
        to: '/callDetails/IncidentDetails',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Assessment',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Patient History',
        to: '/assessment/PatientHistory',
      },
      {
        component: CNavItem,
        name: 'Primary Assessment',
        to: '/assessment/PrimaryAssessment',
      },
      {
        component: CNavItem,
        name: 'Patient Assessment',
        to: '/assessment/PatientAssessment',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Treatment',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Patient Details',
        to: '/treatment/PatientDetails',
      },
      {
        component: CNavItem,
        name: 'Vital Sign',
        to: '/treatment/VitalSign',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Report',
    to: '/reports',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Call Details Report',
        to: '/base',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Patient Report',
            to: '/reports/calldetails/patientdetails',
          },
          {
            component: CNavItem,
            name: 'Vehicle Report',
            to: '/reports/calldetails/vehicledetails',
          },
          {
            component: CNavItem,
            name: 'Incident Report',
            to: '/reports/calldetails/incidentdetails',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Assessment Report',
        to: '/buttons',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Patient History Report',
            to: '/reports/assessment/patienthistory',
          },
          {
            component: CNavItem,
            name: 'Primary Assess Report',
            to: '/reports/assessment/primaryassessment',
          },
          {
            component: CNavItem,
            name: 'Patient Assess Report',
            to: '/reports/assessment/patientassessment',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Treatment Report',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Patient Report',
            to: '/reports/tratment/Patientdetailstreatment',
          },
          {
            component: CNavItem,
            name: 'Vital Sign Report',
            to: '/reports/treatment/vitalsign',
          },
        ],
      },
    ],
  },
]

export default _nav
