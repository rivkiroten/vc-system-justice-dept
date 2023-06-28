The project is developed in React - client side and Node.js - server side.

Root file: /src/App.js

All the client components are in /src/components

All server code is in server.js file

Important to note that in a "real" project, the client and server will be in separate folders (or even separate projects)
and also server will be built with an appropriate structure
(for ex. |- src/
            |- controllers/
            |- models/
            |- routes/
            |- index.js
            |- db.js )

in this case, since server code is very basic, I decided on a separate file with an appropriate name (server.js)
(applying the server functions whould be in the controller folder (getParticipants, getConferenceDetails etc.))

My point of departure is that the conference details are saved in the DB,
and also, when a participant joins the conference, it is immediately saved to the DB (as active), associated to the conference.

Also, please notice all the comments & ToDo's - כיווני חשיבה

Good Luck :)
