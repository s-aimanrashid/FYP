import React from "react";
import "../css/AdminDashboardDoctorStyles.css";
import { useNavigate } from "react-router-dom";

import Header from "./Header";

function AdminDashboardDoctor({ doctors = [] }) {
  console.log("Doctors data:", doctors);
  const navigate = useNavigate();

  const redirectToCreateDoctor = () => {
    navigate("/AdminDashboardDoctor/CreateDoctorAcc");
    console.log("Doctors data:", doctors);
  };

  return (
    <>
      <div className="column-2">
        <div className="div-19">
          <Header name="Doctor Management"></Header>
          <div id="createNewButton">
            <button className="div-25" onClick={redirectToCreateDoctor}>
              {/* <NavLink to='/CreateDoctorAcc'>Create New +</NavLink> */}
              Create New +
            </button>
          </div>

          <div className="div-26">
            <table className="table doctors-table">
              <thead className="thead">
                <tr className="tr">
                  <th className="th">Doctor ID</th>
                  <th className="th">Name</th>
                  <th className="th">Fellowship</th>
                  <th className="th">Department</th>
                  <th className="th">Actions</th>
                </tr>
              </thead>
              <tbody id="doctorTableBody" className="tbody">
                {doctors.map((doctor, index) => (
                  <tr className="tr" key={index}>
                    <td className="td">{doctor.identificationNo}</td>
                    <td className="td">{doctor.name}</td>
                    <td className="td">{doctor.fellowship}</td>
                    <td className="td">{doctor.department}</td>
                    <td className="td">
                      <a href="#" className="edit">
                        <i className="fas fa-edit"></i> Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardDoctor;

//////////////////////////////////////////////////////////////////////////////////////////////
