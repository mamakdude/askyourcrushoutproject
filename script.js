const noButton = document.getElementById("no-button");
const title = document.getElementById('cute-font');
const mainImage = document.getElementById('image');
const yesButton = document.getElementById("yes-button");

// Add a mouseover event listener to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});


yesButton.addEventListener("click",function(){
    title.textContent= "I love you sayang*";
    title.style.fontSize='12vw';
    mainImage.src= "./assets/imges/loveyoubear.gif";
    mainImage.style.width='90%'
    yesButton.style.display='none';
    noButton.style.display='none';
})
