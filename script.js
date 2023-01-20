const text = document.getElementById("section-right");
const buttonEncode = document.getElementById("button-encode");
const buttonDecode = document.getElementById("button-decode");

function encode(string) {
    const resultEncode = string
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    text.innerHTML = `
        <div class="box-style box-text-output">
            <p id="text-output">${resultEncode}</p>
            <button id="button-copy">Copiar</button>
        </div>
    `;
}
  
function decode(string) {
    const resultDecode = string
                            .replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    text.innerHTML = `
        <div class="box-style box-text-output">
            <p id="text-output">${resultDecode}</p>
            <button id="button-copy">Copiar</button>
        </div>
    `;
}

buttonEncode.addEventListener("click", () => {
    encode(document.getElementById("text-of-user").value);
});

buttonDecode.addEventListener("click", () => {
    const string = document.getElementById("text-output").childNodes[0].data;
    decode(string);
});