import React, { useState, useEffect } from "react";
import { NavLink, UNSAFE_DataRouterStateContet } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
import { geturl } from "./Config";
import { CSVLink } from "react-csv";

const Employee = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(geturl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const [deleteuserdata, setUserdata1] = useState([]);
  console.log(deleteuserdata);

  const deleteuser = async (EmployeeCode) => {
    
    const res2 = await fetch(`http://localhost:4000/Employee/${EmployeeCode}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      setUserdata1(data2);
      console.log("user deleted");
    }
  };

  useEffect(() => {
    deleteuser();
  }, []);



  let allresult;
  const handleSearchall = (event) => {
    let searchtextall = event.target.value;
    console.log(searchtextall);
    console.log(getuserdata);
    allresult = getuserdata.filter((item) =>
      item.EmployeeCode.toLowerCase()
        .toLowerCase()
        .includes(searchtextall.toLowerCase())
    );
    setUserdata(allresult);
    console.log(allresult);
  };

  let allresults;
  const handleSearchall1 = (event) => {
    let searchtextall1 = event.target.value;
    console.log(searchtextall1);
    console.log(getuserdata);
    allresults = getuserdata.filter((item) =>
      item.EmployeeName.toLowerCase()
        .toLowerCase()
        .includes(searchtextall1.toLowerCase())
    );
    setUserdata(allresults);
    console.log(allresults);
  };

  return (
    <header>
      {/* =================================================    Navbar    ===================================================== */}

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="logo">
            <img src={"./godrejlogo.png"} height="100"></img>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>Home</b>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/status">Status</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/employee">
                  <b>Employees</b>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/register">Register Emp</a>
              </li>  */}
              <li className="nav-item">
                <a className="nav-link" href="/department">
                  <b>Department</b>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/register2">Register Dept</a>
              </li>  */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* ===============================================    Emp Table    ============================================= */}

      <div className="mt-5">
        <div className="container">
          <div className="ems">
            <h3>Employee Table</h3>
          </div>
          <div className="add_btn mt-2">
            <NavLink to="/register" className="btn btn-primary">
              Add User +
            </NavLink>
          </div>

          <CSVLink data={getuserdata} className="btn btn-success mb-3">
            Download in Excel
          </CSVLink>

          <table class="table">
            <thead>
              <tr className="tabletop">
                <th scope="col">
                  <div class="input-group">
                    <div class="form-outline">
                      <input
                        type="search"
                        id="form1"
                        class="form-control"
                        onChange={handleSearchall}
                        placeholder="Get by Code"
                      />
                    </div>
                  </div>{" "}
                  Employee Code
                </th>
                <th scope="col">
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    onChange={handleSearchall1}
                    placeholder="Get by Name"
                  />
                  Employee Name
                </th>
                <th scope="col">Employee Mail</th>
                <th scope="col">Employee Address</th>
                <th scope="col">Employee Age</th>
                <th scope="col">Joining Date</th>
                <th scope="col">End Date</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                {/* <th scope='col'>Grade</th>
                <th scope='col'>Department</th>
                <th scope='col'>L+1</th> */}
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element) => {
                return (
                  <>
                    <tr className="tablebottom">
                      <th scope="row">{element.EmployeeCode}</th>
                      <td>
                        <b>{element.EmployeeName}</b>
                      </td>
                      <td>
                        <b>{element.EmployeeMail}</b>
                      </td>
                      <td>
                        <b>{element.EmployeeAddress}</b>
                      </td>
                      <td>
                        <b>{element.EmployeeAge}</b>
                      </td>
                      <td>
                        <b>{element.JoiningDate}</b>
                      </td>
                      <td>
                        <b>{element.EndDate}</b>
                      </td>
                      {/* <td>{element.grade}</td> */}
                      {/* <td>{element.department}</td> */}
                      {/* <td>{element.L1}</td> */}

                      <td className="d-flex justify-content-between">
                        <NavLink to={`/details/${element._id}`}>
                          <button className="btn btn-success">VIEW</button>
                        </NavLink>
                      </td>

                      <td>
                        <NavLink to="/edit">
                          <button className="btn btn-primary">EDIT</button>
                        </NavLink>
                      </td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element.EmployeeCode)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
};

export default Employee;
