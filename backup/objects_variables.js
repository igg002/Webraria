//Objects
var HTML = function(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
};

var Player = function(playerName, spriteSrc){
    this.name = playerName;
    this.sprite = new Image();
    this.sprite.src = spriteSrc;
    
    this.xPos = 0;
    this.yPos = 0;
};

//In-Game Settings - 아래에서 어느정도 작성한 뒤 변수 정리