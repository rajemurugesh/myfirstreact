import React, { useState} from "react";
import "./clientinfo.css";
import axios from "axios"

function Clientinfo() {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({
      ...clientInfo,
      [name]: value,
    })
  }
  const saveUserProfile= ()=>{
    const {name, email,notes} = clientInfo
    if(clientInfo && email){
      axios.post("http://localhost:8080/clientInfo", clientInfo)
     .then (res=>  {
      alert(res.data.message)
    })
  } else {
      alert ("invalid input")
    }
    
  }
  return (
    <div className="clientinfo-container">
      <div className="shaik">
        <img src="shaik.png"></img>
      </div>
      <table>
        <tr>
          <td>
            <label>Full Name</label>
          </td>
          <td>
            {" "}
            <select>
              {" "}
              <option>Mr</option> <option>Mrs</option> <option>Ms</option>
            </select>
          </td>
          <td>
            <input type="text" name="full name" value={clientInfo.name} onChange={handleChange} />
          </td>
        </tr>

        <tr>
          <td>
            <label>Date of Birth:</label>
          </td>
          {/* <td><input type='number' name='birthdate'/></td> */}
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>{" "}
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Nationality:</label>
          </td>
          <td>
            <select>
              <option>United Arab Emirates</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Passport No:</label>
          </td>
          <td>
            <input type="text" name="passport" />
          </td>
          <td>
            <label>Expire Date</label>
          </td>
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>{" "}
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>Emirates ID No:</label>
          </td>{" "}
          <td>
            {" "}
            <input type="text" name="Emirates" />
          </td>
          <td>
            <label>Expire Date</label>
          </td>
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>{" "}
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>{" "}
          <td>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Mobile Number</label>
          </td>
          <td>
            <select>
              <option>052</option>
              <option>056</option>
              <td>
                <input type="number" name="mobile number" />
              </td>
            </select>
          </td>
          <td>
            <label>Landline No:</label>
          </td>
          <td>
            <select>
              <option>044</option>
              <option>042</option>
              <td>
                <input type="text" name="Landline" />
              </td>
            </select>
          </td>
          {/* <td><input type='number' name='mobile number'/></td> */}
        </tr>

        <tr>
          <td>
            <label>Emirate</label>
          </td>{" "}
          <td>
            <select>
              <option>c1</option>
              <option>c2</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Email Address:</label>
          </td>
          <td>
            <input type="text" name="email" value={clientInfo.email} onChange={handleChange}/>
          </td>
        </tr>

        <tr>
          <td>
            <label>Notes:</label>
          </td>{" "}
          <td>
            <textarea></textarea>
          </td>
        </tr>
      </table>
      <li><a href='/save' onClick={saveUserProfile}>Save</a></li>
    </div>
  );
}

export default Clientinfo;
