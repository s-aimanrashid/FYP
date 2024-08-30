import React, { useState } from "react";

import "../css/PreviousConsultations.css";


import HeaderAim from "./HeaderAim";
import Sidebar from "./Sidebar";
import Drsidebar from "./Drsidebar";

const DoctorConsultations = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const consultations = [
    {
      id: 1,
      doctor: "Dr. Yousuf",
      department: "Physician",
      observations: "Mild Fever",
      date: "02-03-2024",
      remarks: "",
    },
    // Additional rows can be added here
  ];

  return (
    <div className="container-New">
      <Drsidebar></Drsidebar>
      <div className="main-content-New">
        <HeaderAim></HeaderAim>
        <div className="content-area">
          <div className="lab-results">
            <h2>Doctor Consultations</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Observations</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Consults</th>
                </tr>
              </thead>
              <tbody>
                {consultations
                  .filter(
                    (consultation) =>
                      consultation.doctor.toLowerCase().includes(searchInput) ||
                      consultation.observations
                        .toLowerCase()
                        .includes(searchInput)
                  )
                  .map((consultation, index) => (
                    <tr key={consultation.id}>
                      <td>{String(index + 1).padStart(2, "0")}.</td>
                      <td>{consultation.doctor}</td>
                      <td>{consultation.department}</td>
                      <td>{consultation.observations}</td>
                      <td>{consultation.date}</td>
                      <td>{consultation.remarks}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>
  );
};

export default DoctorConsultations;
