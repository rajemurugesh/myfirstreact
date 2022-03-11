import React from "react";
import "./grid.css";
// import { ImHome } from "react-icons/im";
import { BsAlarm } from "react-icons/bs";
import { BsReceipt} from "react-icons/bs";
import { BsCalendar3} from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { IoIosConstruct} from "react-icons/io";
import {IoMdCash} from "react-icons/io";
function Grid() {
  return (
    <div className="grid">
    <div className="grid-container">

      <div class="grid-item1">
      <BsAlarm color="black"/> 
      <h6>Date and Time</h6>
      
      </div>
      
      <div class="grid-item2">
        <BsReceipt color="black"/>
        <h6>Buying/Selling Contracts</h6>
        
        </div>

      <div class="grid-item3">
        <BsCalendar3 color="black"/>
        <h6>Up Coming Meeting</h6>
        </div>

      <div class="grid-item4">
        <ImOffice color="black"/>
        <h6>Leasing Services</h6>
        </div>

      <div class="grid-item5">
        <IoIosConstruct color="black"/>
        <h6>Maintenance Services</h6>
        </div>

      <div class="grid-item6">
        <IoMdCash color="black"/>
        <h6>Revenue States</h6></div>
      </div>
    </div>
  );
}

export default Grid;
