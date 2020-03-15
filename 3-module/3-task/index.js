/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let array = str.split('-');
  
  for (let i = 1; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
 
  return array.join('');
}
