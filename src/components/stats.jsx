import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../css/stats.css";
const Stats = () => {
  return (
    <div id="m-stats">
      <h1 className="stats-head">Stats</h1>
      <div className="stats">
        <a href="https://github.com/sombir5?tab=repositories" title="Profile">
          <img
            src="https://github-readme-stats.vercel.app/api?username=sombir5&show_icons=true&custom_title=My%20GitHub%20Stats&border_radius=0"
            alt="Github Stats"
          />
        </a>
        <a href="https://github.com/sombir5?tab=repositories" title="Profile">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sombir5&border_radius=0"
            alt="sombir5"
          />
        </a>
      </div>
      <div className="calender">
        <GitHubCalendar username="sombir5" />
      </div>
    </div>
  );
};

export default Stats;
