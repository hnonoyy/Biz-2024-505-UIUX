const onStart = () => {};
document.addEventListener("DOMContentLoaded", onStart);
document.addEventListener("DOMContentLoaded", () => {
  // 화면에 있는 div 객체 전체를 Query 하여 divs 배열에 담아라
  const divs = document.querySelectorAll("div");
  const colors = ["blue", "red", "yellow", "green", "black"];
  let count = 0;
  let index = 0;
  const onClickHandler = (e) => {
    e.target.style.backgroundColor = colors[count++ % colors.length];
  };
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", onClickHandler);
  }
});
