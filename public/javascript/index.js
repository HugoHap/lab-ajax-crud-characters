const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(res => {

        let text = ""
        res.data.forEach(element =>
          text += `<div class="character-info">
          <div class="id">Id: ${element.id}</div>
          <div class="name">Name: ${element.name}</div>
            <div class="occupation">Occupation: ${element.occupation}</div>
            <div class="cartoon">Is a cartoon? ${element.cartoon}</div>
            <div class="weapon">Weapon: ${element.weapon}</div>
            </div>`
        );

        document.querySelector(".characters-container").innerHTML = text

      })
      .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.querySelector(".charID").value

    charactersAPI
      .getOneRegister(id)
      .then(res => {

        let text = ""
        text += `<div class="character-info">
           <div class="name">Name: ${res.data.name}</div>
            <div class="occupation">Occupation: ${res.data.occupation}</div>
            <div class="cartoon">Is a cartoon? ${res.data.cartoon}</div>
            <div class="weapon">Weapon: ${res.data.weapon}</div>
            </div>`


        document.querySelector(".characters-container").innerHTML = text

      })
      .catch(err => console.log(err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.querySelector(".deleteID").value

    charactersAPI
      .deleteOneRegister(id)
      .then(res => {


        document.querySelector("#delete-one").style.backgroundColor = "green"

      })
      .catch(
        document.querySelector("#delete-one").style.backgroundColor = "blue"
      )

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let inputs = document.querySelectorAll("#edit-character-form input")

    let idEdit = inputs[0].value 

    const characterData = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }
    console.log(idEdit);
    console.log(characterData);

    charactersAPI
      .updateOneRegister(idEdit, characterData)
      .then(res => {

        document.querySelector("#send-data-edit").style.backgroundColor = "green"

      })
      .catch(
        document.querySelector("#send-data-edit").style.backgroundColor = "blue"
      )

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let inputs = document.querySelectorAll("#new-character-form input")

    const characterData = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value
    }
    charactersAPI
      .createOneRegister(characterData)
      .then(res => {




        document.querySelector("#send-data").style.backgroundColor = "green"

      })
      .catch(document.querySelector("#send-data").style.backgroundColor = "blue")
  });
});