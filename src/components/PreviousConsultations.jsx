import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/PreviousConsultations.css";
import Header from "./HeaderAim";

const PreviousConsultations = () => {
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
    // <div className="container">
    //   <Sidebar />
    //   <div className="main-content">
    //     <Header />
        <div className="content-area">
          <div className="lab-results">
            <h2>Previous Consultations</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Observations</th>
                  <th>Date</th>
                  <th>Remarks</th>
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
    //   </div>
    // </div>
  );
};

export default PreviousConsultations;
