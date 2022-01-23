const clockTitle = document.querySelector(".js-clock");
const setDate = new Date("2022-12-25T00:00:00+0900");
const setMonth = setDate.getMonth() + 1; // 0부터 세서 +1
const setDay = setDate.getDate();


function dDayAndTime() {
	const now = new Date(); // Today

	const dist = setDate.getTime() - now.getTime();

	// Math.floor 함수를 이용해서 근접한 정수값 가져오기.
	// 밀리초 값이기 때문에 1000을 곱해줌.
	// 1000 * 60 => 60초(1분) * 60 => 60분(1시간) * 24 = 24시간(하루)
	// 나머지 연산자(%)를 이용해서 '시/분/초' 를 구한다
	const dDay = Math.floor(dist / (1000 * 60 * 60 * 24));
	const dHours = String(
	Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	).padStart(2, "0"); // 날짜로 나눈 나머지에서 시간으로 나눠주면 몫이 시간으로 바뀜.
	const dMinute = String(
	Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))
	).padStart(2, "0"); // 60분으로 나눈 나머지에서 분으로 나눠서 몫을 분으로 바꿔줌.
	const dSeconds = String(Math.floor((dist % (1000 * 60)) / 1000)).padStart(
	2,
	"0"
	); // 60초로 나눈 나머지에서 1000밀리세컨 값으로 나누면 몫이 초 형태로 바뀜.
  clockTitle.innerText = `${dDay}d ${dHours}h ${dMinute}m ${dSeconds}s`;
}

dDayAndTime();
setInterval(dDayAndTime, 1000);

// 정답

const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);
