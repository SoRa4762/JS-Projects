const input = document.getElementById("fibonacci");
const button = document.getElementById("findFib");

button.addEventListener("click", () => {
  //   console.log(typeof Number(input.value));
  const result = document.createElement("p");
  result.innerText = fibonacci(parseInt(input.value));
  document.body.appendChild(result);
});

const fibonacci = (value) => {
  if (typeof value != "number") {
    alert("Please enter a number");
  }
  if (value === 0 || value === 1) {
    return value;
  } else {
    return fibonacci(value - 1) + fibonacci(value - 2);
  }
};

// console.log(fibonacci(3));

//0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 24157817 39088169 63245986 102334155 165580141 267914296 433494437 70140873
