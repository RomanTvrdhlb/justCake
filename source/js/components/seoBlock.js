const seoBlock = document.querySelector('.seo__content');
const seoBlockBtn = document.querySelector('.seo__btn');


if (seoBlock) {
  let flag = false;

  seoBlockBtn.addEventListener('click', () => {
    if(flag === false) {
      seoBlock.classList.add('hidden');
      seoBlock.style.maxHeight = seoBlock.scrollHeight + 'px';
      flag = true;
      seoBlockBtn.innerText = seoBlockBtn.getAttribute('data-text-hide');
    } else {
      seoBlock.classList.remove('hidden');
      seoBlock.style.maxHeight = '300px';
      flag = false;
      seoBlockBtn.innerText = seoBlockBtn.getAttribute('data-text-show');
    }
  });
}
