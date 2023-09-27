import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { CHILD_URL, INTERESTS_URL } from '../../infra/urls';
import { Box, Checkbox, Fade, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, useThemeProps } from '@mui/material';
import { UserContext } from '../../context/userContext';
import * as urls from '../../infra/urls'
import ChildSchedule from './childSchedule';
import dayjs from 'dayjs';
import { SetNotificationContext } from '../../context/notificationContext';



export default function NewChildModal({open, setOpen, editingChild, setEditingChild}) {

  const user = React.useContext(UserContext)
  const setNotification = React.useContext(SetNotificationContext)

  const [interests, setInterests] = React.useState([]);
  const [interestsMap, setInterestsMap] = React.useState({});
  const [selectedInterests, setSelectedInterests] = React.useState([]);
  const [scheduleOpen, setScheduleOpen] = React.useState(false)

  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState("")
  const [kindergarten, setKindergarten] = React.useState("")
  const [school, setSchool] = React.useState("")
  const [classroom, setClassroom] = React.useState("")
  const [scheduleCount, setScheduleCount] = React.useState(1)

  const [scheduleData, setScheduleData] = React.useState([
    {
    start_time: null,
    end_time: null,
    type_activity: '',
  }, ])


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedInterests(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const createInterests = () => {

    const filteredInterests = interests.filter(interest => selectedInterests.includes(interest.name))
    const interestsIdArray = filteredInterests.map(interestobj => interestobj.interest_id)

    return(
      interestsIdArray
    )
  }

  React.useEffect(() => {
    async function fetchInterests() {
      try {
        const response = await axios.get(INTERESTS_URL)
        setInterests(response.data.results)
        const intMap = {}
        response.data.results.forEach(element => {
          intMap[element.interest_id] = element.name
        });
        setInterestsMap(intMap)
      } catch (error) {
        console.log('Error', error)
      }
    }
    fetchInterests()

    if (editingChild) {
      setName(editingChild.name)
      setAge(editingChild.age)
      setKindergarten(editingChild.kindergarten)
      setSchool(editingChild.school)
      setClassroom(editingChild.classroom)
      setSelectedInterests(
        editingChild.interests.map((interestId) => interestsMap[interestId])
      )
    }
  }, [editingChild])


  const createChildSchedule = async (childId) => {
    try {
      for (const schedule of scheduleData) {
        console.log('schedule', JSON.stringify(schedule))
        console.log('scheduleData', JSON.stringify(scheduleData))
        const formattedData = {
          child: childId,
          start_time: dayjs(schedule.start_time).format(),
          end_time: dayjs(schedule.end_time).format(),
          type_activity: schedule.type_activity
        }
      console.log('formatted data', JSON.stringify(formattedData))
      const scheduleResponse = await axios.post(urls.SCHEDULE_URL, formattedData)

      if (scheduleResponse.status === 200) {
        console.log('Schedule created successfully:', scheduleResponse.data)
      } else {
        console.error('Error', scheduleResponse.data)
      }
    }
    } catch (e) {
      console.error('Error', e)
    }
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();

  const childData = {
    name: name,
    age: parseFloat(age),
    kindergarten: kindergarten,
    school: school,
    classroom: classroom,
    user: user.user_id,
    interests: createInterests()
  }

  console.log('childData', childData)

  try{
    if (editingChild) {
      const response = await axios.patch(
        `${urls.CHILD_URL}${editingChild.child_id}/`,
        childData
      )
      console.log('child updated', response.data)

      await createChildSchedule(response.data.child_id)

      setNotification({
        open: true,
        massage: 'Child updated successfully'
      })
    } else {
      const response = await axios.post(CHILD_URL, childData);
      console.log("child created", response.data)
      setNotification({
        open: true,
        massage: "Child created successfully"
      })

      await createChildSchedule(response.data.child_id)
    }
    handleClose()
  } catch (error) {
    console.log('Error', error);
    setNotification({
      open: true,
      massage: "Error creating/editing the child. Please try again."
    });
  }
  }
 

  const handleClose = () => {
    setOpen(false);
    setEditingChild(null)

    setName("")
    setAge("")
    setKindergarten("")
    setSchool("")
    setClassroom("")
    setSelectedInterests([])
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
            type="number"
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
        <InputLabel id="demo-multiple-checkbox-label">Select interests</InputLabel>
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
            <MenuItem key={interest.interest_id} value={interest.name}>
              <Checkbox checked={selectedInterests.indexOf(interest.name) > -1} />
              <ListItemText primary={interest.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </form>

            <Button onClick={() => setScheduleOpen(true)}>Add Schedule</Button>
            <p>activities count: {scheduleCount}</p>
            <Button onClick={() => { 
              setScheduleCount(prevCount => prevCount+1)
              const newScehduleData = [...scheduleData]
              newScehduleData.push({
                start_time: null,
                end_time: null,
                type_activity: '',
              })
              setScheduleData(newScehduleData)
              }}>+</Button>
            <Button onClick={() => setScheduleCount(prevCount => prevCount-1)}>-</Button>
            <Box display={scheduleOpen ? 'flex' : 'none'}>
              {
                Array.from({length: scheduleCount}).map((_, index) => {return <ChildSchedule index={index} data={scheduleData} setData={setScheduleData}/>})
                // [1,2,3].map((_, index) => {return <ChildSchedule data={scheduleData} setData={setScheduleData}/>})
              }
            </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
