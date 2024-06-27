
function encriptar() {

    let textoParaEncriptar = document.getElementById("texto").value;
    if (textoParaEncriptar.length != 0) {
        let textoEncriptado = textoParaEncriptar
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
        document.getElementById("parrafo").textContent = textoEncriptado;

    } else {
        alert("Necesita ingresar un texto");
    }
}

function desencriptar() {
    let textoParaDesencriptar = document.getElementById("texto").value;
    if (textoParaDesencriptar != 0) {
        let textoDesencriptado = textoParaDesencriptar
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
        document.getElementById("parrafo").textContent = textoDesencriptado;
    } else {
        alert("Necesita ingresar un texto")
    }



}