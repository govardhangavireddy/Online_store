const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies";

const dropdownSelect = document.querySelectorAll(".dropdown-container select");
const btn = document.querySelector("#currency");
const fromCur = document.querySelector("#from");
const toCur = document.querySelector("#to");
const message = document.querySelector(".msg");


for (let select of dropdownSelect){
    for (code in countryList){
        const new_option = document.createElement("option");
        new_option.value = code;
        new_option.innerText = code;
        if(select.id === "from" && code === "INR"){
            new_option.selected = true;
        }
        if(select.id === "to" && code === "USD"){
            new_option.selected = true
        }
        select.appendChild(new_option);
    }

    select.addEventListener("change", (evt) => {
        update_flag(evt.target);
    })
}


const update_flag = (ele) => {
    let curCode = ele.value;
    let countryCode = countryList[curCode];
    let flag = ele.parentElement.querySelector("img");
    flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    flag.alt = curCode;
}

// const updateWindow = async () => {
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if(amtVal==="" || amtVal < 1){
//         amtVal.value = 1;
//         amount.value = 1;
//     }
//     // console.log(fromCur.value.toLowerCase(), toCur.value.toLowerCase(), amtVal);    
//     const new_URL = `${URL}/${fromCur.value.toLowerCase()}.json`;
//     let response = await fetch(new_URL);
//     let data = await response.json();
//     let rate = data[fromCur.value.toLowerCase()][toCur.value.toLowerCase()];
//     // console.log(data);
//     // console.log(rate);
//     let finalAMt = amtVal * rate;
//     message.innerText = `${amtVal} ${fromCur.value} = ${finalAMt.toFixed(4)} ${toCur.value}`;
// };

btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal==="" || amtVal < 1){
        amtVal.value = 1;
        amount.value = 1;
    }
    // console.log(fromCur.value.toLowerCase(), toCur.value.toLowerCase(), amtVal);    
    const new_URL = `${URL}/${fromCur.value.toLowerCase()}.json`;
    let response = await fetch(new_URL);
    let data = await response.json();
    let rate = data[fromCur.value.toLowerCase()][toCur.value.toLowerCase()];
    // console.log(data);
    // console.log(rate);
    let finalAMt = amtVal * rate;
    message.innerText = `${amtVal} ${fromCur.value} = ${finalAMt.toFixed(4)} ${toCur.value}`;
    // updateWindow();
});

// window.addEventListener("load", () => {
//     updateWindow();
// });