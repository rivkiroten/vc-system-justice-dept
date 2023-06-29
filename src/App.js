import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Participant from "./components/Participant";
import Sidebar from "./components/Sidebar";

const fetchConferenceDetails = async (conferenceId) => {
  const response = await fetch(`/conference/${conferenceId}`);
  const conferenceDetails = await response.json();
  return conferenceDetails;
};

export default function App() {
  const [participants, setParticipants] = useState({});
  const conferenceId = "1234"; // get from the system
  const currentParticipant = "111"; // get from the system
  const conferenceDetails = fetchConferenceDetails(conferenceId);

  /* get participants from server and set microphone status (+other devices status) in local state */
  /* ToDo: fix bug - the mic status of all users will restart on component render */
  useEffect(() => {
    const fetchParticipants = async () => {
      await fetch(`/conference/${conferenceId}/participants`)
        .then((response) => response.json())
        .then((data) => {
          const partisipantsWithStatus = data.map((partisipant) => {
            return {
              ...partisipant,
              microphoneStatus: false,
              /* ToDo: add here cameraStatus etc. */
            };
          });
          setParticipants(partisipantsWithStatus);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchParticipants();
  }, []);

  /* ToDo: make this function dynamic and adapt it for other devices (camera etc.) (by adding parameter of deviceType)  */
  const handleDeviceClick = (participantId) => {
    const updatedParticipants = [...participants];
    updatedParticipants[participantId].microphoneStatus =
      !participants[participantId].microphoneStatus;
    setParticipants(updatedParticipants);
  };

  /* !IMPORTANT: Re MuteAll possibility for Admin: assuming MuteAll is possible in Sidepar/מנהל דיון. this option is enabled for Admin only. 
  in addition, the screen attached to the task is of a regular participant, there might be an element "MuteAll" on an admin screen
  and if so, this function can be used for that element */
  const handleMuteAll = ({ participants }) => {
    /* set all participant.microphoneStatus to false, except for where participant.role === "שופט" */
    setParticipants(participants);
  };

  return (
    /* ToDo: arrainge all the bellow components in a grid/table */
    <div>
      <Header conferenceDetails={conferenceDetails} />
      <Sidebar
        participants={participants}
        currentParticipant={currentParticipant}
        handleMuteAll={handleMuteAll}
      />
      {participants.map((participant) => (
        <div key={participant.id}>
          <Participant
            participant={participant}
            conferenceDetails={conferenceDetails}
          />
        </div>
      ))}
      <button>שיתוף</button> {/* ToDo: add handle button */}
      <button onClick={() => handleDeviceClick(currentParticipant)}>
        מיקרופון
      </button>
      <button>מצלמה</button>
      {/* ToDo: make handleDeviceClick dynamic and use it here */}
    </div>
  );
}
