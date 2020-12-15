body,
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.calendar {
  background-color: white;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
}

.dropdown {
  display: none;
  position: absolute;
  background-color: #fff;
  color: #1caff6;
  text-align: center;
  font-size: 14pt;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;
  width: 160px;
  left: 0px;
  z-index: 2000;
}

.dropdown {
  cursor: pointer;
  opacity: 0.95;
  transition: 0.1s opacity;
}

.year-btn {
  float: right;
  background-color: #24aeff;
  color: white;
  text-align: center;
  font-size: 14pt;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  width: 20%;
  cursor: pointer;
  transition: 0.5s background-color;
}
.day:hover,
.dropdown-item:hover {
  color: white;
  background-color: #1f71a1;
}

.day {
  float: none;
  height: 100%;
  width: 100%;
  margin: 5%;
  padding: 1em;
  font-size: 13pt;
  text-align: center;
  border: solid 1px #ddd;
}

.blank {
  background-color: white;
  border: none;
}

.day.today {
  background-color: grey;
  color: white;
  font-weight: bold;
  border: none;
}

.day.selected {
  background-color: #1caff6;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.5s opacity;
}

.day.label {
  height: 40px;
  background-color: white;
  color: black;
  border: none;
  font-weight: bold;
}

.month-btn {
  float: left;
  background-color: #24aeff;
  color: white;
  text-align: center;
  font-size: 14pt;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  width: 20%;
  cursor: pointer;
  transition: 0.5s background-color;
}

.days {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

.clear {
  clear: both;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#backdrop {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  pointer-events: none;
  display: none;
}

#backdrop.visible {
  display: block;
  pointer-events: all;
}

.modal {
  position: fixed;
  z-index: 100;
  width: 80%;
  top: 30vh;
  left: 10%;
  display: none;
}

.modal.visible {
  display: block;
  animation: fade-slide-in 0.3s ease-out forwards;
}

.modal .modal__title {
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid #00329e;
  background: #00329e;
  color: white;
  border-radius: 10px 10px 0 0;
}

.modal .modal__content {
  padding: 1rem;
}

.modal .modal__actions {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

#add-modal .modal__content {
  display: flex;
  flex-direction: column;
}

footer {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
}

footer h1 {
  margin: 0;
  color: white;
  font-size: 1.5rem;
}

button {
  font: inherit;
  padding: 0.5rem 1rem;
  background: #f67722;
  border: 1px solid #f67722;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

footer button:hover,
footer button:active {
  background: #f3cc4b;
  border-color: #f3cc4b;
  color: #995200;
}

label {
  font-weight: bold;
  margin: 0.5rem 0;
  color: #464646;
}

input,
select {
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.4rem 0.2rem;
  color: #383838;
}

.event-list {
  list-style: none;
  width: 40rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 0;
}

.event-element__info {
  display: flex;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 15px;
  flex-direction: column;
}

.event__info {
  display: grid;
  grid-template-columns: 70% 30%;
}

.event-element__info button {
  float: right;
  grid-template-columns: 1fr;
  margin-top: 2%;
}

#left {
  text-align: left;
}

#right {
  text-align: right;
}

@media only screen and (max-width: 960px) {
  .calendar {
    width: 100%;
    margin: 0px;
    margin: 0px;
    box-sizing: border-box;
    position: relative;
    left: 0px;
  }
  .modal {
    width: 40rem;
    left: calc(50% - 20rem);
  }
}
