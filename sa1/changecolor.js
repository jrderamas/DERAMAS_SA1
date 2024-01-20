function Change() {
    const fontRed = Math.floor(Math.random() * 256);
    const fontGreen = Math.floor(Math.random() * 256);
    const fontBlue = Math.floor(Math.random() * 256);

    const bgColorRed = Math.floor(Math.random() * 256);
    const bgColorGreen = Math.floor(Math.random() * 256);
    const bgColorBlue = Math.floor(Math.random() * 256);

    document.body.style.color = `rgb(${fontRed}, ${fontGreen}, ${fontBlue})`;
    document.querySelector('.container').style.backgroundColor = `rgb(${bgColorRed}, ${bgColorGreen}, ${bgColorBlue})`;
}
