import React, { useState } from "react";
import "./App.css"



function App() {

const [user,setUser] = useState('');
const [startDate,setStartDate] = useState('');
const [endDate,setEndDate] = useState('');
const [allEntry,setAllEntry] = useState([]);

  const handleOnSubmit = (e) =>{
   e.preventDefault();
   const newEntry = {user:user,startDate:startDate,endDate:endDate}
     setAllEntry(...allEntry,newEntry);
  }

  return (
    <div className="App">
      
<h1>New Hotel Booking</h1>
<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-header">Hotel Booking</div>
            <div class="card-body">
                <form onSubmit={handleOnSubmit}>
                    <div class="mb-3">
                        <label class="form-label">Guest Name</label>
                        <input type="text" class="form-control" value={user} onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Date Start</label>
                        <input type="date" class="form-control"  value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Date End</label>
                        <input type="date" class="form-control"  value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-danger" >Save</button>
                    </div>
                </form>
            </div>
            <div class="card-footer"></div>
        </div>
        <div>
{ allEntry.map((element) => {
        const{id, user, startDate, endDate} = element;
        return(
            <div key={id}>
              <p>{user}</p>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </div>
        );
      })}
</div>
       
    </div>
   
</div>

 </div>
    
  );
}

export default App;
