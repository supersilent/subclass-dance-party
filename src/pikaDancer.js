var MakePikaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="images/pika.gif" id="pika"></img></span>');
  this.setPosition(top, left);
};

MakePikaDancer.prototype = Object.create(MakeDancer.prototype);
MakePikaDancer.prototype.constructor = MakePikaDancer;
MakePikaDancer.prototype.oldStep = MakeDancer.prototype.step;

MakePikaDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.fadeToggle();
};

MakePikaDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: $('body').width() - 200
  };
  this.$node.css(styleSettings);
};