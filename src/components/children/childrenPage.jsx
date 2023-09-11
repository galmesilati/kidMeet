import { ButtonGroup, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import * as React from 'react';
import * as urls from '../../infra/urls'
import axios from "axios";
import ChildSearch from "./childSearch";
import NewChildModal from "./newChildModal";
import { useNavigate } from "react-router-dom";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import AddIcon from '@mui/icons-material/Add';

const ChildrenPage = () => {

  const [children, setChildren] = React.useState([])

  const [openAddChildModal, setOpenAddChildModal] = React.useState(false);

  const [editingChild, setEditingChild] = React.useState(null)

  const navigate = useNavigate()

  const handleEditClick = (child) => {
    setEditingChild(child)
    setOpenAddChildModal(true)

  }


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
          <Button sx={{width: '100%'}} color="secondary" onClick={() => {setOpenAddChildModal(true)}}>
            <Stack direction={'row'} spacing={'2%'}>
              <Typography sx={{width: '10em'}} >
                Add New Child   
              </Typography>  
              <AddIcon /> 
            </Stack>
          </Button>
          <div>
            <Stack direction={"column"} spacing={"3%"} sx={{width: '100%'}}>
            {
              children && children.map((child) => {
                return(
                  <Stack direction={"row"} spacing={"2%"} width={'100%'} justifyContent={"space-between"}>
                    <Button  sx={{width: '100%'}} color="secondary"  onClick={() => navigate(`/children-page/${child.child_id}`)}>{child.name}</Button>
                    <Button  color="secondary"  onClick={() => handleEditClick(child)}>
                      <EditTwoToneIcon />
                    </Button>
                  </Stack>
                )

              })
            }
            </Stack>
          </div>
        
        <NewChildModal
          open={openAddChildModal}
          setOpen={setOpenAddChildModal}
          editingChild={editingChild}
          setEditingChild={setEditingChild}/>
      </Stack>
      
    </>
  )
}

export default ChildrenPage;