const stars = document.querySelectorAll('.stars');
stars.forEach((star) => {
  star.innerHTML = `
    <img src="./images/icon-star.svg" alt="star">
    <img src="./images/icon-star.svg" alt="star">
    <img src="./images/icon-star.svg" alt="star">
    <img src="./images/icon-star.svg" alt="star">
    <img src="./images/icon-star.svg" alt="star">
  `;
});
