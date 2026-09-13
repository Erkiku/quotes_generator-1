const button = document.getElementById('btn');
const quotes = document.querySelector('h1');


const fetchQuote = async () => {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quotes.textContent = `"${data.quote}" - ${data.author}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
  } 
}

button.addEventListener('click', fetchQuote);