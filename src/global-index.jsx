import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/page.jsx";
import events from "./events.js";
import mathItUp from "./util/math-it-up.js";

$(document).ready(function() {
    ReactDOM.render(
        <Page/>,
        document.getElementById("map-container")
    );
    
    let modal = $("#myModal");
    
    events.on("show-modal", function(standard) {
        modal.find(".st-code").text(standard);
        modal.find(".st-main").html(mathItUp(ccmath[standard].text));
        modal.modal();
    });
});
