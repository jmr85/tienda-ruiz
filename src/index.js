import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h2 class="ui center aligned icon header">
        <i class="circular users icon"></i>
        Curso de React
      </h2>
      <div class="ui inverted segment">
        <div class="ui inverted relaxed divided list">
          <div class="item">
            <div class="content">
              <div class="header">Uno</div>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Dos</div>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Tres</div>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <div class="header">Cuatro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
