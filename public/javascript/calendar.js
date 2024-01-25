const calendar1 = document.getElementById("calendar01"),
  date1 = document.getElementById("dateYear1"),
  daysContainer1 = document.getElementById("days01"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventTitle = document.querySelector(".event-name "),
  addEventFrom = document.querySelector(".event-time-from "),
  addEventTo = document.querySelector(".event-time-to "),
  addEventSubmit1 = document.querySelector(".add-event-btn "),
  calendarMonth1 = document.getElementById("CtitleMonth1"),
  calendarNum = document.getElementById("CtitleMonthNum1"),
  calendar2 = document.getElementById("calendar02"),
  date2 = document.getElementById("dateYear2"),
  daysContainer2 = document.getElementById("days02"),
  calendarMonth2 = document.getElementById("CtitleMonth2"),
  calendarNum2 = document.getElementById("CtitleMonthNum2"),
  calendar3 = document.getElementById("calendar03"),
  date3 = document.getElementById("dateYear3"),
  daysContainer3 = document.getElementById("days03"),
  calendarMonth3 = document.getElementById("CtitleMonth3"),
  calendarNum3 = document.getElementById("CtitleMonthNum3"),
  calendar4 = document.getElementById("calendar04"),
  date4 = document.getElementById("dateYear4"),
  daysContainer4 = document.getElementById("days04"),
  calendarMonth4 = document.getElementById("CtitleMonth4"),
  calendarNum4 = document.getElementById("CtitleMonthNum4"),
  calendar5 = document.getElementById("calendar05"),
  date5 = document.getElementById("dateYear5"),
  daysContainer5 = document.getElementById("days05"),
  calendarMonth5 = document.getElementById("CtitleMonth5"),
  calendarNum5 = document.getElementById("CtitleMonthNum5");


  // calendar = document.querySelector(".calendar"),
  // date = document.querySelector(".date"),
  // daysContainer = document.querySelector(".days"),

// let today = new Date();
// let activeDay;
// let month = today.getMonth();
// let year = today.getFullYear();

let today = new Date();
let activeDay;
let month = 0;//1月
let year = 2024;


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const eventsArr = [
//   {
//     day: 13,
//     month: 11,
//     year: 2022,
//     events: [
//       {
//         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
//         time: "10:00 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
// ];

const eventsArr = [];
getEvents();
console.log(eventsArr);

//function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;
  calendarMonth.innerHTML = months[month];
  calendarNum.innerHTML = (month+1).toString();
  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event M1">${i}</div>`;
      } else {
        days += `<div class="day today active M1">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event M1">${i}</div>`;
      } else {
        days += `<div class="day M1">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  //addListner();
  addListner(".M1");
}

//2月
function initCalendar2() {
  var Fmonth = month+1;
  const firstDay = new Date(year, Fmonth, 1);
  const lastDay = new Date(year, Fmonth + 1, 0);
  const prevLastDay = new Date(year, Fmonth, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date2.innerHTML = months[Fmonth] + " " + year;
  calendarMonth2.innerHTML = months[Fmonth];
  calendarNum2.innerHTML = (Fmonth+1).toString();
  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.Fmonth === Fmonth + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      Fmonth === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event M2">${i}</div>`;
      } else {
        days += `<div class="day today active M2">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event M2">${i}</div>`;
      } else {
        days += `<div class="day M2">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer2.innerHTML = days;
  //addListner();
  addListner(".M2");
}

//X月
function NewinitCalendar(GoMonth) {
  month += (GoMonth-1);
  StoreMonth = GoMonth-1;
  // 使用模板字面量來創建元素 ID
  
  const firstDay = new Date(year, StoreMonth, 1);
  const lastDay = new Date(year, StoreMonth + 1, 0);
  const prevLastDay = new Date(year, StoreMonth, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  document.getElementById(`dateYear${GoMonth}`).innerHTML = months[StoreMonth] + " " + year;
  document.getElementById(`CtitleMonth${GoMonth}`).innerHTML = months[StoreMonth];
  document.getElementById(`CtitleMonthNum${GoMonth}`).innerHTML = (StoreMonth+1).toString();
  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.StoreMonth === StoreMonth + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      StoreMonth === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event M${GoMonth}">${i}</div>`;
      } else {
        days += `<div class="day today active M${GoMonth}">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event M${GoMonth}">${i}</div>`;
      } else {
        days += `<div class="day M${GoMonth}">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  document.getElementById(`days0${GoMonth}`).innerHTML = days;
  //addListner();
  var addClass = `.M${GoMonth}`;
  // console.log("+++");
  // console.log(addClass);
  addListner(addClass);
}

//function to add month and year on prev and next button
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

//initCalendar();
//initCalendar2();
NewinitCalendar(1);
NewinitCalendar(2);
NewinitCalendar(3);
NewinitCalendar(4);
NewinitCalendar(5);

//function to add active on day
function addListner(targetClass) {
  //const days = document.querySelectorAll(".day");
  const days = document.querySelectorAll(targetClass);
  const allDays = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      //remove active
      //這裡已調整成把所有按鈕的active都刪除的方法！
      allDays.forEach((day) => {
        day.classList.remove("active");
      });
      //console.log(e.target.classList);
      //這裡加入要搜尋該日期結果的內容
      //const mixDate = document.getElementById("dateYear1").textContent;
      let targetMonth = 0;
      if(e.target.classList.contains("M1")){
        targetMonth = "01";
        console.log("1月");
      }else if(e.target.classList.contains("M2")){
        targetMonth = "02";
        console.log("2月");
      }else if(e.target.classList.contains("M3")){
        targetMonth = "03";
        console.log("3月");
      }else if(e.target.classList.contains("M4")){
        targetMonth = "04";
        console.log("4月");
      }else if(e.target.classList.contains("M5")){
        targetMonth = "05";
        console.log("5月");
      }
      activeDay = Number(e.target.innerHTML)
      //const monthText = mixDate.split(" ")[0];
      const yearNum = 2024;
      //const monthNum = getMonthNumber(monthText);
      //console.log("Y:"+yearNum+"M:"+targetMonth+"D:"+activeDay);
      console.log(yearNum+"/"+targetMonth+"/"+activeDay);
      HoldData(yearNum.toString(),targetMonth,activeDay.toString());
    //   const myModal = new bootstrap.Modal('#fullscreenModal');
    //   myModal.hide();
      var myModalEl = document.getElementById('fullscreenModal');
      var modal = bootstrap.Modal.getInstance(myModalEl)
      modal.hide();

      //if clicked prev-date or next-date switch to that month
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        //add active to clicked day afte month is change
        setTimeout(() => {
          //add active where no prev-date or next-date
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        //add active to clicked day afte month is changed
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function getMonthNumber(monthName) {
    const months = {
        "January": "01",
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    };

    return months[monthName];
}

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Invalid Date");
}

//function get active day day name and date and update eventday eventdate
function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

//function update events when a day is active
function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
        </div>`;
      });
    }
  });
  if (events === "") {
    events = `<div class="no-event">
            <h3>No Events</h3>
        </div>`;
  }
  eventsContainer.innerHTML = events;
  saveEvents();
}

//function to add event
// addEventBtn.addEventListener("click", () => {
//   addEventWrapper.classList.toggle("active");
// });

// addEventCloseBtn.addEventListener("click", () => {
//   addEventWrapper.classList.remove("active");
// });

// document.addEventListener("click", (e) => {
//   if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
//     addEventWrapper.classList.remove("active");
//   }
// });

//allow 50 chars in eventtitle
// addEventTitle.addEventListener("input", (e) => {
//   addEventTitle.value = addEventTitle.value.slice(0, 60);
// });

function defineProperty() {
  var osccred = document.createElement("div");
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

//allow only time in eventtime from and to
// addEventFrom.addEventListener("input", (e) => {
//   addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
//   if (addEventFrom.value.length === 2) {
//     addEventFrom.value += ":";
//   }
//   if (addEventFrom.value.length > 5) {
//     addEventFrom.value = addEventFrom.value.slice(0, 5);
//   }
// });

// addEventTo.addEventListener("input", (e) => {
//   addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
//   if (addEventTo.value.length === 2) {
//     addEventTo.value += ":";
//   }
//   if (addEventTo.value.length > 5) {
//     addEventTo.value = addEventTo.value.slice(0, 5);
//   }
// });

//function to add event to eventsArr
// addEventSubmit.addEventListener("click", () => {
//   const eventTitle = addEventTitle.value;
//   const eventTimeFrom = addEventFrom.value;
//   const eventTimeTo = addEventTo.value;
//   if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
//     alert("Please fill all the fields");
//     return;
//   }

  //check correct time format 24 hour
//   const timeFromArr = eventTimeFrom.split(":");
//   const timeToArr = eventTimeTo.split(":");
//   if (
//     timeFromArr.length !== 2 ||
//     timeToArr.length !== 2 ||
//     timeFromArr[0] > 23 ||
//     timeFromArr[1] > 59 ||
//     timeToArr[0] > 23 ||
//     timeToArr[1] > 59
//   ) {
//     alert("Invalid Time Format");
//     return;
//   }

//   const timeFrom = convertTime(eventTimeFrom);
//   const timeTo = convertTime(eventTimeTo);

  //check if event is already added
//   let eventExist = false;
//   eventsArr.forEach((event) => {
//     if (
//       event.day === activeDay &&
//       event.month === month + 1 &&
//       event.year === year
//     ) {
//       event.events.forEach((event) => {
//         if (event.title === eventTitle) {
//           eventExist = true;
//         }
//       });
//     }
//   });
//   if (eventExist) {
//     alert("Event already added");
//     return;
//   }
//   const newEvent = {
//     title: eventTitle,
//     time: timeFrom + " - " + timeTo,
//   };
//   console.log(newEvent);
//   console.log(activeDay);
//   let eventAdded = false;
//   if (eventsArr.length > 0) {
//     eventsArr.forEach((item) => {
//       if (
//         item.day === activeDay &&
//         item.month === month + 1 &&
//         item.year === year
//       ) {
//         item.events.push(newEvent);
//         eventAdded = true;
//       }
//     });
//   }

//   if (!eventAdded) {
//     eventsArr.push({
//       day: activeDay,
//       month: month + 1,
//       year: year,
//       events: [newEvent],
//     });
//   }

//   console.log(eventsArr);
//   addEventWrapper.classList.remove("active");
//   addEventTitle.value = "";
//   addEventFrom.value = "";
//   addEventTo.value = "";
//   updateEvents(activeDay);
//   //select active day and add event class if not added
//   const activeDayEl = document.querySelector(".day.active");
//   if (!activeDayEl.classList.contains("event")) {
//     activeDayEl.classList.add("event");
//   }
// });

//function to delete event when clicked on event
// eventsContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("event")) {
//     if (confirm("Are you sure you want to delete this event?")) {
//       const eventTitle = e.target.children[0].children[1].innerHTML;
//       eventsArr.forEach((event) => {
//         if (
//           event.day === activeDay &&
//           event.month === month + 1 &&
//           event.year === year
//         ) {
//           event.events.forEach((item, index) => {
//             if (item.title === eventTitle) {
//               event.events.splice(index, 1);
//             }
//           });
//           //if no events left in a day then remove that day from eventsArr
//           if (event.events.length === 0) {
//             eventsArr.splice(eventsArr.indexOf(event), 1);
//             //remove event class from day
//             const activeDayEl = document.querySelector(".day.active");
//             if (activeDayEl.classList.contains("event")) {
//               activeDayEl.classList.remove("event");
//             }
//           }
//         }
//       });
//       updateEvents(activeDay);
//     }
//   }
// });

//function to save events in local storage
function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

//function to get events from local storage
function getEvents() {
  //check if events are already saved in local storage then return event else nothing
  if (localStorage.getItem("events") === null) {
    return;
  }
  eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}

function convertTime(time) {
  //convert time to 24 hour format
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}