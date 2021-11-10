import React,{useState,useEffect} from 'react'
import './Login.css'
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import { Input} from '@material-ui/core';
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box';
const Login = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
   const [open,setOpen] = useState(false);
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user,setUser] = useState("null");
   
   
   const signUp = (event)=>{
        event.preventDefault();
        
        auth.createUserWithEmailAndPassword(email,password)  
        .then((authUser)=>{
            console.log(authUser.user.displayName);
            return authUser.user.updateProfile(
                {
                    displayName:username

                }
            )
            
        })
        .catch((error)=>alert(error.message));
    //    alert("User succefully Signed-up ! Happy Sharing !!")
        setOpen(false);
    }
   
   const logIn =(event)=>{
       event.preventDefault();

       auth.signInWithEmailAndPassword(email,password)
       .catch((error)=>{alert(error.message)})
       
       alert("logged-in");
      // console.log(authUser.user.displayName);
       return(
           <div>
               LoggedIn
           </div>
       )
   }
   
    useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
        if(authUser){
            console.log(authUser);
            console.log("auth-changed");
            setUser(authUser);
        }
        else {
            setUser(null);
        }
     })
       return () => {
           unsubscribe();
       }
   }, [user])
    return (
        <div className="logInContainer">
            <div className="login">
            <img style ={{ objectFit:"contain", height:"60px"}}
                            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
                            alt="instagram"/>
            <form action="" className="formy">
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
              <Link to="/Home" > <button onClick={logIn} type="submit"> LogIn</button></Link>

              <h3> Don't have an Account ? 
               <button onClick={ ()=> setOpen(true)}> SignUp</button></h3>
            </form>
            </div>
            <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
            <Box sx={style}> 

            <div className="modalContent" >
                           <center>

                           <img style ={{ objectFit:"contain", height:"60px"}}
                            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
                            alt="instagram"
                            /> <form action="" style={{ display:"flex", flexDirection:"column"}}>
                            <Input 
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input style={{marginTop:"10px", marginBottom:"10px"}}
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input 
                            type="text"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <button  type ="submit"onClick={signUp}> SignUp</button>
                            </form>
                               </center> 

</div>
</Box>
</Modal>
    
 
        </div>
    )
}

export default Login
