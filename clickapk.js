


let addFile = document.querySelector('.A-click');
let addFolder = document.querySelector('.B-click');


// addFile.addEventListener('click', () => {
//     let Array = [];
//     Array = addfileFolder()
//     let newFile = Array[0];
//     let fileNameIn = Array[1];

//     fileNameIn.addEventListener('keypress', (e) => {

//         if (e.key === 'Enter') {

//             newFile.classList.add('MSindex742-23b2')

//             let fileExet = [];
//             fileExet = getFileNameAndExtension(fileNameIn.value, '')
//             let FileName = fileExet[0];
//             let Extension = fileExet[1];


//             newFile.innerHTML = `<span class="Ms7c${Extension}-2ex">${returnSignextensionOfln(Extension)}</span>
//             <span>${FileName}.${Extension}</span>`;

//             newFile.setAttribute('id', `M${Extension}M${FileName}M`);

//             let VisibleContainerForEdit = document.createElement('div');
//             VisibleContainerForEdit.classList.add('EditFHere726');
//             VisibleContainerForEdit.classList.add(`M${Extension}M`);
//             VisibleContainerForEdit.classList.add(`M${Extension}M${FileName}M`);
//             // VisibleContainerForEdit.setAttribute('contenteditable', 'true');
//             VisibleContainerForEdit.setAttribute('spellcheck', 'false');
//         }



//     });




// });


function returnSignextensionOfln(str) {



    if (str === 'html') {
        return '<>';
    } else if (str === 'css') {
        return '#';

    }
    else if (str === 'js') {
        return 'JS';
    } else {
        // return `<i class="fa-solid fa-angle-down"></i>`;
        return `<i class="fa-solid fa-angle-right">D</i>`;
    }
}


function addfileFolder() {

    let newFile = document.createElement('div');
    let fileNameIn = document.createElement('input');

    fileNameIn.classList.add('file-name-input');
    newFile.append(fileNameIn);

    document.querySelector('.files-folder-hidden').insertBefore(newFile, document.querySelector('.files-folder-hidden').children[0]);
    fileNameIn.addEventListener('keypress', (e) => {

    })


    return [newFile, fileNameIn];

}


function getFileNameAndExtension(FileName, Extension) {
    if (FileName.slice(-5) === '.html') {

        FileName = FileName.slice(0, -5);
        Extension = 'html';


    } else if (FileName.slice(-4) === '.css') {

        FileName = FileName.slice(0, -5);
        Extension = 'css';

    } else if (FileName.slice(-3) === '.js') {

        FileName = FileName.slice(0, -5);
        Extension = 'js';

    }

    return [FileName, Extension]
}


let UtfonForInrtacti1firl = document.querySelector('.UtfonForInrtacti1firl');

function MSaddFiles1SUp2DDownPC(PCClass = 'mahtabHgtmlCssJs', Msnew4File, MSnew4FileInp, keyIn) {

    Msnew4File.classList.add('MSfiles2files742-23b2');
    MSnew4FileInp.classList.add('inExtension');
    Msnew4File.append(MSnew4FileInp);

    document.querySelector(`.${PCClass}`).insertBefore(Msnew4File, document.querySelector(`.${PCClass}`).children[0]);





    MSnew4FileInp.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || keyIn === 'Enter') {
            // e.preventDefault();

            let NewclassofFile = MSnew4FileInp.value;

            console.log(NewclassofFile);

            // let indexDot = NewclassofFile.indexOf('.');
            // let str = NewclassofFile.slice(indexDot + 1).trim();
            // let newIdd = NewclassofFile.slice(0, indexDot).trim();

            Msnew4File.innerHTML = `<div class="MScollectionOfFiles23">
            <div class="MScollectionOfFilesSpan23 Ms7c${NewclassofFile}-2exFrEntL2">
                <span class="Ms7c${NewclassofFile}-2ex">${returnSignextensionOfln(NewclassofFile)}</span>
                <span>${NewclassofFile}</span>
            </div>              
        
            <div class="MsHidfileup2 Ms7c${NewclassofFile}-2exFrHidFilL2"></div>
        </div>
        `;


            let MseventLis4bM = document.querySelector(`.Ms7c${NewclassofFile}-2exFrEntL2`);

            let rightDonwnArr1M = document.querySelector(`.Ms7c${NewclassofFile}-2ex`);
            let count = 0;

            let hideFileDoc = document.querySelector(`.Ms7c${NewclassofFile}-2exFrHidFilL2`);

            Msnew4File.addEventListener('click', () => {

                if (UtfonForInrtacti1firl.classList.contains('UtfonForInrtacti1firl')) {


                    rightDonwnArr1M.innerHTML = `<i class="fa-solid fa-angle-down">E</i>`;
                    UtfonForInrtacti1firl.classList.remove('UtfonForInrtacti1firl');


                    UtfonForInrtacti1firl = Msnew4File;
                    UtfonForInrtacti1firl.classList.add('UtfonForInrtacti1firl');

                    Msnew4File.classList.add('MssrchCurFileMs22');
                    hideFileDoc.classList.add('UtfonForInrtacti1firl');

                } else {

                    rightDonwnArr1M.innerHTML = `<i class="fa-solid fa-angle-right">F</i>`;

                }

                count++;

            })


            // newFile.setAttribute('id', `M${strExtension}M${newIdd}M`);

            let VisibleContainerForEdit = document.createElement('div');
            VisibleContainerForEdit.classList.add('MsaddFiles-EExt42c');
            VisibleContainerForEdit.classList.add(`MSfileM${NewclassofFile}M`);

            // VisibleContainerForEdit.classList.add(`M${strExtension}M${newIdd}M`);

            document.querySelector(`.${PCClass}`).insertBefore(VisibleContainerForEdit, document.querySelector(`.${PCClass}`).children[0]);

            // fileEventListenerForActivity(newFile);
            console.log('1');


        }
    });
}



let active = document.querySelector('.files-folder-hidden');
let A = document.querySelector('.A-click');
let B = document.querySelector('.B-click');
let cnt = 0;


A.addEventListener('click', () => {
    let act = document.querySelector('.active');
    adder(A, act);

});


function adder(A, actf) {

    let div = document.createElement('div');
    let div2 = document.createElement('div');

    console.log("Hi");

    div.classList.add('C');
    div.classList.add(`C${cnt}`);
    div.innerHTML = `<div>mahtab${cnt}sha</div>`;
    div2.classList.add(`C${cnt}`);
    div2.classList.add(`CP`);
    div2.classList.add(`CP${cnt++}`);
    div.append(div2);
    actf.append(div);

    console.log("Hi Baby");



    div.addEventListener('click', (e) => {
        e.stopPropagation();

        console.log("Hi Baby How");

        if (div.classList.contains('Practive')) {
            div.classList.remove('Practive');
        }

        if (active.classList.contains('active')) {

            console.log("Hi Baby How are");

            if (!div.parentElement.classList.contains('main') || div.parentElement.classList.contains('active')) {
                active.classList.remove('active');
                active.classList.add('Practive');

                console.log("Hi Baby How are you");

            }

            active = div2;
            active.classList.add('active');

            console.log("Hi Baby How are you Okey");

        }
    })
    if (1) {

    }
}

