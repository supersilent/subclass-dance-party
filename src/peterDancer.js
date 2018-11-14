
// PETERS CAN KICK SHARKS

var MakePeterDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer peter"><img src="images/peter.gif" id="peter"></img></span>');
  this.setPosition(top, left);
};

MakePeterDancer.prototype = Object.create(MakeDancer.prototype);
MakePeterDancer.prototype.constructor = MakePeterDancer;
MakePeterDancer.prototype.oldStep = MakeDancer.prototype.step;

MakePeterDancer.prototype.step = function() {
  this.oldStep();
};

MakePeterDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: $('body').width() * 0.37
  };
  this.$node.css(styleSettings);
};
