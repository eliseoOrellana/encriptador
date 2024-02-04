function processText() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    const operation = document.getElementById("operation").value;
    let outputText = "";
    const warning = document.getElementById("warning");

    // Asegúrate de que solo haya minúsculas en el texto de entrada
    inputText = inputText.replace(/[^a-záéíóúü ]/g, '');

    if (operation === "encrypt") {
        outputText = encryptText(removeAccents(inputText));
    } else if (operation === "decrypt") {
        outputText = decryptText(removeAccents(inputText));
    }

    document.getElementById("outputText").value = outputText;

    
    if (inputText !== removeAccents(inputText)) {
        warning.style.display = "block";
        setTimeout(() => {
            warning.style.display = "none";
            document.getElementById("operation").value = "encrypt";
        }, 3000);
    }
}


function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text
        .split(" ")
        .map(word => decryptWord(word))
        .join(" ");
}

function decryptWord(word) {
    return word
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}