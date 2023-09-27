import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CHILD_SCHEDULE_URL, SCHEDULE_URL } from '../../infra/urls'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material'
import interactionPlugin from '@fullcalendar/interaction';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function CalendarPage() {

  const {childId} = useParams()
  const [scheduleData, setScheduleData] = useState([])
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({})

  const handleOpen = (infoData) => {
    setInfo(infoData)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const parseDate = (date) => {
    const hour = date.getHours();
    let minutes = date.getMinutes()
    if (['0', '1', '2', '3', '4' , '5','6','7','8','9'].includes(minutes.toString())) minutes += '0'
    return `${hour}:${minutes}`


  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('child id is:', childId)
        const response = await axios.get(`${SCHEDULE_URL}${childId}${CHILD_SCHEDULE_URL}`)
        console.log('response', response.data)
        setScheduleData(response.data)
      } catch (e) {
        console.error('Error', e)
      }
    }
    fetchData()
  }, [childId])

  const generateRecurringEvents = (item) => {
    const startDate = new Date(item.start_time);
    const endDate = new Date(item.end_time);
    const recurringEvents = [];
  
    let currentStartDate = new Date(startDate);
    let currentEndDate = new Date(endDate);
  
    while (currentStartDate <= new Date() && currentEndDate <= new Date('2023-12-31')) {
      currentStartDate.setDate(currentStartDate.getDate() + 7);
      currentEndDate.setDate(currentEndDate.getDate() + 7);
    }
  
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayOfWeekIndex = daysOfWeek.indexOf(item.day_of_week.toLowerCase());
  
    while (currentStartDate <= new Date(new Date().getFullYear(), 11, 31)) {
      if (currentStartDate.getDay() === dayOfWeekIndex) {
        recurringEvents.push({
          title: item.type_activity,
          start: new Date(currentStartDate),
          end: new Date(currentEndDate)
        });
      }
  
      currentStartDate.setDate(currentStartDate.getDate() + 1);
      currentEndDate.setDate(currentEndDate.getDate() + 1);
    }
  
    return recurringEvents;
  }

  
  const events = scheduleData.flatMap(item => generateRecurringEvents(item))

  
  // const events = scheduleData.map(item => ({
  //   title: item.type_activity,
  //   start: new Date(item.start_time),
  //   end: new Date(item.end_time)
  // }))

  return(
    <>
    <div style={{ width: '100%', height: '100vh' }}>
    <Typography color='primary' variant="h3" textAlign={'center'}>Schedule</Typography>
    <br />
    <br />
      <FullCalendar 
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventClick={handleOpen}
        height='100%'
      />
      
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Activity Details
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Type activity: {info?.event?.title}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Start Time: {info?.event?.start && parseDate(info?.event?.start)}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    End Time: {info?.event?.end && parseDate(info?.event?.end)}
    </Typography>

  </Box>
</Modal>
</div>

    </>
  )
}