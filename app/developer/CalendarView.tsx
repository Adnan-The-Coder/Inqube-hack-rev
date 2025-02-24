import React, { useState } from 'react';
import { FiSettings, FiChevronLeft, FiChevronRight, FiX, FiMapPin } from 'react-icons/fi';
import { Users } from 'lucide-react';

const CalendarView = () => {
  // State for current date navigation
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 25)); // Feb 25, 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 1, 25)); // initially today
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    startTime: '09:00',
    endTime: '10:00',
    location: '',
    description: '',
    participants: []
  });
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', or 'day'
  
  // Sample upcoming events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Team Stand-up',
      date: 'February 25, 2025 • 9:00 AM',
      dateObj: new Date(2025, 1, 25, 9, 0),
      participants: 8,
      location: 'Meeting Room A',
      description: 'Weekly team sync to discuss progress and blockers'
    },
    {
      id: 2,
      title: 'Client Presentation',
      date: 'February 28, 2025 • 2:00 PM',
      dateObj: new Date(2025, 1, 28, 14, 0),
      participants: 12,
      location: 'Conference Hall',
      description: 'Present Q1 results to the client'
    },
    {
      id: 3,
      title: 'Project Deadline',
      date: 'March 3, 2025 • All day',
      dateObj: new Date(2025, 2, 3),
      participants: 5,
      location: 'Remote',
      description: 'Final submission for the blockchain integration project'
    }
  ]);
  
  // Function to navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  // Function to navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  // Function to get current month name and year
  const getCurrentMonthYear = () => {
    return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  // Function to get days in the current month with padding for the grid
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Array to hold all days we'll display
    const days = [];
    
    // Add empty slots for days from previous month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push({
        date: new Date(year, month, -firstDay.getDay() + i + 1),
        isCurrentMonth: false
      });
    }
    
    // Add days from current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push({
        date: new Date(year, month, day),
        isCurrentMonth: true
      });
    }
    
    // Add empty slots for days from next month to complete the grid
    const remainingSlots = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }
    
    return days;
  };
  
  // Function to check if a date has events
  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.dateObj.getDate() === date.getDate() &&
      event.dateObj.getMonth() === date.getMonth() &&
      event.dateObj.getFullYear() === date.getFullYear()
    );
  };
  
  // Function to check if a date is today
  const isToday = (date: Date) => {
    const today = new Date(2025, 1, 25); // Hardcoded "today" as Feb 25, 2025

    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };
  
  // Function to handle clicking on a day
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    
    // If we're in day view, we might want to show events for the selected day
    if (viewMode === 'day') {
      // Maybe fetch events for that day or update UI accordingly
    }
  };
  
  // Function to handle opening the new event modal
  const handleNewEvent = () => {
    // Pre-fill the date with selected date
    setEventForm({
      ...eventForm,
      date: selectedDate.toISOString().split('T')[0]
    });
    setShowEventModal(true);
  };
  
  // Function to handle event form input changes
  const handleEventFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventForm({
      ...eventForm,
      [name]: value
    });
  };
  
  // Function to handle adding a new event
  const handleAddEvent = () => {
    // Parse the date and time from the form
    const [year, month, day] = eventForm.date.split('-').map(Number);
    const [startHour, startMinute] = eventForm.startTime.split(':').map(Number);
    
    // Create a new event object
    const newEvent = {
      id: events.length + 1,
      title: eventForm.title,
      date: `${new Date(year, month - 1, day).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • ${eventForm.startTime}`,
      dateObj: new Date(year, month - 1, day, startHour, startMinute),
      participants: eventForm.participants.length || 0,
      location: eventForm.location,
      description: eventForm.description
    };
    
    // Add the new event to the events array
    setEvents([...events, newEvent]);
    
    // Close the modal and reset the form
    setShowEventModal(false);
    setEventForm({
      title: '',
      date: '',
      startTime: '09:00',
      endTime: '10:00',
      location: '',
      description: '',
      participants: []
    });
  };
  
  // Function to handle deleting an event
  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };
  
  // Get upcoming events (sorted by date)
  const getUpcomingEvents = () => {
    const today = new Date(2025, 1, 25); // Feb 25, 2025

    return events
      .filter(event => event.dateObj >= today)
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())
      .slice(0, 6); // Limit to 6 upcoming events
  };
  
  // Switch between view modes (month, week, day)
  const switchViewMode = (mode: string) => {
    setViewMode(mode);
  };
  
  // Render the calendar grid based on the current view mode
  const renderCalendarGrid = () => {
    const days = getDaysInMonth();
    
    return (
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="p-2 text-center text-sm font-medium text-gray-400">
            {day}
          </div>
        ))}
        {days.map((day, index) => {
          const dateEvents = getEventsForDate(day.date);
          const isSelectedDate = selectedDate && 
            day.date.getDate() === selectedDate.getDate() &&
            day.date.getMonth() === selectedDate.getMonth() &&
            day.date.getFullYear() === selectedDate.getFullYear();
          
          return (
            <div 
              key={index}
              onClick={() => handleDateClick(day.date)}
              className={`aspect-square cursor-pointer rounded-lg border p-2
                ${isToday(day.date) ? 'border-[#76b900] bg-[#1e1e1e]' : isSelectedDate ? 'border-blue-500 bg-[#1e1e1e]' : 'border-gray-700 hover:bg-[#1e1e1e]'}
                ${!day.isCurrentMonth ? 'opacity-40' : ''}`}
            >
              <div className="flex h-full flex-col">
                <span className={`text-sm ${isToday(day.date) ? 'font-bold text-[#76b900]' : isSelectedDate ? 'font-bold text-blue-400' : 'text-gray-300'}`}>
                  {day.date.getDate()}
                </span>
                {dateEvents.length > 0 && (
                  <div className="mt-auto">
                    {dateEvents.slice(0, 2).map((event, eventIndex) => (
                      <div key={eventIndex} className="my-1 truncate rounded bg-[#76b900] bg-opacity-20 p-1 text-xs text-[#76b900]">
                        {event.title}
                      </div>
                    ))}
                    {dateEvents.length > 2 && (
                      <div className="text-center text-xs text-gray-400">+{dateEvents.length - 2} more</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-wide text-white lg:text-4xl">Calendar</h1>
        <p className="mt-2 text-gray-400">Manage your meetings and deadlines</p>
      </div>
      <div className="mb-4 flex items-center space-x-2">
        <button 
          onClick={() => switchViewMode('month')} 
          className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'month' ? 'bg-[#76b900] text-black' : 'bg-[#1e1e1e] text-white hover:bg-[#2e2e2e]'}`}
        >
          Month
        </button>
        <button 
          onClick={() => switchViewMode('week')} 
          className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'week' ? 'bg-[#76b900] text-black' : 'bg-[#1e1e1e] text-white hover:bg-[#2e2e2e]'}`}
        >
          Week
        </button>
        <button 
          onClick={() => switchViewMode('day')} 
          className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'day' ? 'bg-[#76b900] text-black' : 'bg-[#1e1e1e] text-white hover:bg-[#2e2e2e]'}`}
        >
          Day
        </button>
      </div>
      <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={goToPreviousMonth} className="mr-2 rounded-lg bg-[#1e1e1e] p-2 hover:bg-[#2e2e2e]">
              <FiChevronLeft size={20} />
            </button>
            <h3 className="text-xl font-bold">{getCurrentMonthYear()}</h3>
            <button onClick={goToNextMonth} className="ml-2 rounded-lg bg-[#1e1e1e] p-2 hover:bg-[#2e2e2e]">
              <FiChevronRight size={20} />
            </button>
          </div>
          <div className="flex space-x-2">
            <button 
              className="flex items-center rounded-lg bg-[#76b900] p-2 text-sm text-black hover:bg-[#6aa800]"
              onClick={handleNewEvent}
            >
              <span className="mr-1">+</span>Event
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {renderCalendarGrid()}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold">Upcoming Events</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {getUpcomingEvents().map(event => (
            <div key={event.id} className="rounded-xl border border-gray-600 bg-[#242424] p-4">
              <div className="flex justify-between">
                <h4 className="text-lg font-medium">{event.title}</h4>
                <button 
                  className="text-gray-400 hover:text-white" 
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <FiX size={18} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-400">{event.date}</p>
              {event.location && (
                <p className="mt-1 flex items-center text-sm text-gray-400">
                  <FiMapPin size={14} className="mr-1" /> {event.location}
                </p>
              )}
              {event.description && (
                <p className="mt-3 text-sm text-gray-300">{event.description}</p>
              )}
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center text-sm text-gray-400">
                  <Users size={16} className="mr-1" /> {event.participants} participants
                </span>
                <button className="rounded-lg bg-[#1e1e1e] p-2 hover:bg-[#2e2e2e]">
                  <FiSettings size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="w-full max-w-2xl rounded-xl border border-gray-600 bg-[#242424] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Add New Event</h3>
              <button className="text-gray-400 hover:text-white" onClick={() => setShowEventModal(false)}>
                <FiX size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-medium">Event Title</label>
                <input
            type="text"
            name="title"
            value={eventForm.title}
            onChange={handleEventFormChange}
            placeholder="Enter event title"
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Date</label>
                <input
            type="date"
            name="date"
            value={eventForm.date}
            onChange={handleEventFormChange}
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Start Time</label>
                <input
            type="time"
            name="startTime"
            value={eventForm.startTime}
            onChange={handleEventFormChange}
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">End Time</label>
                <input
            type="time"
            name="endTime"
            value={eventForm.endTime}
            onChange={handleEventFormChange}
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Location</label>
                <input
            type="text"
            name="location"
            value={eventForm.location}
            onChange={handleEventFormChange}
            placeholder="Enter location"
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Participants</label>
                <input
            type="number"
            name="participants"
            value={eventForm.participants}
            onChange={handleEventFormChange}
            min="0"
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-medium">Description</label>
                <textarea
            name="description"
            value={eventForm.description}
            onChange={handleEventFormChange}
            placeholder="Enter event description"
            rows={2}
            className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
              </div>
              <div className="col-span-2 flex justify-end space-x-4 pt-4">
                <button 
            className="rounded-lg bg-gray-600 px-4 py-2 font-medium text-white hover:bg-gray-700"
            onClick={() => setShowEventModal(false)}
          >
                  Cancel
                </button>
                <button 
            className="rounded-lg bg-[#76b900] px-4 py-2 font-medium text-black"
            onClick={handleAddEvent}
          >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
)}

    </>
  );
};

export default CalendarView;