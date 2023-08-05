import { ButtonGroup } from "@mui/material";
import Button from '@mui/material/Button';
import * as React from 'react';

const ChildrenPage = () => {
  return(
    <>
      <Button color="secondary">Add New Child</Button>
      <p>My Children</p>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          color="secondary"
      >
        <Button>Child name</Button>
        <Button>Edit</Button>
      </ButtonGroup>
    </>
  )
}

export default ChildrenPage;