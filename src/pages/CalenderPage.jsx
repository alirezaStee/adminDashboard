import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import supabase from "../config/supabaseClinet";
import DeletModal from "../components/modal/DeletModal";

import ErrorAlert from "../components/alert/ErrorAlert";
import LoadingAlert from "../components/alert/LoadingAlert";
import AddNewEventModal from "../components/modal/AddNewEventModal";



export default function CalenderPage() {
  // const [currentEvents, setCurrentEvents] = useState([]);
  const [events, setEvents] = useState(null);

  // handel loading modal
  const [openLoadingAlert, setOpenLoadingAlert] = useState(false);

  // handel delete modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isLoadingForDeleteModal, setIsLoadingForDeleteModal] = useState(false);

  // handel new event modal
  const [selectedDate, setSelectedDate] = useState(null);
  const [isShowNewEventModal, setIsShowNewEventModall] = useState(false);
  const [isLoadingNewEventModal, setIsLoadingForNewEventModal] =
    useState(false);

  // handel error alert
  const [isErrorAlertShow, setIsErrorAlertShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // function get data from server
  const fetchData = async () => {
    setOpenLoadingAlert(true);
    let { data: Calender1, error } = await supabase
      .from("Calender1")
      .select("*");
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    } else {
      setEvents(Calender1);
    }

    setOpenLoadingAlert(false);
  };

  // getting data from server
  useEffect(() => {
    fetchData();
  }, []);

  // handel add new enevnt
  const handleDateSelect = (selectInfo) => {
    setIsShowNewEventModall(true);
    setSelectedDate(selectInfo);
  };
  const handleEventAdd = async (newEvent) => {
    setIsLoadingForNewEventModal(true);
    const { data, error } = await supabase
      .from("Calender1")
      .insert([newEvent])
      .select();
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    } else {
      fetchData();
    }
    setIsShowNewEventModall(false);
    setIsLoadingForNewEventModal(false);
  };

  // const handleEvents = (events) => {
  //   setCurrentEvents(events);
  // };

  // handel change enevnt
  const handleEventChange = async (selectInfo) => {
    console.log(selectInfo);
    console.log({
      start: selectInfo.event.startStr,
      end: selectInfo.event.endStr,
      allDay: selectInfo.event.allDay,
      id: selectInfo.event.id,
    });
    const { data, error } = await supabase
      .from("Calender1")
      .update({
        start: selectInfo.event.startStr,
        end: selectInfo.event.endStr,
        allDay: selectInfo.event.allDay,
      })
      .eq("id", selectInfo.event.id)
      .select();
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    } else {
      fetchData();
    }
  };

  // handel delete enevnt
  const handleEventClick = (clickInfo) => {
    setIsShowDeleteModal(true);
    setSelectedEvent(clickInfo.event);
  };
  const handleEventRemove = async (eventToDelete) => {
    console.log(eventToDelete)
    setIsLoadingForDeleteModal(true);
    const { error } = await supabase
      .from("Calender1")
      .delete()
      .eq("id", eventToDelete.id);
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    } else {
      fetchData();
    }
    setIsShowDeleteModal(false);
    setIsLoadingForDeleteModal(false);
  };
  
  return (
    <div className="demo-app bg-white p-2 rounded-md shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)]">
      <div className="demo-app-main">
        <LoadingAlert isAlertShow={openLoadingAlert}></LoadingAlert>

        <DeletModal
          isShow={isShowDeleteModal}
          title={'event'}
          onClose={() => {
            setIsShowDeleteModal(false);
          }}
          confirm={() => {
            handleEventRemove(selectedEvent);
          }}
          isLoading={isLoadingForDeleteModal}
        ></DeletModal>

        <AddNewEventModal
          isShow={isShowNewEventModal}
          onClose={() => setIsShowNewEventModall(false)}
          confirm={handleEventAdd}
          data={selectedDate}
          isLoading={isLoadingNewEventModal}
        ></AddNewEventModal>

        <ErrorAlert
          errorMessage={errorMessage}
          isErrorAlertShow={isErrorAlertShow}
          onClose={() => {
            setIsErrorAlertShow(false);
          }}
        ></ErrorAlert>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={events}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          eventAdd={handleEventAdd}
          eventChange={handleEventChange}
          allDaySlot={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      {eventInfo.timeText && <b>{eventInfo.timeText}</b>}
      <i>{eventInfo.event.title}</i>
    </>
  );
}
