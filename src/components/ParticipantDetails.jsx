import React from "react";

function DisplayAdmin({ conferenceDetails, participant }) {
    return (
      <div>
        <img src="path/to/iconIsrael.jpg"></img>
        <p>{conferenceDetails.committee}</p>
        <p>{`${participant.name} כבוד השופטת`}</p>
      </div>
    );
  }

function DisplayParticipant({ participant }) {
  return (
    <div>
      <p>{participant.role}</p>
      <p>{`${participant.title} ${participant.name}`}</p>
    </div>
  );
}

export default function ParticipantDetails({ participant, conferenceDetails }) {
  const isAdmin = !!(participant.role === "שופט"); // role might be a roleId rather than a string

  return (
    <div>
      {isAdmin ? (
        <DisplayAdmin
          conferenceDetails={conferenceDetails}
          participant={participant}
        />
      ) : (
        <DisplayParticipant participant={participant} />
      )}
      <label>
        Microphon:
        <input
          type="checkbox"
          name="microphon"
          value={participant?.microphoneStatus}
          disabled
        />
      </label>
    </div>
  );
}
