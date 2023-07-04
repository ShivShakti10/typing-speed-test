

const msg = document.getElementById("msg");
const wordTyped = document.getElementById("words");
const btn = document.getElementById("btn");
let startTime , endTime  ;

 setOfWords = ["That was the lesson they were about to learn that day.",
        "Puffs of breath could be seen coming from his mouth.",
        "It could all be traced back to a specific incident that happened exactly 5 years previously."];


        playGame = () =>{
            randomNumber = Math.floor(Math.random()*setOfWords.length);
            msg.innerText = setOfWords[randomNumber];
            let date = new Date();
            startTime = date.getTime();
            btn.innerText = "Done";

        }

        endGame = () =>{
                let date = new Date();
                endTime = date.getTime();
                let totalTime = ((endTime - startTime)/ 1000)

                let totalstr = wordTyped.value ;
                let wordCount = wordCounter(totalstr);

                let speed = Math.floor((wordCount / totalTime) * 60);

                let finalMsg = "Your typing speed is " +speed+ " words per minute ";

                finalMsg += compareWords(msg.innerText,totalstr);

                msg.innerText = finalMsg;
        }

        const compareWords = (str1 ,str2) =>{
            let word1 = str1.split(" ");
            let word2 = str2.split(" ");
            let cnt = 0 ;

            word1.forEach(function (item , index){
                if (item == word2[index]){
                    cnt++;
                }
            })

            let errorWords = (word1.length - cnt);
            return (cnt + "correct out of " + word1.length + " words and total number of errors are "
                        + errorWords + " .");
        }

        const wordCounter = (str) =>{
            let response = str.split(" ").length;
            return response;
        }

        
        btn.addEventListener('click', function(){
            if(this.innerText == 'Start'){
                wordTyped.disabled = false;
                playGame();
            }
            else if(this.innerText == 'Done'){
                wordTyped.enabled = true ;
                btn.innerText = 'Start';
                endGame();

            }
        })