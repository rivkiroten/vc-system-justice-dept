const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

/* the functions called from the routes were not implemented (getConferenceDetails, getParticipants, addParticipant etc.). 
implementation would be in "controller" folder */

app.get("/conference/:conferenceId", async (req, res) => {
  const conferenceDetails = await getConferenceDetails(conferenceId);
  res.send(conferenceDetails);
});

app.get("/conference/:conferenceId/participants", async (req, res) => {
  /** getParticipants function: gets from the DB the participants
   * that are assiciated to that conferenceId, including participants details,
   * and returns detailed active participants
   */
  const participants = await getParticipants(conferenceId);
  res.send(participants);
});

/* this route will be called when a participant joins a conference */
app.post("/conference/:conferenceId/participant", async (req, res) => {
  const participant = req.body;
  // call a function that adds a participant (with details) to the DB, associated to a conferenceId
  res.send("participant added successfully");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
