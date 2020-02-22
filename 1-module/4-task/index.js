/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
 
function checkSpam(str) {
	let registerStr = str.toLowerCase();

	if (registerStr.includes('1xbet') || registerStr.includes('xxx')) {
		return true;
	} else {
		return false;
	}
}


