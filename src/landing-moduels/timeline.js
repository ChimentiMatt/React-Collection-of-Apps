import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";

import { IoIosFlag } from "react-icons/io";
import Header from "./header.js";

export default function TimelineLanding() {
    const [answered, setAnswered] = useState(false)
    useEffect(() =>{
        TimelineFunc()
    })
    const histEvents = [
      "First Web Page",
      "World War II",
      "Founding of Jamestown",
    ];
  
    // Store listitems
    const listItems = [];
  
    let counter = 0
  
    let dragStartIndex;
  
    useEffect(() => createList(), []);

      function addEventListeners() {
        const draggables = document.querySelectorAll(".draggable");
        const dragListItems = document.querySelectorAll(".draggable-list li");
    
        draggables.forEach((draggable) => {
          draggable.addEventListener("dragstart", dragStart);
        });
    
        dragListItems.forEach((item) => {
          item.addEventListener("dragover", dragOver);
          item.addEventListener("drop", dragDrop);
          item.addEventListener("dragenter", dragEnter);
          item.addEventListener("dragleave", dragLeave);
        });
      }
    function createList() {
  
      [...histEvents]
  
        //randomizes the list on load. Sort continues to randomize
        .map((a) => ({ value: a, sort: Math.random() }))
        // sort becomes basically the id
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        //------
  
        .forEach((event, index) => {
          if (counter <= histEvents.length){
            counter += 1
            console.log(histEvents.length, 'len')
            console.log(counter, 'counter')
          const listItem = document.createElement("li");
          listItem.setAttribute("data-index", index);
  
          listItem.innerHTML = `
             
              <div class="draggable" draggable="true" >
                <p class="event-name">${event}</p>
  
              </div>
            `;
  
          listItems.push(listItem);
          const draggable_list = document.getElementById("draggable-list");
          draggable_list.appendChild(listItem);
          }
          else {
  
          }
        });
  
      addEventListeners();
    }

    function dragStart() {
      // console.log('Event: ', 'dragstart');
      dragStartIndex = +this.closest("li").getAttribute("data-index");
    }
  
    function dragEnter() {
      // console.log('Event: ', 'dragenter');
      this.classList.add("over");
    }
    function dragLeave() {
      // console.log('Event: ', 'dragleave');
      this.classList.remove("over");
    }
    function dragOver(e) {
      // console.log('Event: ', 'dragover');
      e.preventDefault();
    }
    function dragDrop() {
      // console.log('Event: ', 'drop');
      const dragEndIndex = +this.getAttribute("data-index");
      swapItems(dragStartIndex, dragEndIndex);
  
      this.classList.remove("over");
    }
  
    // Swap list items that are drag and drop
    function swapItems(fromIndex, toIndex) {
      const itemOne = listItems[fromIndex].querySelector(".draggable");
      const itemTwo = listItems[toIndex].querySelector(".draggable");
  
      listItems[fromIndex].appendChild(itemTwo);
      listItems[toIndex].appendChild(itemOne);
    }



    function handleClick2() {
      if (answered == false) { 
        checkOrder();
        setAnswered(true)
        document.getElementById('check').innerHTML = "Play again?"
      }
      else{
        window.location.reload();
      }
    }
    function Dates() {
      const dates = [
        "1991",
        "1941",
        "1606",
      ];
      return (
        <>
          <ul className="datesUl">
            {dates.map((date) => (
              <p>{date}</p>
            ))}
          </ul>
        </>
      );
    }
    function Markers() {
      const [flagColor, setFlagColor] = useState('white')
      const [flagBackColor, setBackColor] = useState('rgba(38, 97, 129, 0.767)')
      let counter = 0
      const markers = [
        {id: "1"},
        {id: "2"},
        {id: "3"},
      
      ];
      return (
        <>
          <ul className="markedUl">
            {markers.map((num, index) => (
             
            
              <p
                id={num.id}
                // id="TAH-marker-list-btn"
                onClick={() => {
                  let BR = document.getElementById(num.id).style.backgroundColor 

                  if (counter % 2  ){
                    document.getElementById(num.id).style.backgroundColor = 'white'
                    console.log('test1')
                    counter += 1
                  }
                  else {
                    document.getElementById(num.id).style.backgroundColor = flagBackColor          
                    console.log('test2')
                    counter += 1
                      }

                  // if (document.getElementById(num.id).style.backgroundColor ==
                  // 'white'){
                  //   document.getElementById(num.id).style.backgroundColor =
                  //   flagBackColor
                  //   document.getElementById(num.id).style.color =
                  //   'flagColor'
                  //   counter += 1
                  // } else { 
                  // document.getElementById(num.id).style.backgroundColor =
                  // 'white'
                  // document.getElementById(num.id).style.color =
                  // 'black'
                  // counter += 1
                  // }
                }
              }
              >
                        <IoIosFlag />
              </p>
            ))}
          </ul>
        </>
      );
    }
    


  // Check the order of list items

  function checkOrder() {

    listItems.forEach((listItem, index) => {
      const tevent = listItem.querySelector(".draggable").innerText.trim();
      if (tevent !== histEvents[index]) {
        listItem.classList.add("wrong");
      } else {

        listItem.classList.remove("wrong");
        listItem.classList.add("right");
        // disables game to stop incorrect right and wrong values on further drags
        // document.getElementById('TAH-z-index-trick').style.zIndex = "0";

      }
    });
  }

    
    function TimelineFunc() {
        // Greensock Animations
        var tl = gsap.timeline({});
        var tl2 = gsap.timeline({ repeat: -1 });
        tl.to("#Timeline-h1", { delay: 0.2, duration: 1, y: -100 });
        tl.to("#Timeline-Des", { duration: 1, x: 1000 });
        tl.to("#Timeline-Animation-Container", { duration: 0, opacity: 1 }).add(
        Animation2
        );
        gsap.to("#Timeline-Link", { delay: 2.5, duration: 1, opacity: 1 });

        function Animation2() {
        tl2.to("#Timeline-Animation-Container", { opacity: 1 });
        tl2.to("#Timeline-Animation-Container", { delay: 2.2, duration: 1 });
        tl2.to("#Timeline-Animation-Answers", { y: -65 });
        tl2.to("#Roe", { backgroundColor: "rgba(255, 0, 0, 0.5)" });
        tl2.to("#Nixon", { backgroundColor: "white" });
        tl2.to("#Timeline-Animation-Answers", { delay: 1, y: -130 });
        tl2.to("#WW2", { backgroundColor: "rgba(255, 0, 0, 0.5)" });
        tl2.to("#Roe", { backgroundColor: "white" });
        tl2.to("#Timeline-Animation-Answers", { delay: 1, y: -196 });
        tl2.to("#FirstWebPage", { backgroundColor: "rgba(123, 239, 178, 1)" });
        tl2.to("#WW2", { backgroundColor: "white" });
        tl2.to("#WW2", { delay: 2 });
        tl2.to("#Timeline-Animation-Container", { duration: 1, opacity: 0 });
        }
      }
  return (
    <>
      <Header />

      <div id="timeline-Card">

          <div id="Timeline-Container-h1">
            <h1 id="Timeline-h1">American History Timeline</h1>
          </div>
  
          <div id="Timeline-Container-Des">
            <p id="Timeline-Des">
              A drag and drop game where you match American historical
              events to their dates. </p>
            <p id="Timeline-Des">
              See how many you can get correct, and learn
              some new facts.
            </p>
            <p id="Timeline-Des">
              Learn historical facts.
            </p>
 
          </div>
          <div id="container-timeline-link">
          <Router forceRefresh>
              <NavLink id="Timeline-Link" to="/timelinegame">
                Visit Game
              </NavLink>
          </Router>
          </div>
        <div className="TAH-app">


{/* 
          <p id="timelineLandingInst">DRAG AND DROP EVENTS TO THEIR DATES</p>
          <p id="timelineLandingInst">click the x to flag your progress</p> */}
          <div className="container-dates-events">
            <Dates />
            <Markers />
            <ul className="draggable-list" id="draggable-list"></ul>
          </div>
          <div id="containerTlLandingBtn">
            <button
              className="landing-check-btn"
              id="check"
              onClick={() => handleClick2({}) }
            >
              <p>Check Answers</p>
            </button>
            </div>


          <p id="TAH-mobile-notice">This program was designed as a Drag and Drop demo, which isnt mobile friendly.
          <br></br>
          Please view it on a computer :)
          </p>
      </div>






{/* 
          <div id="Timeline-Animation-Container">
            <div>
              <p id="Timeline-Animation-Date">1991</p>
            </div>
            <div id="Timeline-Animation-Answers">
              <p id="Nixon">Nixon Resigns</p>
              <p id="Roe">Roe v. Wade</p>
              <p id="WW2">World War II</p>
              <p id="FirstWebPage">The First Web Page</p>
            </div>
          </div> */}

      </div>
    </>
  );
}




