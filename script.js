let names = ['張彥君', '劉愛育', '林君利', '林宛齊', '黃春宏', '周子瑜']

window.onload = function () {
    let n=names[Math.floor(Math.random()*names.length)]
    document.getElementById('custum-name').innerText=n
    document.getElementById('custum-date').innerText = date()
    document.getElementById('custum-color').classList.add('backgcolor_' + day())
    console.log(n)
}
function date() {
    let d = new Date()
    let month = d.getMonth() + 1
    if (month < 10) { month = '0' + month }
    let date = d.getDate()
    if (date < 10) { date = '0' + date }
    return month + '/' + date
}
function day() {
    return new Date().getDay()
}

