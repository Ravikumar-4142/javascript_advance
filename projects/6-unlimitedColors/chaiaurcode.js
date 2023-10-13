// generate random color
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color

    
}
let interValID;
const startChnagingColor = function () {
    if (!interValID) {
        interValID = setInterval(chnageBgColor, 1000)  
    }
    function chnageBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

document.querySelector('#start').addEventListener('click', startChnagingColor)

const stopChnagingColor = function () {
    clearInterval(interValID)
    interValID = null
}
document.querySelector('#stop').addEventListener('click', stopChnagingColor)


console.log(randomColor())