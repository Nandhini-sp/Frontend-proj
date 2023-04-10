import React from 'react'
import Table from 'react-bootstrap/Table'

function callDetailsReport() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Details</th>
          <th> Call ID</th>
          <th>U</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <i className="i"></i>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default callDetailsReport
