import { useState } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ListPlugin from '@fullcalendar/list';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import Header from '../../components/header';
import { tokens } from '../../theme';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      setCurrentEvents((prevEvents) => [
        ...prevEvents,
        {
          id: `${selected.startStr}-${title}`,
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        },
      ]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`,
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          maxHeight="75vh"
          overflow="auto"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              ListPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: '1234', title: 'All Day Event', start: '2025-07-01' },
              { id: '4321', title: 'Timed Event', start: '2025-07-21' },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Calendar;
