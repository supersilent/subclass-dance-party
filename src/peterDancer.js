var MakePeterDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="images/peter.gif" id="peter"></img></span>');
  this.setPosition(top, left);
};

MakePeterDancer.prototype = Object.create(MakeDancer.prototype);
MakePeterDancer.prototype.constructor = MakePeterDancer;
MakePeterDancer.prototype.oldStep = MakeDancer.prototype.step;

MakePeterDancer.prototype.step = function() {
  this.oldStep();
  // var height = Math.random() * 1000;
  // var styleSettings = {
  //   top: height,
  //   left: 500
  // };
  // this.$node.css(styleSettings);
};

MakePeterDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: $('body').width() * 0.4
  };
  this.$node.css(styleSettings);
};
