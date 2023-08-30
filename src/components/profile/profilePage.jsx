import { useContext, useState } from "react";
import { SetUserContext, UserContext } from "../../context/userContext";
import { UPLOAD_PROFILE_IMG_URL } from "../../infra/urls";
import { Button } from "@mui/material";
import axios from "axios";

export default function ProfilePage() {


  const userContext = useContext(UserContext)
  const [file, setFile] = useState('')
  const setUserContext = useContext(SetUserContext)

  const handleFileSelect = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleUploadClick = async () => {
    const response = await axios.post(
      UPLOAD_PROFILE_IMG_URL,
      {file: file},
      {headers: {
        'Content-Type': 'multipart/form-data'
      }}
      ) 
      setUserContext({user: response.data})
      console.log(response)
  }

  return(
    <>
      <p>Profile Page</p>

      <img src={userContext.user.img_url} height={'150px'}/>
      <br />

      <input
        type="file"
        onChange={handleFileSelect}/>

      <Button onClick={handleUploadClick}>UPLOAD</Button>
    
    </>
  )
}