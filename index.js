
const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function formatTime(time) {
  if ( time < 10 ) {
      return '0' + time;
  }
  return time;
}

function updateTime() {
  const date = new Date();

  const hour = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());



  display.innerText=`${hour} : ${minutes} : ${seconds}`
}

setInterval(updateTime, 1000);

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if(alarmTime) {
      const current = new Date();
      const timeToAlarm = new Date(alarmTime);

      if (timeToAlarm > current) {
          const timeout = timeToAlarm.getTime() - current.getTime();
          alarmTimeout = setTimeout(() => audio.play(), timeout);
          alert('Alarm set');
      }
  }
}

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
      clearTimeout(alarmTimeout);
      alert('Alarm cleared');
  }
}