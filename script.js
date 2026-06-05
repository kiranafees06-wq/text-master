let count = document.getElementById('textArea');
let resCount = document.getElementById('resulttextarea');

function darkMode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById('light').style.display = "block";
    document.getElementById('dark').style.display = "none";
}
function LightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById('light').style.display = "none";
    document.getElementById('dark').style.display = "block";
}

function bold(){
    if( count.style.fontWeight === "bold"){
         count.style.fontWeight = "normal";
    }else{
         count.style.fontWeight = "bold";
    }

    if( resCount.style.fontWeight === "bold"){
         resCount.style.fontWeight = "normal";
    }else{
         resCount.style.fontWeight = "bold";
    }

}

function italic(){
    if(count.style.fontStyle === "italic"){
        count.style.fontStyle = "normal";
    }else{
        count.style.fontStyle = "italic";
    }
    if(resCount.style.fontStyle === "italic"){
        resCount.style.fontStyle = "normal";
    }else{
        resCount.style.fontStyle = "italic";
    }
  
}

function underline(){
    if(count.style.textDecoration === "underline"){
        count.style.textDecoration = "none";
    }else{
        count.style.textDecoration = "underline";
    }
    if(resCount.style.textDecoration === "underline"){
        resCount.style.textDecoration = "none";
    }else{
        resCount.style.textDecoration = "underline";
    }
    
}
function clearText(){
    count.value = "";
    document.getElementById('charCount').innerHTML = "0"; 
    document.getElementById('wordCount').innerHTML = "0";
    resCount.value = "";
    document.getElementById('resultCharCount').innerHTML = "0"; 
    document.getElementById('resultWordCount').innerHTML = "0";
}

function liveCount(){

    document.getElementById('charCount').innerHTML = count.value.length; 
}
count.addEventListener("input", liveCount);

function updateResult(){
      document.getElementById('resultCharCount').innerHTML = resCount.value.length; 
        let reswords = resCount.value.split(/\s+/);
          document.getElementById('resultWordCount').innerHTML = reswords.length; 
}

function wordCount(){
    let words = count.value.split(/\s+/);
  
    document.getElementById('wordCount').innerHTML = words.length; 
    
}
count.addEventListener("input", wordCount);

// Functions 

function textReverse(){
    let rev = count.value.split("").reverse().join("");

    resCount.value = rev;
     updateResult()

}



function search(){
    let search = prompt('Which word you want to search?');
   resCount.value =  count.value.toLowerCase().includes(search.toLowerCase());

}

function palin(){
    let a = count.value.toLowerCase();
    let b = a.split("").reverse().join("");

    if(a === b){
        resCount.value = `This is Palindrome`;
    }else{  
        resCount.value = `This isn't a Palindrome`;
    }
     updateResult()
}

function replaceAll(){
    let word = prompt("what do you want to replace?");
    let newword = prompt("what to add?");
    resCount.value = count.value.replaceAll(word , newword);
     updateResult()
}

function UpperCase(){
   resCount.value = count.value.toUpperCase();
    updateResult()
}

function lowerCase(){
   resCount.value = count.value.toLowerCase();
    updateResult()
}

function capitalize(){
    let words = count.value.split(" ");

    let result = words.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    resCount.value = result.join(" ");
}

function countVowels(){
let vowel = count.value.match(/[aeiou]/gi);
let vowelRep = vowel.length;

    resCount.value = `Vowels = ${vowel.join(", ")} \n count = ${vowelRep}`;
     updateResult()
}

function repeat(){
    let rep = Number(prompt(`How many times dp you want to repeat?`));
     resCount.value = count.value.repeat(rep);
      updateResult()
}

function trim(){
       resCount.value = count.value.trim();
        updateResult()
}

function charCode(){
    let word = count.value;
    let result = "";

    for(let i = 0 ; i < word.length ; i++){
        result += `${word[i]} = ${word.charCodeAt(i)} \n`
    }

    resCount.value = result;
     updateResult()
}