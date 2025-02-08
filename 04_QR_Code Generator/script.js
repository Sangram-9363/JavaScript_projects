let qrText = document.querySelector('#qr-text');
let sizes = document.querySelector('#sizes');
let generateBtn = document.querySelector('#generateBtn');
let download = document.querySelector('#downloadBtn');
let qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmpty()
})

sizes.addEventListener('change', (e) => {
    size = e.target.value
    isEmpty();
})

function isEmpty() {
    qrText.value.length > 0 ? generateQRCode() : alert(`Please enter text or URL inside the text`);;
}

download.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img')

    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        download.setAttribute('href', imgAttr)
    }
    else {
        download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})


function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#000",
        colorDark: "#fff",
    });
}


