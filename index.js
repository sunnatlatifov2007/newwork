let startpice = 1999; 
let selectedSSD = 0; 

let priceElement = document.getElementById("price"); 
let ssdOptions = document.querySelectorAll(".option")




function updatePrice() {
    priceElement.textContent = `$${startpice + selectedSSD}`;
}

ssdOptions.forEach(option => {
    option.addEventListener("click", () => {
        ssdOptions.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");

        selectedSSD = parseInt(option.dataset.price) || 0;
        updatePrice();
    });
});

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
btn1.addEventListener("mouseover" , () => {
    btn2.style.backgroundColor = "#CFE7FF";
    btn2.style.color = "grey"
})
btn1.addEventListener('mouseout', () => {
    btn2.style.backgroundColor = ""
})

btn2.addEventListener("mouseover" , () => {
    btn1.style.backgroundColor = "#CFE7FF";
    btn1.style.color = ""
})

btn2.addEventListener('mouseout', () => {
    btn1.style.backgroundColor = ""
})






