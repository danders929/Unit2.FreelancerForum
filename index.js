/* State */
// TODO: Create variables and objects
let runPrice = 0;
let avgPrice = 0;


const freelancers = [
  {  
    name: "Alice",
    job: "Writer",
    price: "30"
  },
  {
    name: "Bob",
    job: "Teacher",
    price: "50"
  }
]
  // TODO: create an alert that shows the average starting price of all freelancers
function avgPriceAlert(){
  totalPosts = freelancers.length
  avgPrice = parseFloat(runPrice / totalPosts).toFixed(2);
  document.getElementById("avgPrice").textContent = avgPrice;
  alert("the Average starting price is: $" + avgPrice);
}

initialize();
function initialize() {
  // Render the squares
  const names = document.querySelector("#names");
  const nameElements = freelancers.map((person) => {
    const element = document.createElement("li");
    const text = document.createTextNode(person.name);
    element.appendChild(text);
    return element;
  });
  names.replaceChildren(...nameElements);

  const job = document.querySelector("#occupation");
  const jobElements = freelancers.map((person) => {
    const element = document.createElement("li");
    const text = document.createTextNode(person.job);
    element.appendChild(text);
    return element;
  });
  job.replaceChildren(...jobElements);

  const price = document.querySelector("#price");
  const priceElements = freelancers.map((person) => {
    const element = document.createElement("li");
    const text = document.createTextNode("$" + person.price);
    element.appendChild(text);
    runPrice += Number(person.price);
    return element;
  });
  price.replaceChildren(...priceElements);
  avgPriceAlert();
}

// TODO: Delayed posting of additional Freelancer
const addFreelancerIntervalId = setInterval(addFreelancer, 15000);
function addFreelancer() {
  const name = "Carol";
  const job = "Programmer";
  const price = 70;

  freelancers.push({ name, job, price });

  initialize();
  clearInterval(addFreelancerIntervalId);
}

