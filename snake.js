class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(width/2), floor(height/2));
    this.xdir = 0;
    this.ydir = 0;
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
    //copy so that after touching the food the game is not ended
    	let head = this.body[this.body.length-1].copy();
    //this line is required otherwise body could not be shifted
    this.body.shift();
   head.x += this.xdir;
  head.y += this.ydir;
   this.body.push(head);
  }
  
  grow() {
  	let head = this.body[this.body.length-1].copy();
       this.body.push(head);
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > width-1 || x < 0 || y > height-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}