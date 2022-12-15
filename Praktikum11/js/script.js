document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

     // jika pilihan user == pilihan komputer (Draw)
     if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"),300 );
    }

    // jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("USER WIN"),300);
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("USER WINN"),300);
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("USER WINNN"),300);
    }

    // jika pilihan user kalah
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("USER LOSE"),300);
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("USER LOSEE"),300);
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("USER LOSEEE"),300);
    }
}