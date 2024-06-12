/*inspiration 
https://cz.pinterest.com/pin/830703093776458971/
*/

const cards = document.querySelectorAll(".card");
cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

/* noticia */
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  // Cor inicial e final
  const initialColor = '#E52E71'; // Cor inicial
  const finalColor = '#00BF63'; // Cor final

  // Interpolação linear para calcular a cor intermediária
  const r = Math.round(parseInt(initialColor.slice(1, 3), 16) * (1 - scrollPosition / window.innerHeight) + parseInt(finalColor.slice(1, 3), 16) * (scrollPosition / window.innerHeight));
  const g = Math.round(parseInt(initialColor.slice(3, 5), 16) * (1 - scrollPosition / window.innerHeight) + parseInt(finalColor.slice(3, 5), 16) * (scrollPosition / window.innerHeight));
  const b = Math.round(parseInt(initialColor.slice(5, 7), 16) * (1 - scrollPosition / window.innerHeight) + parseInt(finalColor.slice(5, 7), 16) * (scrollPosition / window.innerHeight));

  const interpolatedColor = `rgb(${r}, ${g}, ${b})`;

  document.querySelector('.noticia-trick').style.color = interpolatedColor;
  document.querySelector('.noticia-trick').style.color = interpolatedColor;
});