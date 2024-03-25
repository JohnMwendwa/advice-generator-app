const btn = document.querySelector("#new__advice");
const advice = document.querySelector("#advice__text");
const adviceId = document.querySelector("#advice__id");

btn.addEventListener("click", () => {
  generateAdvice();
});

// Fetching advice data from the API
const generateAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    advice.textContent = `"${data.slip.advice}"`;
    adviceId.textContent = data.slip.id;
  } catch (err) {
    console.error(err);
    advice.textContent = "Oops! Something went wrong. Please try again later.";
    adviceId.textContent = "";
  }
};

// Initial advice generation
generateAdvice();
