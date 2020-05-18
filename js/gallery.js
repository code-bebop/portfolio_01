function categoryHandler() {
  const cardList = document.querySelectorAll(".card-box__item"),
        categoryList = document.querySelectorAll(".gallery__list__item");
  
  function Listfillter(cardItem, index) {
    if(this.dataset.category === cardItem.dataset.category) {
      cardItem.style.display = "block";
    } else if(this.dataset.category === "all") {
      cardItem.style.display = "block";
    } else (
      cardItem.style.display = "none"
    )
  }
  
  for(let i=0; i<categoryList.length; i++) {
    categoryList[i].firstElementChild.addEventListener("click", (e)=>{
      e.preventDefault();
      cardList.forEach(Listfillter, e.target.parentElement);
    })  
  }
}

function init() {
  categoryHandler();
}

init();