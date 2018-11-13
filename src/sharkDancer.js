var MakeSharkDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="images/shark.gif" id="shark"></img></span>');
  this.setPosition(top, left);
};

MakeSharkDancer.prototype = Object.create(MakeDancer.prototype);
MakeSharkDancer.prototype.constructor = MakeSharkDancer;
MakeSharkDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeSharkDancer.prototype.step = function() {
  this.oldStep();
  // var height = Math.random() * 1000;
  // var styleSettings = {
  //   top: height,
  //   left: 500
  // };
  // this.$node.css(styleSettings);
};

MakeSharkDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: $('body').width() * 0.4 + 70
  };
  this.$node.css(styleSettings);
};
