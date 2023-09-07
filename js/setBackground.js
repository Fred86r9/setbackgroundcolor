console.log("something")

const inpColor = document.querySelector(".inpColor");
console.log(inpColor);

const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

const pbSetColor = document.querySelector(".pbSetColor");
console.log(pbSetColor);

const inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker);

const pTags = document.getElementsByTagName("p");
console.log(pTags);

const pArray = Array.from(pTags);
console.log(pArray);

const bdy = document.querySelector("body");
console.log(bdy);

const pbIncreaseFont = document.querySelector(".pbIncreaseFont");
console.log(pbIncreaseFont);

const pbDecreaseFont = document.querySelector(".pbDecreaseFont");
console.log(pbDecreaseFont);

let fontSize = 10;

pbSetColor.textContent = "Tryk på mig for at ændre farve";



function increaseFontAll()
{
    fontSize++;
    console.log('size: ' + fontSize);
    pArray.forEach(changePtags);

}

function decreaseFontAll()
{
    fontSize--;
    console.log('size ' + fontSize);
    pArray.forEach(changePtags);
}

function changePtags(element)
{
    console.log(element);
    element.style.fontSize = fontSize + 'px';
}

function setBackgroundColour()
{
    let col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker()
{
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function increaseFont(element)
{
    let fontSize = element.style.fontSize;
    console.log("Size: " + fontSize);
    element.style.fontSize = 20 + 'px';
    fontSize = element.style.fontSize;
    console.log(fontSize);
}

pArray.forEach(increaseFont);

pbSetColor.addEventListener('click', setBackgroundColour);

document.addEventListener('keyup', setBackgroundColour);

inpColorPicker.addEventListener('input', useColorPicker);

pbIncreaseFont.addEventListener('click', increaseFontAll);