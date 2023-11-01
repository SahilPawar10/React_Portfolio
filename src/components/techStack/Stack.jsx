import React from "react";
import "./stack.css";
import nodeJs from "../../assets/1_El82DHzQwuFxMIXzBzKjUA.png";
import reactJs from "../../assets/reactjs logo.png";
import JS from "../../assets/vscode-icons_file-type-js-official.png";
import HTML from "../../assets/vscode-icons_file-type-html.png";
import CSS from "../../assets/vscode-icons_file-type-css.png";
import api from "../../assets/api-icon.png";
import VSCODE from "../../assets/vscode-icons_file-type-vscode.png";
import Github from "../../assets/logos_git-icon.png";
import Bootstrap from "../../assets/logos_bootstrap.png";
import Sql from "../../assets/logos_bootstrap.png";
import MongoDB from "../../assets/MongoDB_Logo.svg.png";
import Sass from "../../assets/logos_sass.png";
import GIT from "../../assets/akar-icons_github-fill.png";
function Stack() {
  return (
    <div className="carosoul">
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={nodeJs} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={HTML} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={Bootstrap} height="90" width="90" alt="" />
          </div>
          <div class="slide">
            <img src={api} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={JS} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={reactJs} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={VSCODE} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={Github} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={Sql} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={Sass} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={nodeJs} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={MongoDB} height="100" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={CSS} height="100" width="100" alt="" />
          </div>
          <div class="slide">
            <img src={GIT} height="100" width="100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
