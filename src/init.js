$(document).ready(function() {

  window.dancers = [];

  // ------------------ PEPE ------------------ //
  $('#pepeButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
        
    var height = $('body').height() * Math.random();
    height = Math.max(height, 100);
    height = Math.min(height, $('body').height() - 200);
    
    var width = $('body').width() * Math.random();
    width = Math.max(width, 100);
    width = Math.min(width, $('body').width() - 200);
    
    var dancer = new dancerMakerFunction(
      height, width, Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  // ------------------ SHARK ------------------ //
  $('#sharkButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
        
    var height = $('body').height() * Math.random();
    height = Math.max(height, 200);
    height = Math.min(height, $('body').height() - 300);
    
    var width = $('body').width() * Math.random();
    width = Math.max(width, 50);
    width = Math.min(width, $('body').width() - 300);
    
    var dancer = new dancerMakerFunction(
      height, width, Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  // ------------------ PETER GRIFFIN ------------------ //
  $('#peterButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
        
    var height = $('body').height() * Math.random();
    height = Math.max(height, 200);
    height = Math.min(height, $('body').height() - 300);
    
    var width = $('body').width() * Math.random();
    width = Math.max(width, 50);
    width = Math.min(width, $('body').width() - 300);
    
    var dancer = new dancerMakerFunction(
      height, width, Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // ------------------ PIKA ------------------ //
  $('#pikaButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
        
    var height = $('body').height() * Math.random();
    height = Math.max(height, 200);
    height = Math.min(height, $('body').height() - 300);
    
    var width = $('body').width() * Math.random();
    width = Math.max(width, 50);
    width = Math.min(width, $('body').width() - 300);
    
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
  
});

