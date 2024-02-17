let serialNum = 0;
let initialTotalCost = 0;
let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
for (const btn of addToCartBtns) {
  btn.addEventListener("click", function () {
    //   get place name********
    let placeName = btn.parentElement.childNodes[1].innerText;
    console.log(placeName);
    let costText = btn.parentElement.childNodes[3].innerText.split(" ")[1];

    // get cost and show********
    let costInt = parseInt(costText);
    let p1 = document.createElement("p");
    p1.innerText = costInt + " $";
    let amount = document.getElementById("amount");
    amount.appendChild(p1);

    // show place name*********
    let placeId = document.getElementById("place");
    let p = document.createElement("p");

    serialNum++;
    p.innerText = serialNum + ". " + placeName;
    placeId.appendChild(p);

    // calculate and show total cost***********
    let totalCost = document.getElementById("total-cost");
    initialTotalCost += costInt;
    totalCost.innerText = initialTotalCost;
  });
}
