import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const inputField = document.querySelector('#datetime-picker');
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            startButton.disabled = true;
            iziToast.error({ title: 'Error', message: 'Please choose a date in the future' });
        } else {
            startButton.disabled = false;
            startButton.addEventListener('click', () => startCountdown(selectedDate));
        }
    },
};

flatpickr('#datetime-picker', options);

function startCountdown(endDate) {
    startButton.disabled = true;
    inputField.disabled = true;
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(() => {
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            updateTimerUI(0, 0, 0, 0);
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeLeft);
        updateTimerUI(days, hours, minutes, seconds);
    }, 1000);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimerUI(days, hours, minutes, seconds) {
    daysSpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      inputField.disabled = false;
      clearInterval(timerId);
    }
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

document.onload = startButton.disabled = true;