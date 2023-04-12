import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import AuthAxios from 'src/Interceptors/AuthAxios'

export default function Reportpatientdetails() {
  const [data, setData] = useState([])

  useEffect(() => {
    AuthAxios.get('PatientCallDetails')
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
      .catch((err) => console.error(err.message))
  }, [])
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>TelePhone</th>
          <th>Insurance Type</th>
          <th>Hospital Chart</th>
          <th>Medical Insurance</th>
          <th>Comments</th>
          <th>Aadhar</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((itm, index) => (
            <tr key={index}>
              <td>{itm.sureName}</td>
              <td>{itm.firstName}</td>
              <td>{itm.gender}</td>
              <td>{itm.DOB}</td>
              <td>{itm.telePhone}</td>
              <td>{itm.typeOfInsurance}</td>
              <td>{itm.hospitalChart}</td>
              <td>{itm.medicalInsurance}</td>
              <td>{itm.comments}</td>
              <td>{itm.aadhar}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
