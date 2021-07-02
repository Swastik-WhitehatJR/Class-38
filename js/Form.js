class Form {
  constructor() {
    this.input = createInput("NAME:")
    this.button = createButton("PLAY")
    this.greeting = createElement('h2')
  }

  hide() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display() {
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0);

    this.input.position(displayWidth/2, displayHeight/8 );
    this.button.position(displayWidth/2 + 50, displayHeight/8 + 50);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount += 1;//same a playerCount = playerCount  +1
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2, 160)

    });

  }
}
