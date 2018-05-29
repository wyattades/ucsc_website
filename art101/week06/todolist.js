window.onload = function() {

  // Query DOM elements
  var $output = document.getElementById('output');
  var $itemText = document.querySelector('#input input[type=text]');
  var $input = document.getElementById('input');

  var todoList = {

    // Array of todolist DOM elements
    items: [],

    // Create a new todolist item element
    addItem(text) {
      var item = document.createElement('div');

      var $text = document.createElement('span');
      $text.innerText = text;

      // Delete item when we click '✗'
      var $remove = document.createElement('span');
      $remove.classList.add('remove-item');
      $remove.innerText = '✗';
      $remove.onclick = () => this.removeItem(item);

      // Toggle item when we click '✓'
      var $toggle = document.createElement('span');
      $toggle.classList.add('toggle-item');
      $toggle.innerText = '✓';
      $toggle.onclick = () => $text.classList.toggle('checked');

      // Add delete, toggle, and text elements to item
      item.appendChild($remove);
      item.appendChild($toggle);
      item.appendChild($text);

      // Add item to this.items and update DOM
      this.items.push(item);
      this.updateList();
    },

    // Find element in list and remove it, then update DOM
    removeItem(item) {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);

      this.updateList();
    },

    // Update DOM with this.items
    updateList() {
      // Remove all previous children
      while ($output.firstChild) {
        $output.firstChild.remove();
      }

      // Add updated children
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        $output.appendChild(item);
      }
    },

  };

  // Capture #input submit event
  $input.addEventListener('submit', function(event) {
    event.preventDefault();

    var item = $itemText.value.trim();
    $itemText.value = '';
    $itemText.focus();

    // Add the item if text isn't blank
    if (item) {
      todoList.addItem(item);
    }
  });

};
