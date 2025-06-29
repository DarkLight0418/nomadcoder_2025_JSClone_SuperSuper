const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");  // 요소를 만드는 메서드
bgImage.src = `img/${chosenImage}`;  // 선택한 요소 안에 자식요소 추가
document.body.appendChild(bgImage);  // appendChild()를 통해 부모요소인 body 안에 bgImage를 삽입해준다.

