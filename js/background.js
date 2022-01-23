const imgText = document.querySelector("#changeImg");

function zoomInText() {
    imgText.style = "font-size: 1em;"
}

function zoomOutText() {
    imgText.style = "font-size: 0.25em;"
}

function randomImage() {
    const images = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'
    ,'8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg'
    ,'18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg'
    ,'28.jpg','29.jpg','30.jpg',];
    
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    
    // const bgImage = document.createElement("img");
    
    // bgImage.src = `img/${chosenImage}`;
    
    // document.body.appendChild(bgImage); // prepend는 맨 위로 가게 함
    
    document.body.style.backgroundImage = `url(img/${chosenImage})`;
}

randomImage();

imgText.addEventListener("click", randomImage);
imgText.addEventListener("mouseover", zoomInText);
imgText.addEventListener("mouseout", zoomOutText);