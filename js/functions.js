function timeToMinutes(timeString) {
  const parts = timeString.split(':');

  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);

  return (hours * 60) + minutes;
}

// eslint-disable-next-line no-unused-vars
function checkMeeting(startWork, endWork, startMeeting, duration) {
  const workStartMin = timeToMinutes(startWork);
  const workEndMin = timeToMinutes(endWork);
  const meetingStartMin = timeToMinutes(startMeeting);

  const meetingEndMin = meetingStartMin + duration;

  if (meetingStartMin >= workStartMin && meetingEndMin <= workEndMin) {
    return true;
  }

  return false;
}
