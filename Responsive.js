import React from 'react'
import './Responsive.css';
function Responsive() {
  return (
   
            <div className="container-fluid">
                <br></br><br></br>
      <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-10">
        <div className="card-body mt-5">
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  text-center"
            placeholder="Title of Notification"
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control    "
              placeholder="Description-" style={{height:'5rem'}}
            />
          </div>
          <br></br>
          <div class="form-group  ">
            <select  class="form-control  "id="SelectOption">
                <option value="1">Send To</option>
                <option value="1">Send To</option>
                <option value="1">Send To</option>
            </select>
          </div>
          <div className="form-group  ">
            
            <input 
              type="text "id="sum"
            className="form-control    text-center"
            placeholder="To Customer" style={{width:'47%'}}
            />
          </div>
          <div className="form-group  ">
            
            <input 
              type="text "id="sum"
            className="form-control    text-center"
            placeholder="To Field Execative" style={{width:'47%'}}
            />
          </div><br></br><br></br>
          <button  id="btn"className="btn btn-warning " >
            Send
          </button>

        </div>
</div>
    </div>
      </div>
    </div>
   
  )
}

export default Responsive;