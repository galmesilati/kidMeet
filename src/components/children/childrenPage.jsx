import { ButtonGroup, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import * as React from 'react';
import * as urls from '../../infra/urls'
import axios from "axios";
import ChildSearch from "./childSearch";
import NewChildModal from "./newChildModal";
import { useNavigate } from "react-router-dom";



const ChildrenPage = () => {

  const [children, setChildren] = React.useState([])
  // const [interests, setInterests] = React.useState({results:[]})

  const [openAddChildModal, setOpenAddChildModal] = React.useState(false);

  const navigate = useNavigate()


    React.useEffect(
      () => {
          const fetchData = async () => {
            try {
              const response = await axios.get(urls.USER_CHILDREN_LIST_URL, 
                // headers: {
                //   Authorization: `Bearer ${localStorage.getItem('access_token')}`
                // }
              );
              console.log(response);
              setChildren(response.data)
            } catch (e) {
              console.error(e);
            }
          }
          fetchData();
        },
        []
    )



  return(
    <>
     <Stack spacing='2em' alignItems='center'>
        <Typography sx={{color: '#b7e994'}} variant="h3">My Children</Typography>
          <Button color="secondary" onClick={() => {setOpenAddChildModal(true)}}>Add New Child</Button>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            color="secondary"
        >
          <div>
            <h3>my children</h3>
            {
              children && children.map((child) => {
                return(
                  <div>
                    <Button onClick={() => navigate(`/children-page/${child.child_id}`)}>{child.name}</Button>
                    <Button>Edit</Button>
                  </div>
                  
                )

              })
            }
          </div>
        
          
        </ButtonGroup>
        {/* <ChildSearch /> */}
        <NewChildModal open={openAddChildModal} setOpen={setOpenAddChildModal}/>
      </Stack>
      
    </>
  )
}

export default ChildrenPage;