import React, { useState } from "react";
// import "./Regii.css"
// import { useFormik } from 'formik'
const Register = () => {
  const [formik, setFormik] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    textarea: "",
  });
  const [records, setRecords] = useState([]);

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setFormik({ ...formik, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...formik, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setFormik({
      fullname: "",
      email: "",
      mobile: "",
      password: "",
      textarea: "",
    });
  };

  return (
    <div className="container my-5">
      
      <div className=" container  gird1 ">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-8 card card1">
            <h1 className="text-center">Drop Us A Line</h1>
        <form onSubmit={handleSubmit}>
         <div className="row my-5">
          
          <div className="col-md-6">
          <label className="k" htmlFor="fullname">
            Fullname :
          </label>
          <input
            className="input1 form-control"
            onChange={handelInput}
            value={formik.fullname}
            autoComplete="off"
            type="fullname"
            name="fullname"
            id="fullname"
          />
           </div>
          <div className="col-md-6">
          <label className="k" htmlFor="email">
            Email :
          </label>
          <input
            className="input1 form-control"
            onChange={handelInput}
            value={formik.email}
            autoComplete="off"
            type="email"
            name="email"
            id="email"
          />
          </div>
          </div>
           <div className="row my-5">
          
          <div className="col-md-6 ">
          <label className="k" htmlFor="mobile">
            Phone No. :
          </label>
          <input
            className="input1 form-control"
            onChange={handelInput}
            value={formik.mobile}
            autoComplete="off"
            type="mobile"
            name="mobile"
            id="mobile"
          />
           </div>
           <div className="col-md-6 ">
          <label className="k " htmlFor="password">
            Password :
          </label>
          <input
            className="input1 form-control"
            onChange={handelInput}
            value={formik.password}
            autoComplete="off"
            type="password"
            name="password"
            id="password"
          />
           </div> </div>
          <label className="k " htmlFor="textarea">
            Requirement :
          </label>
          <textarea
            className="input1 form-control"
            onChange={handelInput}
            value={formik.textarea}
            autoComplete="off"
            type="text"
            name="textarea"
            id="textarea"
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="btn btn btn-lg btn-block my-4 btn1" 
          >
            SEND
          </button>
        </form>
      </div>
      <div className=" container my-5 " style={{ backgroundColor: "rgb(247, 247, 247)",
    boxShadow:"rgb(0 0 0 / 20%) 0px 0px 10px",color:"black",fontSize:"18px"}}>
        {records.map((curElem) => {
          return (
            <div>
              <div className="row p-3">
             
                <div className="col-md-3"><p>Fullname : {curElem.fullname}</p></div>
                <div className="col-md-3"><p>Eamil : {curElem.email}</p></div>
                <div className="col-md-3"><p>Phone : {curElem.mobile}</p></div>
                <div className="col-md-3"><p>Password : {curElem.password}</p></div>
                <div className="col-md-3"><p>Requirement : {curElem.textarea}</p></div>
                
              </div>
              
              
              
           
              
            </div>
          );
        })}
        </div>
               <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
