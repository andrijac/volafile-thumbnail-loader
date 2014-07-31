/*global console, document */
/*jslint plusplus: true */
/*jslint white: true */
(function (document) {
	'use strict';

	function insertAfter(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

	function getLink(s) {
		var exIndex, subs, exList, i, ii, start, index, lastIndex, result;

		exIndex = s.lastIndexOf('.');
		subs = s.substr(exIndex + 1, s.length - exIndex - 1);
		exList = ['png', 'jpg', 'bmp', 'gif', 'jpeg'];

		// add upper-case too
		for (i = 0, ii = exList.length; i < ii; i++) {
			exList.push(exList[i].toUpperCase());
		}

		if (exList.indexOf(subs) !== -1) {
			start = '/get/';
			index = s.indexOf(start);
			lastIndex = s.lastIndexOf('/');
			result = s.substring(index + start.length, lastIndex);
			return "/get_asset/thumb/" + result;
		}
		return null;
	}

	function findParent(el, className) {
		if (el.parentNode.className === className) {
			el.parentNode.style.height = 'auto';
		} else {
			findParent(el.parentNode, className);
		}
	}

	(function () {
		var i, ii, elements, href, link, el;

		elements = document.getElementsByClassName('file_name');

		for (i = 0, ii = elements.length; i < ii; i++) {

			href = elements[i].href;
			link = getLink(href);

			if (link) {
				el = document.createElement("div");
				el.style.display = 'block';
				el.innerHTML = '<img src="' + link + '" />';

				// adjust parent:
				findParent(elements[i], 'filelist_file');

				insertAfter(elements[i], el);
			}
		}
	}());

}(document));