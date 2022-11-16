import{Routes,Route,BrowserRouter} from 'react-router-dom';
import logo from './img/godrejlogo.png';
import theone from './img/theone.jpg';
// import gstatus from './images/gstatus.jpg';
import './App.css';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
// import About from './Pages/About';
import Employee from './pages/Employee';
import Department from './pages/Department';
// import Login from './Pages/Login';
// import Status from './Pages/Status';
import Register from './pages/Register';
import Register2 from './pages/Register2';
// import Edit from './Pages/Edit';
// import Details from './Pages/Details';
import Edit from './pages/Edit';
import Edit2 from './pages/Edit2';


function App() {
  return (
    <div className='Main'>
    <BrowserRouter>
    <Routes>
       <Route path ='/' element={<Home></Home>} />
       {/* <Route path ='/about' element={<About></About>} /> */}
       <Route path ='/employee' element={<Employee></Employee>} />
       <Route path ='/department' element={<Department></Department>} />
       {/* <Route path ='/login' element={<Login></Login>} />
       <Route path ='/status' element={<Status></Status>} /> */}
       <Route path ='/register' element={<Register></Register>} />
       <Route path ='/register2' element={<Register2></Register2>} />
       {/* <Route path ='/edit/:id' element={<Edit></Edit>} />
       <Route path ='/details/:id' element={<Details></Details>} /> */}
        <Route path ='/edit' element={<Edit></Edit>} />
       <Route path ='/edit2' element={<Edit2></Edit2>} />
       
      

    </Routes>
    </BrowserRouter>
    </div>
      
  );
}

export default App;
