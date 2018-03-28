// function isInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   console.log(rect.top);
//   return (
//         rect.top <= 0 &&
//         rect.bottom >= 0
//     );
// }

function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

function setBackground(el, backgroundColor) {
  el.style.background = backgroundColor;
}

window.addEventListener ("scroll", function(){

  const nav = document.getElementById('myNavBar');
  const div1 = document.getElementsByClassName('contentSection1');
  const div2 = document.getElementsByClassName('contentSection2')
  const div3 = document.getElementsByClassName('contentSection3');

  if (window.scrollY === 0) {
    setBackground(nav, 'white');
  }

  if (isAnyPartOfElementInViewport(div1)) {
    setBackground(nav, 'crimson');
  }

  if (isAnyPartOfElementInViewport(div2)) {
    setBackground(nav, 'rebeccapurple');
  }

  if (isAnyPartOfElementInViewport(div3)) {
    setBackground(nav, 'skyblue');
  }
});
