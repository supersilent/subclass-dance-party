$(document).ready(function() {

  window.dancers = [];

  $('.constructorButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
        
    var height = $('body').height() * Math.random();
    height = Math.max(height, 100);
    height = Math.min(height, $('body').height() - 200);
    
    var width = $('body').width() * Math.random();
    width = Math.max(width, 100);
    width = Math.min(width, $('body').width() - 400);
    
    var dancer = new dancerMakerFunction(
      height, width, Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  // ------------------ LINE UP ------------------ //
  $('#lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }        
  });
  
  // ------------------ PETER GRIFFIN KICK SHARK ------------------ //
  $('#kickButton').on('click', function(event) {
     
    var hasClassShark = function(element) {
      var classString = element.attr('class');
      var classes = classString.split(' ');
      return classes.includes('shark');
    };     
    var sharks = window.dancers.filter(function(dancer) {
      return hasClassShark(dancer.$node);
    });
        
    var hasClassPeter = function(element) {
      var classString = element.attr('class');
      var classes = classString.split(' ');
      return classes.includes('peter');
    };
    var peters = window.dancers.filter(function(dancer) {
      return hasClassPeter(dancer.$node);
    });
    
    if (peters.length === 0 || sharks.length === 0) {
      return;
    }
    
    // first peter on screen will be kicking peter
    var kickingPeter = peters[0];
    var kickingPeterTop = kickingPeter.top;
    var kickingPeterLeft = kickingPeter.left;
    
    var findClosestShark = function(sharks, peterTop, peterLeft) {
      var distances = [];
      for (var i = 0; i < sharks.length; i++) {
        var shark = sharks[i];
        var topChange = Math.abs(shark.top - peterTop);
        var leftChange = Math.abs(shark.left - peterLeft);
        var distance = Math.sqrt(Math.pow(topChange, 2) + Math.pow(leftChange, 2));
        distances.push(distance);
      } 
      var minDistanceIndex, minDistance;
      for (var i = 0; i < distances.length; i++) {
        if (minDistance === undefined || distances[i] < minDistance) {
          minDistance = distances[i];
          minDistanceIndex = i;
        }
      }
      return sharks[minDistanceIndex];
    };
    
    var closestShark = findClosestShark(sharks, kickingPeterTop, kickingPeterLeft);
    
    // bring kicking Peter to closest shark
    var kickingPeterStyle = {
      top: closestShark.top,
      left: closestShark.left
    };
    kickingPeter.$node.css(kickingPeterStyle);
    
    // update kicking Peter's coordinates for calculation for next kick
    kickingPeter.top = closestShark.top;
    kickingPeter.left = closestShark.left;
    
    // closest shark goes flying off the screen
    closestShark.$node.animate({left: '2000px'});
    
    // remove closest shark from window.dancers
    var closestSharkIndex = window.dancers.indexOf(closestShark);
    window.dancers.splice(closestSharkIndex, 1);
    
  });
  
});

