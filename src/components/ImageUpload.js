import React,{ useEffect, useState} from 'react'
import firebase from 'firebase/compat';
import { Button } from '@material-ui/core';
import { storage,db, } from './firebase';
import { getAuth } from "firebase/auth";
import './ImageUpload.css';


const ImageUpload = () => {
    const [caption,setCaption] = useState('');
    const [image,setImage] = useState("");
    const [progress,setProgress] =useState(0);
     const [user,setUser]=useState(null);


    const handleChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    useEffect(()=>{
        const auth = getAuth();
        const user = auth.currentUser?.displayName;
        setUser(user)
        console.log(user);
    },[])
  
   
    

    const handleUpload = (e) =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot)=>{
               const progress = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes)*100);
               setProgress(progress);
            },
            (error) =>{
                console.log(error.message);
                alert(error.message);
            },
            () =>{
                console.log(user);
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url)=>{
                    db.collection("posts").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        imageUrl:url,
                        caption:caption,
                        userName:user,
                    });

                    setImage("");
                    setProgress(0);
                    setCaption("");
                })
            }
        )
    };
    return (
        <div className="imageUploadContainer">
            <h3> Upload Your Image</h3>
            <progress value={progress} max="100"/>

            <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}> Upload</Button>
        </div>
    )
}

export default ImageUpload
