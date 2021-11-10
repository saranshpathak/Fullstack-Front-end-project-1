import '../App.css';
import { IconContext } from "react-icons";
import { useState, useEffect} from 'react';
import Post from './Post'
import {db} from './firebase'
import Header from './Header'
import { AiFillHome, AiFillFolderAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Story from './Story'
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box';

function Home() {

  const [posts,setPosts] = useState([]);
  const [open,setOpen] = useState(false);

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

useEffect(()=>{
  db.collection('posts').onSnapshot(snapshot =>{
    setPosts(snapshot.docs.map(doc =>( {
      id:doc.id,
      post:doc.data(),
})
      ));
  })
},
 [posts]);


  return (
    <div className="app_container">
    <Header/>
     
    <Story/>
    {
      posts.map(( {post,id})=>(
      <Post  key={id} userName={post.userName} caption={post.caption} imageUrl={post.imageUrl} />
      ))
    }
    

    <IconContext.Provider
      value={{ color: 'black', size: '30px' }}
    >
     <div className="navigationButton">
      <Link to="/"> < AiFillHome /></Link>
      <button onClick={ ()=> setOpen(true)}>< AiFillFolderAdd/></button>
      <Link to="/Profile"> <  CgProfile/></Link>
    </div>
    </IconContext.Provider>

    <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
        >
            <Box sx={style}> <div className="imageUploaderComponent">
            <ImageUpload /> 
            </div>
            </Box>
            </Modal>

    </div>
  );
}

export default Home;

