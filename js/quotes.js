const quotes = [
	{
		quote: "\"'그건 할 수 없어'라는 말을 들을 때마다 나는 성공이 가까웠음을 안다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Michael Flatley\u00a0-",
	},
	{
		quote: "\"꿈은 이루어진다. 이루어질 가능성이 없었다면 애초에 자연이 우리를 꿈꾸게 하지도 않았을 것이다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0John Updike\u00a0-",
	},
	{
		quote: "\"젊은 시절, 나는 실제 일어난 일이든 아니든, 모든 일을 기억할 수 있었다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Mark Twain\u00a0-",
	},
	{
		quote: "\"미래의 의사는 환자에게 약을 주기보다 환자가 자신의 체질과 음식, 질병의 원인과 예방에 관심을 갖도록 할 것이다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Thomas A.Edison\u00a0-",
	},
	{
		quote: "\"위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Washington lrving\u00a0-",
	},
	{
		quote: "\"이 세상에서 정말 위대해지는 방법은 없다. 우리는 모두 모진 환경의 지배를 받는다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0James Dean\u00a0-",
	},
	{
		quote: "\"기회가 찾아오는 정확한 때와 장소를 알아보고 그 기회를 잡을 수 있어야 한다. 세상에 기회는 많다. 그저 손 놓고 앉아 있을 수는 없다\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Ellen Metcalf\u00a0-",
	},
	{
		quote: "\"나는 믿음을 존중하지만 우리를 가르치는 것은 의구심이다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Wilson Mizner\u00a0-",
	},
	{
		quote: "\"인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Bill Gates\u00a0-",
	},
	{
		quote: "\"목표에 도달했을 때 돌아서지 마라.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Publilius Syrus\u00a0-",
	},
	{
		quote: "\"당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Nancy Sullivan\u00a0-",
	},
	{
		quote: "\"성공의 8할은 일단 출석하는 것이다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Woody Allen\u00a0-",
	},
	{
		quote: "\"기회를 찾아야 기회를 만든다.\"",
		author: "\u00a0\u00a0\u00a0-\u00a0Patty Hansen\u00a0-"
	},
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // idx


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
