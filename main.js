document.addEventListener('DOMContentLoaded', () => {

  let elements = {
    Game: document.querySelector(".game")
    
  };

  let gamewidth = elements.Game.getBoundingClientRect().width;
  let gameheight = elements.Game.getBoundingClientRect().height;

  defData();

  function defData() {
    mouseMove();
  }

  function mouseMove() {
    elements.Game.addEventListener('mousemove', (e) => {
      console.log(e.offsetX, e.offsetY);
    });
  }
});
