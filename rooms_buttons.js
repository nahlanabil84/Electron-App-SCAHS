const ipcRender = require('electron').ipcRenderer;
const remote = require('electron')

var room1Btn = document.getElementById('btnRoom1')
var room2Btn = document.getElementById('btnRoom2')
var room3Btn = document.getElementById('btnRoom3');
var room4Btn = document.getElementById('btnRoom4');
var room5Btn = document.getElementById('btnRoom5');
var room6Btn = document.getElementById('btnRoom6');
var room7Btn = document.getElementById('btnRoom7');
var room8Btn = document.getElementById('btnRoom8');
var room9Btn = document.getElementById('btnRoom9');
var room10Btn = document.getElementById('btnRoom10');
var room11Btn = document.getElementById('btnRoom11');
var room12Btn = document.getElementById('btnRoom12');
var room13Btn = document.getElementById('btnRoom13');
var room14Btn = document.getElementById('btnRoom14');
var room15Btn = document.getElementById('btnRoom15');
var room16Btn = document.getElementById('btnRoom16');

room1Btn.addEventListener('click', changeBtn1State)
room2Btn.addEventListener('click', changeBtn2State)
room3Btn.addEventListener('click', changeBtn3State)
room4Btn.addEventListener('click', changeBtn4State)
room5Btn.addEventListener('click', changeBtn5State)
room6Btn.addEventListener('click', changeBtn6State)
room7Btn.addEventListener('click', changeBtn7State)
room8Btn.addEventListener('click', changeBtn8State)
room9Btn.addEventListener('click', changeBtn9State)
room10Btn.addEventListener('click', changeBtn10State)
room11Btn.addEventListener('click', changeBtn11State)
room12Btn.addEventListener('click', changeBtn12State)
room13Btn.addEventListener('click', changeBtn13State)
room14Btn.addEventListener('click', changeBtn14State)
room15Btn.addEventListener('click', changeBtn15State)
room16Btn.addEventListener('click', changeBtn16State)

ipcRender.on('message', (event, message) => {
  if(message=='change-btn-1-color'){
      room1Btn.classList.remove('btn-empty');
      room1Btn.classList.add('btn-fill');}
    })

function changeBtn1State(){
  if (room1Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient')
  } else if(room1Btn.classList.contains('btn-fill')){
    room1Btn.classList.remove('btn-fill');
    room1Btn.classList.add('btn-empty');
  }
}

function changeBtn2State(){
  alert('Hello button 2')

  if (room2Btn.classList.contains('btn-empty')){
    room2Btn.classList.remove('btn-empty');
    room2Btn.classList.add('btn-fill');
  } else if(room2Btn.classList.contains('btn-fill')){
    room2Btn.classList.remove('btn-fill');
    room2Btn.classList.add('btn-empty');
  }
}

function changeBtn3State(){
  alert('Hello button 3')

  if (room3Btn.classList.contains('btn-empty')){
    room3Btn.classList.remove('btn-empty');
    room3Btn.classList.add('btn-fill');
  } else if(room3Btn.classList.contains('btn-fill')){
    room3Btn.classList.remove('btn-fill');
    room3Btn.classList.add('btn-empty');
  }
}

function changeBtn4State(){
  alert('Hello button 4')

  if (room4Btn.classList.contains('btn-empty')){
    room4Btn.classList.remove('btn-empty');
    room4Btn.classList.add('btn-fill');
  } else if(room4Btn.classList.contains('btn-fill')){
    room4Btn.classList.remove('btn-fill');
    room4Btn.classList.add('btn-empty');
  }
}

function changeBtn5State(){
  alert('Hello button 5')

  if (room5Btn.classList.contains('btn-empty')){
    room5Btn.classList.remove('btn-empty');
    room5Btn.classList.add('btn-fill');
  } else if(room5Btn.classList.contains('btn-fill')){
    room5Btn.classList.remove('btn-fill');
    room5Btn.classList.add('btn-empty');
  }
}

function changeBtn6State(){
  alert('Hello button 6')

  if (room6Btn.classList.contains('btn-empty')){
    room6Btn.classList.remove('btn-empty');
    room6Btn.classList.add('btn-fill');
  } else if(room6Btn.classList.contains('btn-fill')){
    room6Btn.classList.remove('btn-fill');
    room6Btn.classList.add('btn-empty');
  }
}

function changeBtn7State(){
  alert('Hello button 7')

  if (room7Btn.classList.contains('btn-empty')){
    room7Btn.classList.remove('btn-empty');
    room7Btn.classList.add('btn-fill');
  } else if(room7Btn.classList.contains('btn-fill')){
    room7Btn.classList.remove('btn-fill');
    room7Btn.classList.add('btn-empty');
  }
}

function changeBtn8State(){
  alert('Hello button 8')

  if (room8Btn.classList.contains('btn-empty')){
    room8Btn.classList.remove('btn-empty');
    room8Btn.classList.add('btn-fill');
  } else if(room8Btn.classList.contains('btn-fill')){
    room8Btn.classList.remove('btn-fill');
    room8Btn.classList.add('btn-empty');
  }
}

function changeBtn9State(){
  alert('Hello button 9')

  if (room9Btn.classList.contains('btn-empty')){
    room9Btn.classList.remove('btn-empty');
    room9Btn.classList.add('btn-fill');
  } else if(room9Btn.classList.contains('btn-fill')){
    room9Btn.classList.remove('btn-fill');
    room9Btn.classList.add('btn-empty');
  }
}

function changeBtn10State(){
  alert('Hello button 10')

  if (room10Btn.classList.contains('btn-empty')){
    room10Btn.classList.remove('btn-empty');
    room10Btn.classList.add('btn-fill');
  } else if(room10Btn.classList.contains('btn-fill')){
    room10Btn.classList.remove('btn-fill');
    room10Btn.classList.add('btn-empty');
  }
}

function changeBtn11State(){
  alert('Hello button 11')

  if (room11Btn.classList.contains('btn-empty')){
    room11Btn.classList.remove('btn-empty');
    room11Btn.classList.add('btn-fill');
  } else if(room11Btn.classList.contains('btn-fill')){
    room11Btn.classList.remove('btn-fill');
    room11Btn.classList.add('btn-empty');
  }
}

function changeBtn12State(){
  alert('Hello button 12')

  if (room12Btn.classList.contains('btn-empty')){
    room12Btn.classList.remove('btn-empty');
    room12Btn.classList.add('btn-fill');
  } else if(room12Btn.classList.contains('btn-fill')){
    room12Btn.classList.remove('btn-fill');
    room12Btn.classList.add('btn-empty');
  }
}

function changeBtn13State(){
  alert('Hello button 13')

  if (room13Btn.classList.contains('btn-empty')){
    room13Btn.classList.remove('btn-empty');
    room13Btn.classList.add('btn-fill');
  } else if(room13Btn.classList.contains('btn-fill')){
    room13Btn.classList.remove('btn-fill');
    room13Btn.classList.add('btn-empty');
  }
}

function changeBtn14State(){
  alert('Hello button 14')

  if (room14Btn.classList.contains('btn-empty')){
    room14Btn.classList.remove('btn-empty');
    room14Btn.classList.add('btn-fill');
  } else if(room14Btn.classList.contains('btn-fill')){
    room14Btn.classList.remove('btn-fill');
    room14Btn.classList.add('btn-empty');
  }
}

function changeBtn15State(){
  alert('Hello button 15')

  if (room15Btn.classList.contains('btn-empty')){
    room15Btn.classList.remove('btn-empty');
    room15Btn.classList.add('btn-fill');
  } else if(room15Btn.classList.contains('btn-fill')){
    room15Btn.classList.remove('btn-fill');
    room15Btn.classList.add('btn-empty');
  }
}

function changeBtn16State(){
  alert('Hello button 16')

  if (room16Btn.classList.contains('btn-empty')){
    room16Btn.classList.remove('btn-empty');
    room16Btn.classList.add('btn-fill');
  } else if(room16Btn.classList.contains('btn-fill')){
    room16Btn.classList.remove('btn-fill');
    room16Btn.classList.add('btn-empty');
  }
}
