const quotes = [
{
quote: "실패는 새로운 시작이다.", author: "헨리 포드",
},
{ 
quote: "계획 없는 목표는 그냥 바람에 불과하다.", author: "릭 워렌",
},
{ 
quote: "가장 어려운 일은 스스로를 깨끗이 닦는 일이다.", author: "미로",
},
{
quote: "네 자신을 믿어라. 너 자신이 가장 큰 기적이다.", author: "브레이크",
},
{
quote: "성공의 비결은 실패를 견뎌내는 데 있다.", author: "윈스턴 처칠",
},
{
quote: "성공은 준비된 사람을 만나게 된다.", author: "에드 윈 랜델",
},
{
quote: "행동은 모든 성공의 기초다.", author: "파블로 피카소",
},
{
quote: "당신의 미래는 당신이 만든다.", author: "파블로 피카소",
},
{
quote: "포기하지 않으면 언젠가는 성공한다.", author: "실버스터론",
},
{
quote: "단념하지 말라. 당신의 첫 실패는 당신이 더 나아지게 만들 것이다.", author: "토마스 에디슨",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  
// Math.floor(아예 수를 바닥으로 내림), Math.random * quote.length == 0 ~ 저 리스트 길이만큼
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;