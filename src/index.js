import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  return (
    <div id="nueva">
      <h2 class="ui center aligned icon header">
        <i class="circular users icon"></i>
        Curso de React
      </h2>
      <div class="ui inverted segment">
        <div class="ui inverted relaxed divided list">
          <div class="item">
            <div class="content">
              <div class="header">Uno</div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Dos</div>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Tres</div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Cuatro</div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
