var MakePepeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="images/pepe.gif" id="pepe"></img></span>');
  this.setPosition(top, left);
};

MakePepeDancer.prototype = Object.create(MakeDancer.prototype);
MakePepeDancer.prototype.constructor = MakePepeDancer;
MakePepeDancer.prototype.oldStep = MakeDancer.prototype.step;

MakePepeDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.fadeToggle();
};

MakePepeDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 80
  };
  this.$node.css(styleSettings);
};


// PEPE disappears on mouse hover