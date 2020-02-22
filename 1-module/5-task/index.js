/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

function truncate(str, maxlength) {

	if ( str.length > maxlength ) {
		return str.slice(0, 19) + '…';
	} else {
		return str;
	}

}

alert( `Результат: ${ truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) }` );
alert( `Результат: ${ truncate('Всем привет!', 20) }` );
