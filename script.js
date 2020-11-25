









          let score = 1; 
          var n = 0;
          let gameplay = false;
          
          var audioCol = new Audio('https://freesound.org/data/previews/321/321262_5260872-lq.mp3');
          var audioWin = new Audio('https://freesound.org/data/previews/277/277021_1402315-lq.mp3');
          var audioLoose = new Audio('https://freesound.org/data/previews/335/335906_5865517-lq.mp3');
          var audio10sec = new Audio('https://cdn.glitch.com/976cf13a-2711-44df-94e9-88da116434d8%2F10%20Seconds%20Countdown.wav?v=1598987242349');
          var arr = [];
          var time;


  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

/*

function audioInit() {
 setTimeout(() => {
  document.getElementById('mySound').play();
  document.getElementById('mySound').loop = true;
}, 500)
  
}
*/


function resetBeers(){


             
document.getElementsByClassName('beer')[0].setAttribute('position','6 6.4 65');
document.getElementsByClassName('beer')[1].setAttribute('position','-16 6.4 65');
document.getElementsByClassName('beer')[2].setAttribute('position','16 6.4 55');
document.getElementsByClassName('beer')[3].setAttribute('position','-6 6.4 55');
document.getElementsByClassName('beer')[4].setAttribute('position','-26 6.4 55');

document.getElementsByClassName('beer')[5].setAttribute('position','16 1 95');
document.getElementsByClassName('beer')[6].setAttribute('position','18 1 95');
document.getElementsByClassName('beer')[7].setAttribute('position','20 1 95');

document.getElementsByClassName('beer')[8].setAttribute('position','52 2.9 80');
document.getElementsByClassName('beer')[9].setAttribute('position','26 6.4 65');
document.getElementsByClassName('beer')[10].setAttribute('position','-65 1 65');

document.getElementsByClassName('beer')[11].setAttribute('position','-46.5 2.9 25');
document.getElementsByClassName('beer')[12].setAttribute('position','-46.5 2.9 27.7');

document.getElementsByClassName('beer')[13].setAttribute('position','-48.5 2.5 8.2');
document.getElementsByClassName('beer')[14].setAttribute('position','-46.5 2.5 8');
document.getElementsByClassName('beer')[15].setAttribute('position','-40.5 3.5 88.5');

document.getElementsByClassName('beer')[16].setAttribute('position','-30.5 5.9 89');
document.getElementsByClassName('beer')[17].setAttribute('position','-20.5 3.5 91.5');
document.getElementsByClassName('beer')[18].setAttribute('position','-98 1 -87.78');

document.getElementsByClassName('beer')[19].setAttribute('position','-18 5.9 -5.5');
document.getElementsByClassName('beer')[20].setAttribute('position','-23 3.5 -4.2');
document.getElementsByClassName('beer')[21].setAttribute('position','18 3.5 -4.2');

document.getElementsByClassName('beer')[22].setAttribute('position','23 3.5 -5.5');
document.getElementsByClassName('beer')[23].setAttribute('position','16 5.9 0');
document.getElementsByClassName('beer')[24].setAttribute('position','21 5.9 0');

document.getElementsByClassName('beer')[25].setAttribute('position','0 1 33');
document.getElementsByClassName('beer')[26].setAttribute('position','27 1 21');
document.getElementsByClassName('beer')[27].setAttribute('position','69 5.9 -35');

document.getElementsByClassName('beer')[28].setAttribute('position','74 6.9 -36');
document.getElementsByClassName('beer')[29].setAttribute('position','72 4.9 -32 ');
document.getElementsByClassName('beer')[30].setAttribute('position','20 35.5 -76');

document.getElementsByClassName('beer')[31].setAttribute('position','40 45.5 -86');
document.getElementsByClassName('beer')[32].setAttribute('position','55 4.9 39');
document.getElementsByClassName('beer')[33].setAttribute('position','60 5.9 37');

document.getElementsByClassName('beer')[34].setAttribute('position','65 6.9 35');
document.getElementsByClassName('beer')[35].setAttribute('position','72.2 2.25 60');
document.getElementsByClassName('beer')[36].setAttribute('position','71 2.25 49');

document.getElementsByClassName('beer')[37].setAttribute('position','53 2.25 11');
document.getElementsByClassName('beer')[38].setAttribute('position','52 2.25 9.5');
document.getElementsByClassName('beer')[39].setAttribute('position','52 2.25 20.5');

document.getElementsByClassName('beer')[40].setAttribute('position','-71 21 79');

document.getElementsByClassName('beer')[41].setAttribute('position','-91 11 98');
document.getElementsByClassName('beer')[42].setAttribute('position','-91 11 88');
document.getElementsByClassName('beer')[43].setAttribute('position','-80 16.5 -76');
document.getElementsByClassName('beer')[44].setAttribute('position','-70 11.5 -71');
document.getElementsByClassName('beer')[45].setAttribute('position','-52.5 1 -85');
document.getElementsByClassName('beer')[46].setAttribute('position','81 11 89');
document.getElementsByClassName('beer')[47].setAttribute('position','-6.5 25.8 -65.5');
document.getElementsByClassName('beer')[48].setAttribute('position','71.5 20.8 -20.5');
document.getElementsByClassName('beer')[49].setAttribute('position','69.87521 2.29658 60');
             
document.getElementsByClassName('beer')[0].setAttribute('visible','true');
document.getElementsByClassName('beer')[1].setAttribute('visible','true');
document.getElementsByClassName('beer')[2].setAttribute('visible','true');
document.getElementsByClassName('beer')[3].setAttribute('visible','true');
document.getElementsByClassName('beer')[4].setAttribute('visible','true');
document.getElementsByClassName('beer')[5].setAttribute('visible','true');
document.getElementsByClassName('beer')[6].setAttribute('visible','true');
document.getElementsByClassName('beer')[7].setAttribute('visible','true');
document.getElementsByClassName('beer')[8].setAttribute('visible','true');
document.getElementsByClassName('beer')[9].setAttribute('visible','true');
document.getElementsByClassName('beer')[10].setAttribute('visible','true');
document.getElementsByClassName('beer')[11].setAttribute('visible','true');
document.getElementsByClassName('beer')[12].setAttribute('visible','true');
document.getElementsByClassName('beer')[13].setAttribute('visible','true');
document.getElementsByClassName('beer')[14].setAttribute('visible','true');
document.getElementsByClassName('beer')[15].setAttribute('visible','true');
document.getElementsByClassName('beer')[16].setAttribute('visible','true');
document.getElementsByClassName('beer')[17].setAttribute('visible','true');
document.getElementsByClassName('beer')[18].setAttribute('visible','true');
document.getElementsByClassName('beer')[19].setAttribute('visible','true');
document.getElementsByClassName('beer')[20].setAttribute('visible','true');
document.getElementsByClassName('beer')[21].setAttribute('visible','true');
document.getElementsByClassName('beer')[22].setAttribute('visible','true');
document.getElementsByClassName('beer')[23].setAttribute('visible','true');
document.getElementsByClassName('beer')[24].setAttribute('visible','true');
document.getElementsByClassName('beer')[25].setAttribute('visible','true');
document.getElementsByClassName('beer')[26].setAttribute('visible','true');
document.getElementsByClassName('beer')[27].setAttribute('visible','true');
document.getElementsByClassName('beer')[28].setAttribute('visible','true');
document.getElementsByClassName('beer')[29].setAttribute('visible','true');
document.getElementsByClassName('beer')[30].setAttribute('visible','true');
document.getElementsByClassName('beer')[31].setAttribute('visible','true');
document.getElementsByClassName('beer')[32].setAttribute('visible','true');
document.getElementsByClassName('beer')[33].setAttribute('visible','true');
document.getElementsByClassName('beer')[34].setAttribute('visible','true');
document.getElementsByClassName('beer')[35].setAttribute('visible','true');
document.getElementsByClassName('beer')[36].setAttribute('visible','true');
document.getElementsByClassName('beer')[37].setAttribute('visible','true');
document.getElementsByClassName('beer')[38].setAttribute('visible','true');
document.getElementsByClassName('beer')[39].setAttribute('visible','true');
document.getElementsByClassName('beer')[40].setAttribute('visible','true');
document.getElementsByClassName('beer')[41].setAttribute('visible','true');
document.getElementsByClassName('beer')[42].setAttribute('visible','true');
document.getElementsByClassName('beer')[43].setAttribute('visible','true');
document.getElementsByClassName('beer')[44].setAttribute('visible','true');
document.getElementsByClassName('beer')[45].setAttribute('visible','true');
document.getElementsByClassName('beer')[46].setAttribute('visible','true');
document.getElementsByClassName('beer')[47].setAttribute('visible','true');
document.getElementsByClassName('beer')[48].setAttribute('visible','true');
document.getElementsByClassName('beer')[49].setAttribute('visible','true');



                             

                            } 







          
          function restart(event) {
          
          time = 200000;
          score = 0;
          document.getElementById('score').innerHTML = 'score: <br>' + score;
            
            
          // reset beers:  
          resetBeers();
         
          document.getElementById('mySound').pause();
          
            
            
            
            
            
            
            
            
            var bAudio = document.getElementById("mySound");
            
            gameplay = true;
            document.getElementById('restart').setAttribute('visible','false');
            document.getElementById('restart').setAttribute('position','0 -100 0');
            
            document.getElementById('restart2').setAttribute('visible','false');
            document.getElementById('restart2').setAttribute('position','0 -100 0');
            
            console.log(gameplay);
            bAudio.play();
            bAudio.loop = true;
            
            
            
            //document.getElementById('timer').innerHTML = 'time: <br>' + time;
            
             
            if ((time > 0) && (score!=3000)) {
               
             var goGo =  setInterval(myTimer, 1000);
             
            }
          
               
          
             

        function myTimer() {
                
              if ((time > 0) && (score!=3000)) {
                time -= 1000;
                document.getElementById('timer').innerHTML = 'time: <br>' + time/1000;
                if (time===10000) {
                audio10sec.play();
              }
                
              } 
              
              
              else if  ((time == 0) || (score==3000)){
              console.log('timeout');
              clearInterval(goGo);
              gameplay = false;
              
              document.getElementById('mySound').play();
              document.getElementById('mySound').loop = true;  
              
              document.getElementById('restart').setAttribute('visible','true');
              document.getElementById('restart').setAttribute('position','0 5 80'); 
                
              document.getElementById('restart2').setAttribute('visible','true');
              document.getElementById('restart2').setAttribute('position','0 5 80'); 
                
                
              document.getElementById('rig').setAttribute('position','0 6 100'); 
              
                
             if (score === 3000) {
               
               
               //you win
               document.getElementById('restartcontent').innerHTML = 'You won! <br> <span style="color: yellow">Congratulations!</span><br><a>your score:</a> '+ (score+(time/10)) +' <br> claim your reward from the team.'; 
               document.getElementById('restartcontent2').innerHTML = 'You won! <br> <span style="color: yellow">Congratulations!</span><br><a>your score:</a> '+ (score+(time/10)) +' <br> claim your reward from the team.'; 
               document.getElementById('rig').setAttribute('position','0 6 100'); 
               document.getElementById('score').innerHTML = 'score: <br>' + (score+(time/10));
               
               
               
               
               audioWin.play();
               
               
               
             } else if (score !== 3000) {
                
                
                //you loose
                document.getElementById('restartcontent').innerHTML = '<span style="color:#73d9a4">Game Over</span> <br> <a>your score was:  </a><br> '+ score +' <br> play again <br>'; 
                document.getElementById('restartcontent2').innerHTML = '<span style="color:#73d9a4">Game Over</span><br> <a>your score was:  </a><br> '+ score +' <br> play again <br>'; 
                document.getElementById('rig').setAttribute('position','0 6 100'); 
                document.getElementById('score').innerHTML = 'score: <br>' + score;
               
                
                audioLoose.play();
                
               
               
                
               
                
             }
                appendScores();
                
                
                
            }
              
            }
          }
              
              
              
            
            
             
          function appendScores() {

            
            
            
          
          
            
            
            
            
            if (score===3000){
          
              arr.push((score+(time/10))+'<br>');
            
           console.log(arr);
              

               //var unique = arr.filter( onlyUnique ); 
               
               
                document.getElementById('highscores').innerHTML = 'HIGHSCORES: <br>' + arr.join("");
                document.getElementById('highscores2').innerHTML = 'HIGHSCORES: <br>' + arr.join("");
                
                
                console.log(arr);
              
              
              } else {
                
            arr.push(score+'<br>');
            
               console.log(arr);
              

               
               //var unique = arr.filter( onlyUnique ); 
               
                document.getElementById('highscores').innerHTML = 'HIGHSCORES: <br>' + arr.join("");
                document.getElementById('highscores2').innerHTML = 'HIGHSCORES: <br>' + arr.join("");
                
                
                console.log(arr);
                
                
                
              }
          
            
            
            
          }
             
             
            
          


            
          function collect(event){
            if (gameplay == true) {
              score += 100;
              document.getElementById('score').innerHTML = 'score: <br>' + score;
              event.currentTarget.setAttribute('visible','false');
              event.currentTarget.setAttribute('position','0 -100 0');
              audioCol.play();
            }
          }
            
          

       