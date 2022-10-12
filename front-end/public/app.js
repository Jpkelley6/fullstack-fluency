let resultsDiv = document.getElementById('results')

let searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', getAll)

let devURL = 'http://127.0.0.1:3000/api/'

function getAll() {
    fetch(`${devURL}games`)
      .then(response => response.json())
      .then(data => {
        let gameObj;
        for (let i =0; i < data.length; i++){
            gameObj = data[i]
            console.log(gameObj)
            let newDiv = document.createElement('div')
            newDiv.textContent = gameObj.game_name + ', ' + gameObj.game_platform + ', ' + gameObj.game_type
            resultsDiv.append(newDiv)
        }

    })
}