'use strict'
const image = new Image()
image.src = 'image.webp'
const donate = new Image()
donate.src = 'donate.webp'

const progress = document.getElementsByClassName('progress-bar')[0]
const percentageText = document.getElementById('percentage')
const _window = document.getElementById('window')
const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('no')
const text = document.getElementById('text')
const cRoubles = document.getElementById('cRoubles')
const composition = document.getElementById('composition')
const playPause = document.getElementById('play-pause')
const playsNow = document.getElementById('plays-now')

let percentage = 0
let p = '0%'
const tRoubles = Math.floor(Math.random() * 50000000) + 50000000
document.getElementById('tRoubles').innerText = tRoubles
const gachiPercentage = Math.floor(Math.random() * 84) + 15

const audioFiles = {
    'Авторитеты (Remix BOTG) Jamik (<a href="https://www.youtube.com/watch?v=P_UkJYwUe8I&ab_channel=%D0%A1%D1%83%D0%B1%D0%BE%D0%91%D1%80%D0%B0%D1%82" target="_blank">remix</a>)': new Audio('https://d6.hotplayer.ru/downloadm/92b690a4a2fe6c7d953da979b45825df/622244479_456239237/eca2627f3f42-f4f03f2d2c22-3ba13edb0f2/Jamik%20-%20%D0%90%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D1%82%D0%B5%D1%82%D1%8B%20%28Remix%29.mp3'),
   
}

let audioI = 0

const yes = () => {
    
    percentage += 3
    if (percentage >= gachiPercentage) {
       
        var audio = document.getElementById('audioPlayer');


        audio.play();
        audio.hidden = false
       
        playsNow.innerHTML = Object.keys(audioFiles)[audioI]
        composition.hidden = false
        _window.style.backgroundImage = `url('${image.src}')`
        document.body.style.backgroundImage = `url('${image.src}')`
        document.getElementById('website').textContent = 'Bondage gay website'
        const currency = document.getElementsByClassName('currency')
        for (let i = 0; i < currency.length; i++)
            currency.item(i).textContent = 'bucks'
        document.getElementById('target').textContent = ' fisting ass'
    }
    progress.setAttribute('aria-valuenow', percentage)
    p = String(percentage) + '%'
    progress.style.width = p
    progress.innerText = p
    percentageText.innerText = p
    cRoubles.innerText = Math.floor(tRoubles / 100 * percentage)
    if (percentage == 100) {
        _window.style.backgroundImage = `url('${donate.src}')`
        text.innerText = 'КАЗИНО взломано. Деньги пошли на оплату fisting.'
        noBtn.disabled = 'disabled'
        yesBtn.disabled = 'disabled'
    }
}

const playpause = () => {
    if (playPause.textContent === '▶️') {
        playPause.textContent = '⏸'
        Object.values(audioFiles)[audioI].play()
    } else {
        playPause.textContent = '▶️'
        Object.values(audioFiles)[audioI].pause()
    }
}

const getAudio = (i) => {
    const key = Object.keys(audioFiles)[i]
    if (typeof audioFiles[key] === 'string') {
        audioFiles[key] = eval(audioFiles[key])
        audioFiles[key].onended = forward
    }
    return audioFiles[key]
}

const forward = () => {
    const a = Object.values(audioFiles)[audioI]
    a.pause()
    a.currentTime = 0
    audioI = audioI === Object.keys(audioFiles).length - 1 ? 0 : audioI + 1
    if (playPause.textContent === '⏸')
        getAudio(audioI).play()
    playsNow.innerHTML = Object.keys(audioFiles)[audioI]
}

Object.values(audioFiles)[0].onended = forward

const back = () => {
    const a = Object.values(audioFiles)[audioI]
    a.pause()
    a.currentTime = 0
    audioI = audioI === 0 ? Object.keys(audioFiles).length - 1 : audioI - 1
    if (playPause.textContent === '⏸')
        getAudio(audioI).play()
    playsNow.innerHTML = Object.keys(audioFiles)[audioI]
}
