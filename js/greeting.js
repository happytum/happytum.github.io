const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


const date = new Date();

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	console.log(username);
	localStorage.setItem(USERNAME_KEY, username); // "저장될 아이템의 이름", 값(변수)
	paintGreetings(username);
}

function paintGreetings(username) {
	const hours = parseInt(String(date.getHours()).padStart(0,2));
	let greetingHours;
	if ((hours >= 05)&&(hours <= 11)){
		greetingHours = "Good Morning,";
	}
	else if((hours >= 12)&&(hours <= 17)){
		greetingHours = "Good Afternoon,";
	}
	else{
		greetingHours = "Good Evening,";
	}
	greeting.innerText = `${greetingHours} ${username}.`; // `` !== '' 백틱'
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 없는 키 값을 부르면 null

if(savedUsername === null) {
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	//show the greeting
	paintGreetings(savedUsername); // onLoginSubmit 함수 안에서 따로 변수를 선언해서 이곳에서는 로컬스토리지에서 가져온 사용자 이름
}
