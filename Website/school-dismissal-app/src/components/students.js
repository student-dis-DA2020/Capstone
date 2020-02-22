import React from 'react'

const Students = ({ students }) => {
  return (
    <div>
      <center><h1>Student List</h1></center>
      {students.map((student) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{student._id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{student.name}</h6>
            <p class="card-text">Teacher: {student.teacher}</p>
            <p class="card-text">Parent: {student.guardians[0]}</p>
            <p class="card-text">Mode: {student.mode}</p>

          <p>
            <label>Select list</label>
             <select id = "myList">
               <option value = "1">one</option>
               <option value = "2">two</option>
               <option value = "3">three</option>
               <option value = "4">four</option>
             </select>
          </p>


          </div>
        </div>
      ))}
    </div>
    
  )
  
};


export default Students