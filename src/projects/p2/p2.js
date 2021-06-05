import React, { useState, useEffect } from "react";

export default function App2() {
  const [button, setButton] = useState("blue");

  function handleClick(event) {
    // document.getElementById("testID").style.backgroundColor = "red";
    createList();
  }

  const richestPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Warren Buffett",
    "Bernard Arnault",
    "Carlos Slim Helu",
    "Amancio Ortega",
    "Larry Ellison",
    "Mark Zuckerberg",
    "Michael Bloomberg",
    "Larry Page",
  ];

  // Store listitems
  const listItems = [];

  let dragStartIndex;

  function createList() {
    [...richestPeople]
    //randomizes the list on load. Sort continues to randomize 
      .map((a) => ({ value: a, sort: Math.random() }))
      // sort becomes basically the id
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .forEach((person, index) => {
        const listItem = document.createElement("li");
        listItem.setAttribute("data-index", index);

        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
              <p class="person-name">${person}</p>
              <i class="fas fa-grip-lines"></i>
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
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }

  function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over');
  }
  function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over');
  }
  function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
  }
  function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
  
    this.classList.remove('over');
  }
  // Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
  
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
  }

  // Check the order of list items

  function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');
  
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', dragStart);
    });
  
    dragListItems.forEach(item => {
      item.addEventListener('dragover', dragOver);
      item.addEventListener('drop', dragDrop);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('dragleave', dragLeave);
    });
  }
//   const check = document.getElementById('check');
//   check.addEventListener('click', checkOrder);


  
  return (
    <>
      <p id="p2-title">10 Richest People</p>
      <p id="p2-title">Drag and Drop the items into their corresponding spots</p>
      <ul className="draggable-list" id="draggable-list"></ul>
      <button
        className="check-btn"
   
        style={{ color: button }}
        onClick={() => handleClick({})}
      >
        Check Order
        <p>itag</p>
      </button>
    </>
  );
}
