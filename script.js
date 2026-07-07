
function changeTab(tab){

let tabs = document.querySelectorAll(".tab");


tabs.forEach((item)=>{

    item.classList.remove("active");

});


tab.classList.add("active");

}