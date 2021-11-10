import React,{useState}from 'react'
import { Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box';

const SignUp = () => {
            const [open,setOpen] = useState(true);
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
            
    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
<Box sx={style}> <div className="imageUploaderComponent">
<div className="modalContent" >
                           <center>

                           <img style ={{ objectFit:"contain", height:"60px"}}
                            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
                            alt="instagram"
                            /> <form action="" style={{ display:"flex", flexDirection:"column"}}>
                            <Input 
                            type="text"
                            placeholder="username"
                            value=""
                            />
                            <Input style={{marginTop:"10px", marginBottom:"10px"}}
                            type="text"
                            placeholder="email"
                            value=""
                            />
                            <Input 
                            type="text"
                            placeholder="password"
                            value=""
                           
                            />
                            <button  type ="submit"> SignUp</button>
                            </form>
                               </center> 

</div>
</div>
</Box>
</Modal>


            
        
    )
}

export default SignUp
