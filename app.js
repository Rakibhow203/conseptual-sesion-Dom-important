/* General concept about Dom:-
* 
nodelist , prantNodes and childNode পাইতে হলে-

<section>
  <div class="hello">

    <p>hello</p>
    <h1>hiii</h1>
    <div>
      <button onclick="handelClick(event)" id="btn">my btn</button>
    </div>

  </div>
</section>

* event.target দিলে নিজেকেই acsses করা হয়ে যাবে ।
function handelClick (event)){
  console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
}




* অনেক গুলা btn কে একবারে eventHandler add করার নিওম- এবং প্রতেক্অটা btn কে click korle এক এক
করে যোগ হয়ে দেখাবে ।
Const allBtn = document.getElementsByClassName(‘write same class name’);

Class id টাকে নিয়ে আসার পর এবার for loop চালিয়ে তার পর প্রতেকটাকে দরে addEventlistner add kroe
তার পর একটা annonimus function add করতে  হবে –
Let count = 0;
For (const btn of allbtn) {
Btn.addEventlisterer(“write the name of event listener “, function (e){
Count = count + 1;
setInnertext(“(write id name)cart-count” , count);
});
}
Function setInnerText (id, value){ ( দাইনামিক Id and id value)
Document.getElementById(id).innerText = value;



























*/




// আমদের কাছে অনেক গুলা btn আছে আর সবগুলা btn এর একটা comon class নাম আছে add-btn , add-btn কে আমরা দরছি দরে allBtn নামে একটা variable এর মদ্ধে রাখচি রেখে তার ভিতর একটা loop চালিয়ে প্ররতেক্টা btn কে আলাদা আলাদা করে দিচি, 

let count = 0;

const allBtn = document.getElementsByClassName("add-btn");

// console.log(allBtn);

for (const btn of allBtn) {
  btn.addEventListener("click", function handleSelect(event) {
    count += 1;
    const budget = getValue("budget");

    const placeName = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    if (budget - parseInt(price) < 0) {
      alert("Low Budget Earn Moeny");
      return;
    }
    // display তে value গুলাকে দেখানোর জন্য - 1st তে selected-place-container কে acses করে তার ভিতর একটা li or div তুমার যেটা ইচ্ছা createElement করে create করবা তার ভিতর ২টা p tag create করবা ,
    // p tag গুলাকে li এর ভিতর appendChild করবা তার পর 
    // li টা কে main container এর(selectedContainer) ভিতর appendChild করবা -
    
    
    
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;

    const p2 = document.createElement("p");
    p2.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);
    totalPrice("total-cost", price);
    event.target.parentNode.parentNode.style.backgroundColor = "gray";
    event.target.setAttribute("disabled", true);
    setInnerText("budget", budget - parseInt(price));
    setInnerText("cart-count", count);
  });
}

function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
  grandTotal("other");
}
function grandTotal(category) {
  console.log(category);
  const convertTotal = getValue("total-cost");
  if (category == "bus") {
    setInnerText("grand-total", convertTotal + 100);
  } else if (category == "train") {
    setInnerText("grand-total", convertTotal - 200);
  } else if (category == "flight") {
    setInnerText("grand-total", convertTotal + 500);
  } else {
    setInnerText("grand-total", convertTotal);
  }
}

function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
