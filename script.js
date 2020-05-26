/**
 *	Todo app
 *	Create, remove and mark done todo items
 */
(function () {
	'use strict';

	/**
	 *	Represents the Todo object
 	 *	@constructor
	 */
	function Todo() {

		const input = document.querySelector("input");
		const addButton = document.querySelector(".addButton");
		const list = document.querySelector("ul");


		function markDone(event) {
			const item = event.target;
			item.parentNode.classList.toggle('done');
		}

		function removeItem(event) {
			const removeButton = event.target;
			removeButton.parentNode.remove();
		}



		function addRemoveButton(item) {
			const removeButton = document.createElement('div');

			removeButton.className = "removeButton";
			removeButton.addEventListener("click", removeItem);
			item.appendChild(removeButton);

		}





		function addCheckbox(item) {
			const checkbox = document.createElement('input');

			checkbox.setAttribute('type', 'checkbox');
			checkbox.addEventListener('click', markDone);
			item.insertBefore(checkbox, item.firstChild);
		}

		function addTextSpan(item, text) {
			const span = document.createElement('span');
			span.className = "text-span";
			span.innerText = text;
			item.insertBefore(span, item.firstChild.nextSibling);

		}

		function createItem(text) {
			const item = document.createElement('li');
			item.className = 'todo-item';
			//item.innerText = text;
			addRemoveButton(item);
			addCheckbox(item);
			addTextSpan(item, text);
			return item;
		}




		function addItem(event) {
			const text = input.value;

			const item = createItem(text);
			list.appendChild(item);
			input.value = '';
		}

		this.addListeners = function () {
			addButton.addEventListener('click', addItem);
		};


	}

	Todo.prototype.init = function () {
		this.addListeners();
	};

	const todo = new Todo();
	window.addEventListener('load', todo.init());
})();