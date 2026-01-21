document.addEventListener('DOMContentLoaded', () => {

  let elements = {
    Game: document.querySelector(".game"),
    desk: document.querySelector('.desk'),
    wallContainer: document.querySelector('.walls') ,
    ball:document.querySelector('.ball'),
  };

  let styleroot = document.querySelector(':root');
  let gamewidth = elements.Game.getBoundingClientRect().width;
  let gameheight = elements.Game.getBoundingClientRect().height;
  let walllenght = 40;
  let ballphisycs = {
    x:getStyleProperty('--Leftball'),
    y:getStyleProperty('--Topball'),
    w:elements.ball.getBoundingClientRect().width,
    h:elements.ball.getBoundingClientRect().height,
    vx:3,
    vy:3,
    spped:1.5,
  }
  defData();
  function update(){
    console.log('hello')
    requestAnimationFrame(update)

  }
 
  function defData() {
    mouseMove();
    createWall(); // რომ კედლები შეიქმნას
  }

  function mouseMove() {
    elements.Game.addEventListener('mousemove', (e) => {
      setStyleProperty('--LeftDesk', `${e.offsetX}px`);
    });
  }

  function setStyleProperty(variable, value) {
    styleroot.style.setProperty(variable, value);
  }

  function getStyleProperty(variable) {
    return parseFloat(getComputedStyle(styleroot).getPropertyValue(variable));
  }

  function createWall() {
    for (let i = 0; i < walllenght; i++) {
      let elem = document.createElement('div');
      elem.classList.add('wall');
      elements.wallContainer.appendChild(elem);
    }
  }
});
