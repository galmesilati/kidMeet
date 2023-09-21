import { FormControl, InputLabel, TextField } from "@mui/material"
import { DateTimePicker} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const ChildSchedule = ({data, setData}) => {
  return(
    <>
    <div>
      <form>
        <FormControl fullWidth>
          <label htmlFor="start_time">Start Time</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker 
              renderInput={(props) => <input {...props}/>}
              value={data.start_time}
              onChange={(date) => setData({...data, start_time: date})}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl fullWidth>
          <label htmlFor="end_time">End Time</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker 
              renderInput={(props) => <input {...props}/>}
              value={data.end_time}
              onChange={(date) => setData({...data, end_time: date})}
            />
          </LocalizationProvider>
        </FormControl>

        <TextField 
        autoFocus
        margin="dense"
        id="type_activity"
        label="Activity"
        type="text"
        fullWidth
        variant="standard"
        value={data.type_activity}
        onChange={(e) => setData({ ...data, type_activity: e.target.value })}
        />
        
      </form>

    
    {/* <input value={data.day} onChange={(event) => setData({...data, day:event.target.value})}/> */}
    <p>
      Schedule
    </p>
    </div>
    </>
  )
}

export default ChildSchedule