
let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

let commandList = ['bio', 'clear', 'protfolio', 'resume', 'projects', 'skills', 'certificates', 'github', 'contact'];

functionCalls();

function functionCalls() {
    checkWindowClick();
    checkPressedEnter();
}

function checkWindowClick() {
    terminalBody.addEventListener ('click', function(event){
        input.focus();
    });
}

function checkPressedEnter() {
    input.addEventListener('keydown', function(e){
        if (e.key === 'Enter') {
            execute(input.value);
        }
    });
}

function execute(inputValue) {
    let temp = input.value;
    input.remove();
    terminalBody.innerHTML += temp;
    checkCommand(temp);
    addInput();
}

function executeCommand(command){

    terminalBody.innerHTML += '<br><br>'

    for(let i=0; i<data[command].length; ++i){

        terminalBody.innerHTML += `${data[command][i].name}: ` ;

        if(data[command][i].value.includes('http')){
            terminalBody.innerHTML += `<a href="${data[command][i].value}" target="_blank">${data[command][i].value}</a><br>` ;
        } else{
            terminalBody.innerHTML += `${data[command][i].value}<br>` ;
        }
    }
}

function checkCommand(inputCommand){

    let command = inputCommand.split(" ")[0];

    if(command){
        if(command === 'clear'){ commandClear();}
        // else if(command === 'echo') {commandEcho(inputCommand);}
        else if(command === 'github'){ commandGithub(command)}
        else if(command === 'start'){ commandHelp();}
        else if(command === 'resume'){ commandResume();}
        //else if(command === 'portfolio'){ commandPortfolio();}
        else if(commandList.includes(command)){ executeCommand(command);}
        else{
            terminalBody.innerHTML +=  '<br>' + inputCommand + ' is not recognized as a command, Try \"start"\"<br>';
        }
    }
    else {
        terminalBody.innerHTML += '<br>';
    }
}

function addInput() {
    terminalBody.innerHTML += '<br> > <input type="text" autofocus />';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}

function commandClear() {
    terminalBody.innerHTML = ``;
}

function commandHelp() {
    terminalBody.innerHTML += '<br><br>';
    for(let i=0; i<commandList.length; i++) {
        terminalBody.innerHTML += `${commandList[i]}<br>`;
    }
}

function commandGithub() {
    terminalBody.innerHTML += `<br><i class="fa fa-github"> <a href="https://github.com/${data.github[0].value}" target="_blank">${data.github[0].value}</a><br>`;
    terminalBody.innerHTML += '<br>';
}

function commandResume() {
    terminalBody.innerHTML += `<br><a href="resume.pdf"/${data.resume} target="_blank">Resume</a><br>`;
}

// function commandPortfolio() {
//     terminalBody.innerHTML += `<br><a href=""/${data.portfolio} tartget="_blank">Portfolio</a><br>`;


// function commandEcho(inputCommand) {
//     terminalBody.innerHTML += '<br>';
//     for(let i=1; i<inputCommand.split(' ').length; i++){
//         terminalBody.innerHTML += inputCommand.split(' ')[i] + ' ';
//     }
//     terminalBody.innerHTML += '<br>';
// }
