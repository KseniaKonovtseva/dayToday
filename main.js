"use strict";

const date = new Date()

const getDayTime = function (date) {
  const time = date.getHours()

  if (time >= 6 && time < 12) {
    return 'Доброго утра';
  } else if (time >= 12 && time <= 18) {
    return 'Доброго дня';
  } else if (time > 18 && time < 23) {
    return 'Доброго вечера';
  } else {
    return 'Доброй ночи';
  }
}
console.log(getDayTime(date));


const getWeekDay = function (date) {
  const days = ['Воскресенье', 'Понедельник', 'Вторнк', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  return 'Сегодня ' + days[date.getDay()]
}
console.log(getWeekDay(date));


const currentTime = function (date) {
  return 'Current time: ' + date.toLocaleTimeString('en')
}
console.log(currentTime(date));


const daysLeft = function (date) {
  const newYear = new Date('2023 12 31')
  const leftMs = newYear - date
  const leftDays = Math.round(leftMs / 1000 / 60 / 60 / 24)

  let lastNum = String(leftDays).slice(-1);

  if (leftDays > 10 && [11,12,13,14,15,16,17,18,19].includes(leftDays%100)) {
    return 'До Нового года осталось: ' + leftDays + ' дней'
  } else if (lastNum ==0 || (lastNum >= 5 && lastNum <= 9)) {
    return 'До Нового года осталось: ' + leftDays + ' дней'
  } else if (lastNum >= 2 && lastNum <= 4) {
    return 'До Нового года осталось: ' + leftDays + ' дня'
  } else if (lastNum == 1) {
    return 'До Нового года осталось: ' + leftDays + ' день'
  }
  
  
  
}
console.log(daysLeft(date));