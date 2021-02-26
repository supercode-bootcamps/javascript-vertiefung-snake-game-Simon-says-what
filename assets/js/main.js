let field = document.getElementById("snakeField");
let div = document.getElementById("item")
      for(let x=0; x <= 99; x++){
        let moin = document.createElement("div");
        field.appendChild(moin); 
        moin.className ="item"
        moin.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "orange";
            setTimeout(function(){
                e.target.style.backgroundColor = "lightblue"; }, 300);
        })
      }