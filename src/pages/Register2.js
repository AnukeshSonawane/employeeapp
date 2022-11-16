import React, { useEffect } from 'react'
import {useState} from 'react'
import {posturl1} from './Config'
import { geturl } from './Config'





const Register = () => {

    const [inpval, setINP, ] = useState({
        EmployeeCode:"",
        EmployeeName:"",
        EmployeeMail:"",
        StartDate:"",
        EndDate:"",
        DepartmentName:"",
        DepartmentHead:"",
        Status:""
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

const addinputdata1 = async(e)=>{
    e.preventDefault();

    const {EmployeeCode, EmployeeName, EmployeeMail, StartDate, EndDate, DepartmentName, DepartmentHead, Status} = inpval;

    const res = await fetch(posturl1,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            EmployeeCode, EmployeeName, EmployeeMail, StartDate, EndDate, DepartmentName, DepartmentHead, Status
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
const [getuserdata, setUserdata] = useState([])


console.log(getuserdata)
  
    const getdata = async (e) => {
      const res = await fetch(geturl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      const data = await res.json()
      console.log(data)
  
      if (res.status === 404 || !data) {
        console.log('error')
      } else {
        setUserdata(data)
        console.log('getdata')
      }
    }
  
    useEffect(() => {
      getdata()
    }, [])
  
   

    return (
        <header>

{/* ==================================================    Navbar    ======================================================= */}

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

{/* ==================================================    Register Dept    ============================================= */}

      <div>
            <h1 className='ems'><i>Register Department of Employee</i></h1>


            <div>
                <form className='regemp'>
                <div class="form-group">
                    <label for="exampleInputreferencecode1"><b>Employee Code</b></label>
                        <form>
                            <select  value={inpval.EmployeeCode} onChange={setdata} name="EmployeeCode" class="form-control" className='widthreg'>
                            <option>Employee Code  .</option>
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                    <option>{element.EmployeeCode}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputName1"><b>Employee Name</b></label>
                        <form>
                            <select  value={inpval.EmployeeName} onChange={setdata} name="EmployeeName" class="form-control" className='widthreg'>
                            <option>Employee Name  .</option>
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                    <option>{element.EmployeeName}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Employee Mail</b></label>
                        <form>
                            <select  value={inpval.EmployeeMail} onChange={setdata} name="EmployeeMail" class="form-control" className='widthreg'>
                            <option>Employee Mail.</option>
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                    <option>{element.EmployeeMail}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Department Name</b></label>
                        <select type="text" name="DepartmentName" value={inpval.DepartmentName} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Dept Name" className='widthreg'>
                        <option selected>Select Dept  .</option>
                        <option>DGTL</option>
                        <option>HR</option>
                        <option>OTG</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>L + 1</b></label>
                        <input type="text" name="DepartmentHead" value={inpval.DepartmentHead} onChange={setdata} class="form-control" id="exampleid1" placeholder="L + 1" className='widthreg'></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Start Date</b></label>
                        <input type="date" name="StartDate" value={inpval.StartDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Start Date" className='widthreg1'></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>End Date</b></label>
                        <input type="date" name="EndDate" value={inpval.EndDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter End Date" className='widthreg1'></input>
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Status</b></label>
                        <select type="text" name="Status" value={inpval.Status} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Dept Name" className='widthreg'>
                        <option selected>Your Status  </option>
                        <option>Active</option>
                        <option>Inactive</option>
                        </select>
                    </div>
                    
                    

                    </form>
                    <div className='submitbtn1'>
                    <button type="submit" onClick={addinputdata1} class="btn btn-primary">Submit</button>
                    </div>
            </div>
        </div>
        </header>
    
    )
}

export default Register;


