let AllOverLine = document.querySelectorAll('.overline');
let activeLine = document.querySelector('span');
activeLine.classList.add('activeLine');
let add = 0


TextArea.addEventListener('input', (e) => {
    let lastIN = TextArea.selectionStart;
    let lineNumber = TextArea.value.slice(0, lastIN).split('\n').length;
    // console.log(lineNumber)
    // if (e.data === '<') {
    //     add = -1;
    // } else if (e.data === '>') {
    //     add = 0;
    // }
    if (activeLine.classList.contains('activeLine')) {
        activeLine.classList.remove('activeLine');
        activeLine = AllOverLine[lineNumber + add];
        activeLine.classList.add('activeLine');
    }
});

TextArea.addEventListener('click', (e) => {
    let lastIN = TextArea.selectionStart;
    let lineNumber = TextArea.value.slice(0, lastIN).split('\n').length;

   
    if (activeLine.classList.contains('activeLine')) {
        activeLine.classList.remove('activeLine');
        activeLine = AllOverLine[lineNumber];
        activeLine.classList.add('activeLine');
    }
})