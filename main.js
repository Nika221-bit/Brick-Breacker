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
  let enableUpdate = true;
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
  update();
  function update(){
    if(!enableUpdate){return}
     ballCatchDesk()
    requestAnimationFrame(update)

  }
 
  function defData() {
    mouseMove();
    createWall();
  }

   function ballCatchDesk(){
    setStyleProperty('--Leftball',`${ballphisycs.x += ballphisycs.vx}px`)
    setStyleProperty('--Topball',`${ballphisycs.x += ballphisycs.vy}px`)
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
  function collision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

});
