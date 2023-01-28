document.getElementById("input-field").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        var inputValue = document.getElementById("input-field").value;
        var list = document.getElementById("list");
        var newItem = document.createElement("li");
        newItem.innerHTML = inputValue;
        list.appendChild(newItem);
        document.getElementById("input-field").value = "";
      }
    });
