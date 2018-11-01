import React from "react";
import "./style.css";

export const OverviewPage = () => {

  const FieldGroup = ({name}) => {
    return (
      <div>
        <label htmlFor={name}>{name}:</label>
        <br/>
        <input type="text" name={name}/>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="box left">
        <div className="title">
          <h1>Create Company</h1>
        </div>
        <form className="" action="">
          <FieldGroup name="Name" />
          <FieldGroup name="Address" />
          <FieldGroup name="Revenue" />
          <FieldGroup name="Phone No" />
        </form>
      </div>
      
      <div className="box right">
        <div className="title">
          <h1>Create Office</h1>
        </div>
        <form className="" action="">
          <FieldGroup name="Name" />
          <FieldGroup name="Location" />
          <FieldGroup name="Office Start Date" />
          <FieldGroup name="Company" />
        </form>
      </div>
    </div>
  );
};
