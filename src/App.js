import React from "react";
import "./App.css";
import Scoreboard from "./Scoreboard";

function App() {
  const competitionName = "The Autonomous Ship Challenge";
  const competitionDescription =
    "A competition where innovative minds control ships through treacherous waters, all autonomously.";
  const taskDescription = "{Task description here}";
  const announcementMessage = "{Announcement message here}";

  return (
    <div className="App">
      <div className="content">
        <div className="info-box">
          <h1>Today's Competition:</h1>
          <h2>{competitionName}</h2>
          <p>{competitionDescription}</p>
          <h2>Task Information</h2>
          <p>{taskDescription}</p>
          <h2>Announcements</h2>
          <p>{announcementMessage}</p>
          <div>
            <img src="/images/segl_svart.png" width={"100%"} />
          </div>
        </div>
        <div className="scoreboard-box">
          <Scoreboard />
        </div>
      </div>
    </div>
  );
}

export default App;
