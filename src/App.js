import Home from "./components/Home";
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Profile from "./components/Profile";
import Messanger from "./components/Messanger"
import  Login from "./components/Login";
import SignUp from "./components/SignUp"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Login/>}/>
      <Route  path ="/Home" element={<Home/>}/>
      <Route  path ="/Profile" element={<Profile/>}/>
      <Route  path ="/Messanger" element ={<Messanger/>}/>
      <Route  path ="/SignUp" element ={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
