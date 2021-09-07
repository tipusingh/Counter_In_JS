// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    }
    else if (styles.contains("+2")) {
        count = (count + 2);
      }
      else if (styles.contains("-2")) {
        count = (count - 2);
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    if (count < 0) {
      value.style.color = randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    if (count === 0) {
      value.style.color = randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    value.textContent = count;
  });
});




function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
someDiv.style.color = generateRandomColor() // -> #34c7aa
