import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { CHILD_URL, INTERESTS_URL } from '../../infra/urls';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';


export default function NewChildModal({open, setOpen}) {

  const [interests, setInterests] = React.useState([]);
  const [selectedInterests, setSelectedInterests] = React.useState([]);

  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState("")
  const [kindergarten, setKindergarten] = React.useState("")
  const [school, setSchool] = React.useState("")
  const [classroom, setClassroom] = React.useState("")


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedInterests(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  React.useEffect(() => {
    async function fetchInterests() {
      try {
        const response = await axios.get(INTERESTS_URL)
        setInterests(response.data.results)
      } catch (error) {
        console.log('Error', error)
      }
    }
    fetchInterests()
  }, [])



  const handleSubmit = async (event) => {
    event.preventDefault();

  const childData = {
    name: name,
    age: age,
    kindergarten: kindergarten,
    school: school,
    classroom: classroom,
    interests: interests
  }

  console.log('childData', childData)

  try{
    const response = await axios.post(CHILD_URL, childData);
    console.log("response", response)
  } catch (error) {
    console.log('Error', error);
  }

  }
 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Child</DialogTitle>
        <DialogContent>
          <form id='childForm'>
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="float"
            fullWidth
            variant="standard"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="kindergarten"
            label="kindergarten"
            type="text"
            fullWidth
            variant="standard"
            value={kindergarten}
            onChange={(e) => setKindergarten(e.target.value)}
          />
          <TextField 
            margin="dense"
            id="school"
            label="school"
            type="text"
            fullWidth
            variant="standard"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="classroom"
            label="classroom"
            type="text"
            fullWidth
            variant="standard"
            value={classroom}
            onChange={(e) => setClassroom(e.target.value)}
          />

        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Sselect interests</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedInterests}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {interests.map((interest) => (
            <MenuItem key={interest.name} value={interest.name}>
              <Checkbox checked={selectedInterests.indexOf(interest.name) > -1} />
              <ListItemText primary={interest.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
