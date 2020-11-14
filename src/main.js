

 export  const startAnimation=()=>{

     var birdsHerd = document.getElementById("bird-herd");
     var birdpredater = document.getElementById("bird-predater");
     var cloud1 = document.getElementById("cloud1");
     var cloud2 = document.getElementById("cloud2");
     var stone = document.getElementById("rock");
     var tree = document.getElementById("tree");
     var imagewolf = document.getElementById("image_wolf");
     var keyFrams = [
         {
             position: "absolute",
             left: '110%'
         },
         {
             position: "absolute",
             left: '-10%'
         },

     ];


     var timingHerd = {
         duration: 10000,
         iterations: Infinity,
     };
     var timingPredetor = {
         duration: 12000,
         iterations: Infinity,
     };
     var timingCloud1 = {
         duration: 40000,
         iterations: Infinity,
     };
     var timingCloud2 = {
         duration: 50000,
         iterations: Infinity,
     };


     var timingStone = {
         duration: 4000,
         iterations: Infinity,

     };
     var timingWOlf = {
         duration: 1000,
         iterations: Infinity,
         direction: "alternate"
     };
     birdsHerd.animate(keyFrams, timingHerd);
     birdpredater.animate(keyFrams, timingPredetor);
     cloud1.animate(keyFrams, timingCloud1);
     cloud2.animate(keyFrams, timingCloud2);
     var stoneAnim=stone.animate(keyFrams, timingStone);
     var stoneAnim1=tree.animate(keyFrams, timingStone);




 };
