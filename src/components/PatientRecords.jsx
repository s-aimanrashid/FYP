
import React from 'react';
import '../css/AdminDashboardDoctorStyles.css';
import Header from './Header';

function PatientRecords() {
    const redirect = () => {
        // Redirect logic here
    };

    return (
        
                <div className="column-2">
                    <div className="div-19">

                        <Header name='Patient Management'></Header>
                        <div id="createNewButton">
                            <button className="div-25" onClick={redirect}>Create New +</button>
                        </div>
                        <div className="div-26">
                            <table className="table doctors-table">
                                <thead className="thead">
                                    <tr className="tr">
                                        <th className="th">Patient ID</th>
                                        <th className="th">Name</th>
                                        <th className="th">Email</th>
                                        <th className="th">Contact</th>
                                        <th className="th">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="doctorTableBody" className="tbody">
                                    {/* Dynamic rows will go here */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
       
    );
}

export default PatientRecords;