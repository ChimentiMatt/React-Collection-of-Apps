import React, { useState, useEffect } from "react";

import sky from "./grand7.jpeg";
export default function App2() {
  const [button, setButton] = useState("blue");

  function handleClick() {
    // document.getElementById("testID").style.backgroundColor = "red";
    createList();
  }
  window.onload = createList;


  function handleClick2() {
    checkOrder();
  }

  function Dates() {
    const dates = [
      "1991",
      "1974",
      "1973",
      "1963",
      "1961",
      "1960",
      "1962",
      "1941",
      "1939",
      "1929",
      "1885",
      "1881",
      "1869",
      "1861",
      "1854",
      "1830",
      "1814",
      "1803",
      "1789",
      "1776",
      "1773",
      "1620",
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

  const histEvents = [
    "First Web-Page",
    "Nixon Resigns",
    "Roe v. Wade",
    "Bay of Pigs",
    "Kennedy Shot",
    "Fist Televised Presidential Debate",
    "Brown V. Board of Education",
    "Pear Harbor",
    "World War II",
    "Black Thursday",
    "Arrival of Statue of Liberty",
    "First International Phone Call",
    "Transcont. Railroad Completed",
    "Civil War Begins",
    "Kanasas-Nebraska Act",
    "Indian Removal Act",
    "Burning of the White House",
    "Louisiana Purchase",
    "Constitution Ratified",
    "Revolutionary War Begins",
    "Boston Tea Party",
    "Plymouth Colony Established",
    "Founding of Jamestown",
  ];

  // Store listitems
  const listItems = [];

  let dragStartIndex;



  React.useEffect(() => createList(), [])

  function createList() {
    [...histEvents]

      //randomizes the list on load. Sort continues to randomize
      .map((a) => ({ value: a, sort: Math.random() }))
      // sort becomes basically the id
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      //------

      .forEach((event, index) => {
        const listItem = document.createElement("li");
        listItem.setAttribute("data-index", index);

        listItem.innerHTML = `
           
            <div class="draggable" draggable="true">
              <p class="event-name">${event}</p>

            </div>
          `;

        listItems.push(listItem);
        const draggable_list = document.getElementById("draggable-list");
        draggable_list.appendChild(listItem);
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

  // Check the order of list items

  function checkOrder() {
    listItems.forEach((listItem, index) => {
      const personName = listItem.querySelector(".draggable").innerText.trim();
      if (personName !== histEvents[index]) {
        listItem.classList.add("wrong");
      } else {
        console.log("poop123");
        listItem.classList.remove("wrong");
        listItem.classList.add("right");
      }
    });
  }

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
  // const check = document.getElementById('check');
  // check.addEventListener('click', checkOrder);

  return (
    <>
      <div className="TAH-app">
        <img className="TAH-background" src={sky}></img>
        <h1 id="p2-title">Timeline of American History</h1>
        <p id="p2-desc">Drag and drop events to match their dates</p>
        <div className="container-dates-events">
          <Dates />
          <ul className="draggable-list" id="draggable-list"></ul>
        </div>


        <button
          className="check-btn"
          id="check"
          onClick={() => handleClick2({})}
        >
          
          <p>Check Answers</p>
        </button>
      </div>
    </>
  );
}
