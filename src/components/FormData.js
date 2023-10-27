import React from 'react'
import { useSelector} from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom';

export default function FormData() {
    const employees=useSelector((state)=>state.data);
    console.log("hello",employees)

  return (
    <div>
        <h2>Form Records</h2>
       <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Skype</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees && employees.data.map((emp) => (
              <tr key={emp.email}>
                <td>{emp.name}</td>
                <td>{emp.dept}</td>
                <td>{emp.skype}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/">
            <button className='fill-response'>Fill Response</button>
        </Link>
    </div>
  )
}
