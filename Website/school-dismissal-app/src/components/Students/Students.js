import React from 'react';
















const Students = ({ students }) => {
  return (


    <div>
      <center><h1>Student List</h1></center>
      <center><div class = "row">
      {students.map((student) => (
      
        <div class="card-deck">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">{student._id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{student.name}</h6>
              <li class="list-group-item"> Teacher: {student.teacher} </li>
              <li class="list-group-item"> Bus number: {student.bus}</li>
              <li class="list-group-item"> Class Room: {student.room}</li>
              <li class="list-group-item"> Students Grade: {student.grade}</li>
              <li class="list-group-item"> Mode of Transportation: {student.mode}</li>
              <li class="list-group-item">
                <p class="card-text">
                <label>Parents: </label>
                  <select id = "myList">
                    <option value = "1">{student.guardians[0]}</option>
                    <option value = "2">{student.guardians[1]}</option>
                  </select>
                </p>
              </li>
              <li class="list-group-item">Mode: {student.mode}</li>
              <li class="list-group-item">
                <p class="card-text">
                  <label>parents car's: </label>
                  <select id = "myList">
                    <option value = "1">{student.cars[0]}</option>
                  </select>
                </p>
              </li>
              <a href="Add_student" class="btn btn-primary">edit</a>
            </div>
          </div>
        </div>
  
      ))}
     </div>
     </center>
    </div>
    
    
  )
  
};

export default Students