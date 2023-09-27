import { FormControl, InputLabel, TextField } from "@mui/material"
import { DateTimePicker} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const ChildSchedule = ({data, setData, index}) => {
  return(
    <div key={index}>
      <form>
        <FormControl fullWidth>
          <label htmlFor="start_time">Start Time</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker 
              renderInput={(props) => <input {...props}/>}
              value={data.start_time}
              onChange={(date) => {
                console.log('index is:', index)
                console.log('data is:', JSON.stringify(data))
                const newData = [...data]
                newData[index].start_time = date 
                setData(newData)
              }}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl fullWidth>
          <label htmlFor="end_time">End Time</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker 
              renderInput={(props) => <input {...props}/>}
              value={data.end_time}
              onChange={(date) => {
                const newData = [...data]
                newData[index].end_time = date
                setData(newData)
              }}
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
        onChange={(e) => {
          const newData = [...data]
          newData[index].type_activity = e.target.value
          setData(newData)
        }}
        />
        
      </form>
    </div>
  )
}

export default ChildSchedule