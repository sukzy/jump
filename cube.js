class Cube {
  constructor() {
    // this.w = 10;
    // this.t = 50;
    this.x = 0 + aktorRight.width;
    this.y = height / 2;
    this.walkSpeed = 7;
    this.jumpDist = 10;
    this.limitJump = 0;

    this.jump = false;
    this.jumpWalkLeft = false;
    this.jumpWalkRight = false;

    this.aktorLeft = false;
    this.aktorRight = true;

    this.velX = 5;
    this.velY = 0;
    this.gravity = 0.8;
  }

  show() {
    if (this.aktorLeft) {
      // noFill();
      // stroke(255);
      // rect(this.x, this.y, this.w, this.t);
      image(aktorLeft, this.x, this.y);  
    } else if (this.aktorRight) {
      image(aktorRight, this.x, this.y);  
    }
    
  }

  walking() {
    if (this.walkRight) {
      this.x += this.walkSpeed;
    }
    if (this.walkLeft) {
      this.x -= this.walkSpeed;
    }
  }

  update() {
    this.velY += this.gravity
    this.y += this.velY;
    if (this.jumpWalkLeft) {
      this.x -= this.walkSpeed;
    }
    if (this.jumpWalkRight) {
      this.x += this.walkSpeed;
    }
  }

  checkEdgeGround() {
    if (this.y + aktorRight.height > height) {
      this.y = height - aktorRight.height;
      this.velY = 0;
    }
  }

  checkEdgeJump() {
    if (this.y < this.limitJump) {
      this.velY *= -1;
      this.jump = false;
    }
  }

  jumping() {
    if (this.jump) {
      this.velY = -this.jumpDist;
    }

    if (this.jumpWalkRight) {
      this.velY = -this.jumpDist;
      this.x += this.walkSpeed;
    }

    if (this.jumpWalkLeft) {
      this.velY = -this.jumpDist;
      this.walkSpeed *= -1;
    }
  }

  edgeWall() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + aktorRight.width > width) {
      this.x = width - aktorRight.width;
    }
  }
}