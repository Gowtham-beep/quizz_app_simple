import { quizData } from "./data"
let curr=0
let score=0
function loadquiz(){
    deselectans()
    const question =document.getElementById("question").innerHTML=quizData[curr].question
    const option_1=document.getElementById('option_1').innerHTML=quizData[curr].a
    const option_2=document.getElementById('option_2').innerHTML=quizData[curr].b
    const option_3=document.getElementById('option_3').innerHTML=quizData[curr].c
    const option_4=document.getElementById('option_4').innerHTML=quizData[curr].d

    const submitbtn=document.getElementById('submitbtn')
    const prevbtn=document.getElementById('prevbtn')
    const nextbtn=document.getElementById('nextbtn')

    const result=document.getElementById('result').innerHTML=score
}
loadquiz()

function deselectans(){
    const selectedOption = document.querySelectorAll('input[name="answers"]');
    selectedOption.forEach((ele)=>{
        ele.checked=false
    }) 
}

function verify() {
    const selectedOption = document.querySelector('input[name="answers"]:checked');
    if (selectedOption) {
        const answer = selectedOption.id;
        if (answer === quizData[curr].correct) {
            score++
            alert("Correct answer!");
            loadquiz()
            
            
        } else {
            alert("Wrong answer!");
            
        }
    } else {
        alert("Please select an answer.");
        
    }
    
}

function next(){
    if(curr<quizData.length-1){
        curr++
        loadquiz()
    }else{
        alert("You are at last question")
    }
}

function prev(){
    if(curr>0){
        curr--
        loadquiz()
    }else{
        alert("You are at first question")
    }
}