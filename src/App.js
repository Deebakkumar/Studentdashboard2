import "./sb-admin-2.min.css"
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Portal from "./Components/Portal";
import Dashboard from "./Components/Dashboard";
import { UserProvider } from "./UserContext";
import { useState } from "react";
import AddStudent from "./Components/AddStudent";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  const [Student,setStudent]=useState([
    {
      id:'1',
      name:"Prabu",
      gender:"Male",
      gpa:"70%",
     dob:"2002/09/02",
      average:"1",
      father:"Arun",
      mother:"Devi",
      num:"932578902",
      job:"Actor",
    },
    {
      id:'2',
      name:"Deepak",
      gender:"Male",
      gpa:"72%",
      dob:"1999/04/18",
      average:"2",
      father:"Aditya",
      mother:"Gayatri",
      num:"9756789342",
      job:"Business man"

    },
    {
      id:'3',
      name:"Aakash",
      gender:"Male",
      gpa:"60%",
      dob:"2000/01/10",
      average:"2",
      father:"kishore",
      mother:"Ranjitha",
      num:"7555421896",
      job:"Devops engineer"
    },
    {
      id:'4',
      name:"Kumar",
      gender:"Male",
      gpa:"79%",
      dob:"2001/03/22",
      average:"3",
      father:"Ronith",
      mother:"Alka",
      num:'7555218287',
      job:"Freelancer"
    },
    {
      id:'5',
      name:"Shanmathi",
      gender:"Female",
      gpa:"90%",
      dob:"2001/05/19",
      average:"1",
      father:"Neel",
      mother:"Anjana",
      num:"8555424945",
      job:"Construction Worker",
    },
    {
      id:'6',
      name:"Sivakumar",
      gender:"Male",
      gpa:"80%",
      dob:"2000/05/22",
      average:"2",
      father:'Vishu',
      mother:"Aarti",
      num:"9255521956",
      job:"Social Worker"
    },
    {
      id:'7',
      name:"Ahamaed",
      gender:"Male",
      gpa:"70%",
      dob:"2000/07/10",
      average:"1",
      father:"Sridhara",
      mother:"Diti",
      num:"9855513652",
      job:"Doctor"
    },
    {
      id:'8',
      name:"Deepa",
      gender:"Female",
      gpa:"80%",
      dob:"2001/02/01",
      average:"2",
      father:"Rajasekaran",
      mother:"Daksha",
      num:"9455512541",
      job:"Journalist"
    },
    {
      id:'9',
      name:"Charu",
      gender:"Female",
      gpa:"60%",
      dob:"1999/03/18",
      average:"1",
      father:"Kalaparan",
      mother:"Sita",
      num:'9655554089',
      job:"Policeman"
    },
    {
      id:'10',
      name:"Abi",
      gender:"Female",
      gpa:"70%",
      dob:"03/12/2000",
      average:"1",
      father:"Nayanesh",
      mother:'Damini',
      num:"8555296658",
      job:"Secretary"
    },
      ])

  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/portal' element={<Portal/>}>

<Route path='dashboard' element={<Dashboard  Student={Student} setStudent={setStudent}/>}/>
<Route path='add' element={<AddStudent  Student={Student} setStudent={setStudent}/> }/>
<Route path="view/:id" element={<View Student={Student}/>}/>
<Route path="edit/:id" element={<Edit   Student={Student} />}/>
</Route>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;