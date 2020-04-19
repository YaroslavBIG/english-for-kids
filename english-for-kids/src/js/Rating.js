function isRating() {
  return document.querySelector('.rating') || false;
}

function rating(star) {
  const elRating = isRating();
  const wrapper = document.querySelector('.wrapper');
  const wrapperChild = document.querySelector('.wrapper').firstChild;
  const stars = document.createElement('div');
  stars.classList.add(star);

  if (!elRating) {
    const fragment = document.createDocumentFragment();
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating');
    fragment.append(ratingContainer);
    fragment.querySelector('.rating').appendChild(stars);
    wrapper.insertBefore(fragment, wrapperChild);
  } else {
    elRating.appendChild(stars);
  }
}

const ratingRemove = () => {
  const elRating = isRating();
  if (elRating) {
    elRating.remove();
  }
};

export { rating, ratingRemove };
