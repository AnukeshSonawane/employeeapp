// Register.js




import React, { useEffect } from 'react'
import {useState} from 'react'
import {posturl} from './Config'

const Register = () => {

    const [inpval, setINP] = useState({
        EmployeeCode:"",
        EmployeeName:"",
        EmployeeMail:"",
        EmployeeAddress:"",
        EmployeeAge:"",
        JoiningDate:"",
        EndDate:""
    })

const setdata = (e) => {
    console.log(e.target.value)
    const {name,value} = e.target
    setINP((preval) =>{
        return {
            ...preval,
            [name] : value
        }
    })
}

const addinputdata = async(e)=>{
    e.preventDefault();

    const {EmployeeCode, EmployeeName, EmployeeMail, EmployeeAge, EmployeeAddress, JoiningDate, EndDate} = inpval;

    const res = await fetch(posturl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            EmployeeCode, EmployeeName, EmployeeMail, EmployeeAge, EmployeeAddress, JoiningDate, EndDate
        })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
        alert("error");
        console.log("error");
    }else{
        alert("data added");
        console.log("data added");
    }
}



// hffngf

// const [getuserdata,setUserdata] = useState([]);
// console.log(getuserdata);

// const getdata = async(e)=>{
//     e.preventDefault(); 

//     const res = await fetch("/getdata",{
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json"
//         },
//     });

//     const data = await res.json();
//     console.log(data);

//     if(res.status === 404 || !data){
//         console.log("error");
//     }else{
//         setUserdata(data);
//         console.log("get data");
//     }
// }


// useEffect(()=>{
//     getdata();
// },[])






    return (
        <header>

{/* ==============================================    Navbar    ======================================================== */}

            <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className='logo'>
            <img src={"./godrejlogo.png"} height="100"></img>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/employee"><b>Employees</b></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/status">Status</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/register">Register Emp</a>
              </li>  */}
              <li className="nav-item">
                <a className="nav-link" href="/department"><b>Department</b></a>
              </li> 
              {/* <li className="nav-item">
                <a className="nav-link" href="/register2">Register Dept</a>
              </li>  */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

{/* ==============================================    Register Emp    ================================================== */}
              
      <div>
            <h1 className='ems'><i>Register Employee</i></h1>


            <div>

                <form className='regemp'>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Employee Code</b></label>
                        <input type="text" value={inpval.EmployeeCode} onChange={setdata} name="EmployeeCode" class="form-control" id="exampleInputreferencecode1" placeholder="Enter Emp Code" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName1"><b>Employee Name</b></label>
                        <input type="text" value={inpval.EmployeeName} onChange={setdata} name="EmployeeName" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Enter Name" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Employee Mail</b></label>
                        <input type="email" name="EmployeeMail" value={inpval.EmployeeMail} onChange={setdata} class="form-control" id="exampleInputemail1" placeholder="Enter Email" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Employee Address</b></label>
                        <input type="text" name="EmployeeAddress" value={inpval.EmployeeAddress} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Address" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Employee Age</b></label>
                        <input type="text" name="EmployeeAge" value={inpval.EmployeeAge} onChange={(e)=> {
                            if( 60 >> inpval.EmployeeAge){
                                    setdata(e)
                                }else{
                                    alert("error")
                                }
                            }
                        } class="form-control" id="exampleid1" placeholder="Enter Age" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Joining Date</b></label>
                        <input type="date" name="JoiningDate" value={inpval.JoiningDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Joining Date" className='widthreg1'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>End Date</b></label>
                        <input type="date" name="EndDate" value={inpval.EndDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter End Date" className='widthreg1'></input>
                    </div>
                    {/* <div class="form-group">
                        <label for="exampleInputreferencecode1">Upload Image</label>
                        <input type="file" name="EndDate" value={inpval.EndDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter End Date" className='widthreg1'></input>
                    </div> */}
                </form>
                    <div className='submitbtn'>
                    <button type="submit" onClick={addinputdata} class="btn btn-primary">Submit</button>
                    </div>
            </div>
        </div>
        </header>

    )
}

export default Register;


