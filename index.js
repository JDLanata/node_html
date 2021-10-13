const inquirer = require('inquirer');
const fs = require('fs');



function genHtml(data) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <!-- name, location, bio, LinkedIn URL, and GitHub URL -->
    <div class="jumbotron">
        <h1 id='name' class="display-4">Hello, ${data.username}</h1>
        <p id='location' class="lead">You are from ${data.location}</p>
        <hr class="my-4">
        <p id='bio'>You like ${data.bio}.</p>
        <p id='gitHub'>Your GitHub URL is ${data.gitHub} </p>
        <p id='linkedIn'>Your LinkedIn URL is ${data.linkedIn}  </p>
      </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body>

</html>`
};
function userPromt() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your name?',
            
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
            
        },
        {
            type: 'input',
            name: 'bio',
            message: 'What is your favorite food?',
            
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub URL?',
            
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'What is your LinkedIn URL?',
            
        },
        
    ])
    .then((ans) => {
        
        
        fs.writeFile('index.html', genHtml(ans), (err) => {
            err ? console.log(err) : console.log('Success!')
        })
    })
}


userPromt();