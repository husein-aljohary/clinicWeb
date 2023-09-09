
function setData() {
    const txt = `We are located in more than one city<np>
        All departments for your health care<np>
        Best doctors ever ...`;
    const outputDiv = document.getElementById('typed-content');
    return [txt, outputDiv]
    };
    function typeText() {
    const res =  setData();
    const txt = res[0];
    const outputDiv = res[1];
    const splittedTxt = txt.split('<np>');
    let pElements = [];
    splittedTxt.forEach((item, index) => {
    const p = document.createElement('p');
    outputDiv.appendChild(p);
    });
    const allParas = outputDiv.querySelectorAll('p');
    let i = 0;
    let currentPara = 0;
    const timerId = setInterval(() => {
    allParas[currentPara].innerHTML += splittedTxt[currentPara].charAt(i);
    i++;
    if (i === splittedTxt[currentPara].length) {
    currentPara++;
    i=0;
    if (currentPara === splittedTxt.length) {
    clearInterval(timerId);
    }
    }
    },50);
    }
    typeText();





    