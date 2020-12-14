class Myevent {
    constructor(id, title, date, time, duration, color, description){
        this.id = id;
        this.title = title;
        this.date = date; //array of date
        this.time = time; //string that is mm/dd/yy
        this.duration = duration; //xx.xx hours
        this.color = color; //string
        this.description = description; //string
    }
}

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startYear = 2020;
var endYear = 2030;
var month = 0;
var year = 0;
var today = 0;

const addEventModal = document.getElementById('add-modal');
const startAddEventButton = document.querySelector('footer #add-btn');
const backdrop = document.getElementById('backdrop');
const cancelAddEventButton = addEventModal.querySelector('.btn--passive');
const confirmAddEventButton = cancelAddEventButton.nextElementSibling;
const userInputs = addEventModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteEventModal = document.getElementById('delete-modal');

const clearButton = document.querySelector('footer #clear-btn');

const Events = [];
var selDays = []; 
const currentMonth =  document.getElementById("curMonth");
const currentYear = document.getElementById("curYear");
const toggleSelected = (day) => {
    day.classList.toggle('selected');
  };
  

function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

function loadCalendarYears() {
    document.getElementById("years").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");
        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        })();

        document.getElementById("years").appendChild(doc);
    }
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

    for (var i = 0; i <= dayofweek; i++) {
        let d = document.createElement("div");
        // d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        let d = document.createElement("div");
        d.id = "calendarday_" + i;
        d.className = "day";
        d.setAttribute("date", new Date(year, month, tmp));
        //console.log(d);
        if (i === today.getDate() - 1 && month === today.getMonth() && year === today.getFullYear()) {
            d.classList.add("today");
        }
        d.innerHTML = tmp;
        d.onclick = (function () {
            var selectedDay = d;
            return function () {
                day = selectedDay;
                if (selDays.includes(day)){
                    selDays.splice(selDays.indexOf(day), 1);
                } else {
                    selDays.push(day);
                }
                toggleSelected(day);
                console.log(selDays);
                updateDisplayEvents();
            }
        })();
        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year)
{
    var d = new Date(year, month+1, 0);
    return d.getDate();
}

window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    today = date;
    currentMonth.innerHTML = months[month];
    currentYear.innerHTML = year;
    loadCalendarMonths();
    loadCalendarYears();
    loadCalendarDays();
});

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    closeEventModal();
    closeEventDeletionModal();
    clearEventInput();
};

const closeEventModal = () => {
    addEventModal.classList.remove('visible');
};
  
const showEventModal = () => {
    // function() {}
    addEventModal.classList.add('visible');
    toggleBackdrop();
};

const clearEventInput = () => {
    for (const usrInput of userInputs) {
      usrInput.value = '';
    }
};

const closeEventDeletionModal = () => {
    toggleBackdrop();
    deleteEventModal.classList.remove('visible');
};

const cancelAddEventHandler = () => {
    closeEventModal();
    toggleBackdrop();
    clearEventInput();
};

const clearSelDays = () => {
    for(let i of selDays){
        toggleSelected(i);
        //console.log(i);
    }
    selDays= [];
}

const addEventHandler = () => {
    const title = userInputs[0].value;
    const time = userInputs[1].value;
    const duration = userInputs[2].value;
    const description = userInputs[3].value;
    const id = Math.random().toString();
    const color = document.getElementById('color').value;

    if (
      title.trim() === '' ||
      time.trim() === '' ||
      duration.trim() === '' ||
      description.trim() === ''
      
    ) {
      alert('Please enter valid values.');
      return;
    }
  
    for(let i of selDays){
        date = i.getAttribute("date");
        let newEvent = new Myevent(id, title, date, time, duration, color, description);
        Events.push(newEvent);
    }
    
    console.log(Events);
    colorEventDays();
    closeEventModal();
    toggleBackdrop();
    clearEventInput();
    clearSelDays();

};

const colorEventDays = () => {
    let days= document.getElementById("calendarDays").children;
    for(let i of Events){
        for(day of days){
            if(i.date == day.getAttribute('date')){
                let tempId = day.getAttribute('code');
                if(tempId){
                    if(!tempId.includes(i.id)){
                        tempId+= "|"+i.id;
                        day.setAttribute('code', tempId);
                    }
                }
                else{
                    day.setAttribute('code', i.id);
                }
                
                
                day.style.backgroundColor = i.color;
                //console.log(i.color);
                //console.log(day.style.backgroundColor);
            }
        }
    }
}

function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function updateDisplayEvents() {
    let listRoot = document.getElementById('event-list');
    console.log(listRoot);
    removeAllChildNodes(listRoot);
    for(let a of selDays){
        let code = a.getAttribute("code");
        if (code) {
            let codes = code.split("|");
            for (let i of codes) {
                let temp = Events.find(e => (e.id == i));
                renderNewEventElement(temp.id, temp.title, temp.description);
            }
        }
    }
}

const renderNewEventElement = (id, title, description) => {
    const listRoot = document.getElementById('event-list');
    const newEventElement = document.createElement('li');
    newEventElement.className = 'event-element';
    newEventElement.innerHTML = `
      <div class="event-element__info">
        <h2>${title}</h2>
        <p>${description}</p>
        <button id="${id}-btn">Delete</button>
      </div>
    `;
    listRoot.append(newEventElement);
  };
            
startAddEventButton.addEventListener('click', showEventModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddEventButton.addEventListener('click', cancelAddEventHandler);
confirmAddEventButton.addEventListener('click', addEventHandler);

clearButton.addEventListener('click', clearSelDays);
