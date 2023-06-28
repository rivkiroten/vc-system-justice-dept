import React from "react";
// ToDo: include some icons library

export default function Sidebar({ participants, currentParticipant, handleMuteAll}) {
  const currentParticipantDetails = participants.find(
    ({ id }) => id === currentParticipant
  ); // might have name rather than id

  const isAdmin = !!(currentParticipantDetails.role === "שופט"); // role might be a roleId rather than a string

  return (
    <div class="sidebar">
      <img src="path/to/iconIsrael.jpg"></img>
      {/* ToDo: popup to display participants details (from participants prop) */}
      <a href="#">{`אנשים ${participants.length}`}</a>
      {/* ToDo: popup to display conference details, will need to receive the details as a prop in this component */}
      <a href="#">פרטי דיון</a>
      {/* Assuming this will open a dropdown with options allowed only for Admin, enable it for admin only.
      For example: option to "Mute All". pass the handleMuteAll function*/}
      <a href="#">מנהל דיון</a>
      {/* ToDo: popup for Additional settings and options */}
      <a href="#">הגדרות</a>
      <button>יציאה מהדיון</button> {/* ToDo: add function to make participant inactive (API to server) */}
    </div>
  );
}
