import React from "react";
import ParticipantDetails from "./ParticipantDetails";

// ToDo: arrainge elements in grid/table
export default function Participant({ participant, conferenceDetails }) {
  return (
    <div>
      <h1>{participant.role}</h1>
      <p>Image</p>
      <ParticipantDetails
        participant={participant}
        conferenceDetails={conferenceDetails}
      />
    </div>
  );
}
