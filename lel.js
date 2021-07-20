coolvar = 1
cooltextvar = "fuck u"
//epic gamer functions
function lololalal() {
  print()
}
function susamogus() {
  console.log("get sticked bugged lol")
}
  //window.onload = function () {
    //coolvardeluxedirectorscut = prompt("Enter Your Personal Data");
//};
//i suck at javascript
function startamim1(){
  var style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = '.suckmydick { position: fixed; }';
  document.getElementsByTagName('head')[0].appendChild(style);
  
  function makeNewPosition(){
      var h = window.innerHeight
      var w = window.innerWidth
      
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }
  function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 2;
  var speed = Math.ceil(greatest / speedModifier);
  return speed;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function animateDiv(objekt){
        var newq = makeNewPosition();
        var oldq = objekt.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
  
        objekt.animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv(objekt);        
      });            
  };
  
  function startanimmmm(){
      $('.suckmydick').each(function(){
        animateDiv($(this));              
      });    
  }
  startanimmmm();
  }