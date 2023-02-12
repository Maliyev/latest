const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  nav.style.display ='block';
});



navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
});






function onEntry_(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options1 = { threshold: [0.5] };
let observer1 = new IntersectionObserver(onEntry_, options1);
let elements1 = document.querySelectorAll('._img');
for (let elm of elements1) {
  observer1.observe(elm);
}
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-active');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.how_work_ul li');
for (let elm of elements) {
  observer.observe(elm);
}
// function onEntry1(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('element-active');
//     }
//   });
// }
// let options1 = { threshold: [0.5] };
// let observer1 = new IntersectionObserver(onEntry1, options1);
// let elements1 = document.querySelectorAll('.how_work_ul');
// for (let elm of elements) {
//   observer1.observe(elm);
// }