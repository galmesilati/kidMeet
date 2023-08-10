import { ButtonGroup, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import * as React from 'react';

const ChildrenPage = () => {
  return(
    <>
     <Stack spacing='2em' alignItems='center'>
        <Typography sx={{color: '#b7e994'}} variant="h3">My Children</Typography>
          <Button color="secondary">Add New Child</Button>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            color="secondary"
        >
          <Button>Child name</Button>
          <Button>Edit</Button>
        </ButtonGroup>
      </Stack>
      
    </>
  )
}

export default ChildrenPage;