// document.getElementById('grandparent').addEventListener('click', () => {
//   console.log('Grandparent clicked');
// }, true); // Capturing

document.getElementById('parent').addEventListener('click', (e) => {
  console.log('Parent clicked',e.target.tagName);
}); // Bubbling (default)

// document.getElementById('child').addEventListener('click', () => {
//   console.log('Child clicked');
// }); // Bubbling (default)
