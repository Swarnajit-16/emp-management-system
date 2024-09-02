
import './App.css';
import Navbar from './components/Navbar';
import Employeelist from './components/Employeelist';
import AddEmployee from './components/AddEmployee';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route index element={<Employeelist/>}/>
    <Route path="/" element={<Employeelist/>}/>
   <Route path='/addEmployee' element={<AddEmployee/>}/>
  <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
   </Routes>
    </BrowserRouter>
   

    
   
      </>


  );
}

export default App;
