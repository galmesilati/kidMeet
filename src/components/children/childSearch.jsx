// import { Autocomplete, Button, Container, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// import { INTERESTS_URL } from "../../infra/urls";
// import axios from "axios";

// export default function ChildSearch() {
  
//   const [interestsName, setInterestsName] = useState([])
//   const [selectedInterests, setSelectedInterests] =useState('')

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(INTERESTS_URL)
//       setInterestsName(response.data)
//     }
//     fetchData()
//   }, [])

//   const handleRenderInput = (params) => {
//     return <TextField {...params} label="Select Interests" value={selectedInterests}
//     onChange={(e) => setSelectedInterests(e.target.value)}/>
//   }

//   const handleSearch = async() => {
//     const response = await axios.get(INTERESTS_URL, {params: {interests: selectedInterests}})
//     setInterestsName(response.data)
//   }

//   return(
//     <>
//     <Container
//         component={'form'} 
//         onSubmit={(e) => {e.preventDefault()}}
//         sx={{marginTop: '1em', display: 'flex'}}>

//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={interestsName}
//             sx={{ width: 300 }}
//             renderInput={handleRenderInput}
//             value={selectedInterests}
//             onChange={(e, newValue) => {

//               setSelectedInterests(newValue)
//             }}
//           />
//           <Button onClick={handleSearch} sx={{color:"#a5ebff", fontWeight: 700}}>Search</Button>
//         </Container>
      

    
//     </>
//   )
// }