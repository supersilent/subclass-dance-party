var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;  
  this.step();
  this.setPosition(top, left);  
};

MakeDancer.prototype.step = function() {
  var boundStep = this.step.bind(this); 
  setTimeout(boundStep, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


