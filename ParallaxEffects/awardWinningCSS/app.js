//getting id
const track = document.getElementById("image-track");

//get cursor position
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
  // console.log(e.clientX);
};

//reset cursor value
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  // console.log(mouseDelta, maxDelta);

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = Math.max(
      Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0),
      -100
    );

  track.dataset.percentage = nextPercentage;

  track.animate(
    { transform: `translate(${nextPercentage}%, -50%)` },
    {
      duration: 1200,
      fill: "forwards",
    }
  );
  // console.log("percentage: " + percentage, "nextPercentage: " + nextPercentage);

  //for parallax effect
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      { objectPosition: `${nextPercentage + 100}% center` },
      { duration: 1200, fill: "forwards" }
    );
  }
};
