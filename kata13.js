const talkingCalendar = function(date) {
  let year = "";
  let month = "";
  let days = "";
  for (let i = 0; i < 4; i++) {
    year += date[i];
  }
  for (let i = 5; i < 7; i++) {
    month += date[i];
  }
  for (let i = 8; i < 10; i++) {
    days += date[i];
  }
  let month1 = "";
  switch (month) {
    case '01':
      month1 = 'January';
      break;
    case '02':
      month1 = 'February';
      break;
    case '03':
      month1 = 'March';
      break;
    case '04':
      month1 = 'April';
      break;
    case '05':
      month1 = 'May';
      break;
    case '06':
      month1 = 'June';
      break;
    case '07':
      month1 = 'July';
      break;
    case '08':
      month1 = 'August';
      break;
    case '09':
      month1 = 'September';
      break;
    case '10':
      month1 = 'October';
      break;
    case '11':
      month1 = 'November';
      break;
    case '12':
      month1 = 'December';
      break;
  }
  let days1 = '';
  if (days === '01') {
    days1 += '1st';
  } else if (days === '02') {
    days1 += '2nd';
  } else if (days === '03') {
    days1 += '3rd';
  } else {
    days1 += days;
    days1 += 'th';
  }
  return month1 + " " + days1 + ", " + year;
  // Your code here
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));