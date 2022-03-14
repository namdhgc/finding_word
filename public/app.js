window.addEventListener("DOMContentLoaded", (_) => {
  // let websocket = new WebSocket("ws://" + window.location.host + "/websocket");
  const host = "localhost:4444";
  let websocket = new WebSocket("ws://" + host + "/websocket");

  let room = document.getElementById("chat-text");

  websocket.addEventListener("message", function (e) {
    let data = JSON.parse(e.data);
    // creating html element
    let p = document.createElement("p");
    p.innerHTML = `<strong>${data.username}</strong>: ${data.text}`;

    room.append(p);
    room.scrollTop = room.scrollHeight; // Auto scroll to the bottom
  });

  let form = document.getElementById("input-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("input-username");
    let text = document.getElementById("input-text");
    websocket.send(
      JSON.stringify({
        username: username.value,
        text: text.value,
      })
    );
    text.value = "";
  });

  // render table 10 x 10
  var hiragana = getHiragana();
  makeTable(15, 15, hiragana)
});

function makeTable(table_rows, table_columns, data) {
  var fragment = document.createDocumentFragment();
  console.log(data[1])

  for (var i = 0; i < table_rows; i++) {
    var row = document.createElement('tr');
    fragment.appendChild(row);

    for (var j = 0; j < table_columns; j++) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(i.toString() + ', ' + j.toString() + ', ' + data[1]['kana']));
      row.appendChild(cell);
    }
  }

  var target = document.getElementById('game-table');
  target.appendChild(fragment);
}

function getHiragana() {
  // If you're looking for something quick and dirty just load the data in the head of your HTML document.
  // don't do this in real life
  
  return allHiraganaCharacter;
}


