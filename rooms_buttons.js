const ipcRender = require('electron').ipcRenderer;

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

room1Btn.addEventListener('click', ()=>{
  if (room1Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient')
  } else if(room1Btn.classList.contains('btn-fill')){
    room1Btn.classList.remove('btn-fill');
    room1Btn.classList.add('btn-empty');
  }
})
room2Btn.addEventListener('click', ()=>{
  if (room2Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room2')
  } else if(room2Btn.classList.contains('btn-fill')){
    room2Btn.classList.remove('btn-fill');
    room2Btn.classList.add('btn-empty');
  }
})
room3Btn.addEventListener('click', ()=>{
  if (room3Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room3')
  } else if(room3Btn.classList.contains('btn-fill')){
    room3Btn.classList.remove('btn-fill');
    room3Btn.classList.add('btn-empty');
  }
})
room4Btn.addEventListener('click', ()=>{
  if (room4Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room4')
  } else if(room4Btn.classList.contains('btn-fill')){
    room4Btn.classList.remove('btn-fill');
    room4Btn.classList.add('btn-empty');
  }
})
room5Btn.addEventListener('click', ()=>{
  if (room5Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room5')
  } else if(room5Btn.classList.contains('btn-fill')){
    room5Btn.classList.remove('btn-fill');
    room5Btn.classList.add('btn-empty');
  }
})
room6Btn.addEventListener('click', ()=>{
  if (room6Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room6')
  } else if(room6Btn.classList.contains('btn-fill')){
    room6Btn.classList.remove('btn-fill');
    room6Btn.classList.add('btn-empty');
  }
})
room7Btn.addEventListener('click', ()=>{
  if (room7Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room7')
  } else if(room7Btn.classList.contains('btn-fill')){
    room7Btn.classList.remove('btn-fill');
    room7Btn.classList.add('btn-empty');
  }
})
room8Btn.addEventListener('click', ()=>{
  if (room8Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room8')
  } else if(room8Btn.classList.contains('btn-fill')){
    room8Btn.classList.remove('btn-fill');
    room8Btn.classList.add('btn-empty');
  }
})
room9Btn.addEventListener('click', ()=>{
  if (room9Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room9')
  } else if(room9Btn.classList.contains('btn-fill')){
    room9Btn.classList.remove('btn-fill');
    room9Btn.classList.add('btn-empty');
  }
})
room10Btn.addEventListener('click', ()=>{
  if (room10Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room10')
  } else if(room10Btn.classList.contains('btn-fill')){
    room10Btn.classList.remove('btn-fill');
    room10Btn.classList.add('btn-empty');
  }
})
room11Btn.addEventListener('click', ()=>{
  if (room11Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room11')
  } else if(room11Btn.classList.contains('btn-fill')){
    room11Btn.classList.remove('btn-fill');
    room11Btn.classList.add('btn-empty');
  }
})
room12Btn.addEventListener('click', ()=>{
  if (room12Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room12')
  } else if(room12Btn.classList.contains('btn-fill')){
    room12Btn.classList.remove('btn-fill');
    room12Btn.classList.add('btn-empty');
  }
})
room13Btn.addEventListener('click', ()=>{
  if (room13Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room13')
  } else if(room13Btn.classList.contains('btn-fill')){
    room13Btn.classList.remove('btn-fill');
    room13Btn.classList.add('btn-empty');
  }
})
room14Btn.addEventListener('click', ()=>{
  if (room14Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room14')
  } else if(room14Btn.classList.contains('btn-fill')){
    room14Btn.classList.remove('btn-fill');
    room14Btn.classList.add('btn-empty');
  }
})
room15Btn.addEventListener('click', ()=>{
  if (room15Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room15')
    } else if(room15Btn.classList.contains('btn-fill')){
    room15Btn.classList.remove('btn-fill');
    room15Btn.classList.add('btn-empty');
  }
})
room16Btn.addEventListener('click', ()=>{
  if (room16Btn.classList.contains('btn-empty')){
    ipcRender.send('synchronous-message', 'newPatient-room16')
  } else if(room16Btn.classList.contains('btn-fill')){
    room16Btn.classList.remove('btn-fill');
    room16Btn.classList.add('btn-empty');
  }
})

ipcRender.on('message', (event, message) => {
  if(message=='change-btn-1-color'){
      room1Btn.classList.remove('btn-empty');
      room1Btn.classList.add('btn-fill');

    } else if(message=='change-btn-2-color'){
      room2Btn.classList.remove('btn-empty');
      room2Btn.classList.add('btn-fill');

    } else if(message=='change-btn-3-color'){
      room3Btn.classList.remove('btn-empty');
      room3Btn.classList.add('btn-fill');

    } else if(message=='change-btn-4-color'){
      room4Btn.classList.remove('btn-empty');
      room4Btn.classList.add('btn-fill');

    } else if(message=='change-btn-5-color'){
      room5Btn.classList.remove('btn-empty');
      room5Btn.classList.add('btn-fill');

    } else if(message=='change-btn-6-color'){
      room6Btn.classList.remove('btn-empty');
      room6Btn.classList.add('btn-fill');

    } else if(message=='change-btn-7-color'){
      room7Btn.classList.remove('btn-empty');
      room7Btn.classList.add('btn-fill');

    } else if(message=='change-btn-8-color'){
      room8Btn.classList.remove('btn-empty');
      room8Btn.classList.add('btn-fill');

    } else if(message=='change-btn-9-color'){
      room9Btn.classList.remove('btn-empty');
      room9Btn.classList.add('btn-fill');

    } else if(message=='change-btn-10-color'){
      room10Btn.classList.remove('btn-empty');
      room10Btn.classList.add('btn-fill');

    } else if(message=='change-btn-11-color'){
      room11Btn.classList.remove('btn-empty');
      room11Btn.classList.add('btn-fill');

    } else if(message=='change-btn-12-color'){
      room12Btn.classList.remove('btn-empty');
      room12Btn.classList.add('btn-fill');

    } else if(message=='change-btn-13-color'){
      room13Btn.classList.remove('btn-empty');
      room13Btn.classList.add('btn-fill');

    } else if(message=='change-btn-14-color'){
      room14Btn.classList.remove('btn-empty');
      room14Btn.classList.add('btn-fill');

    } else if(message=='change-btn-15-color'){
      room15Btn.classList.remove('btn-empty');
      room15Btn.classList.add('btn-fill');

    } else if(message=='change-btn-16-color'){
      room16Btn.classList.remove('btn-empty');
      room16Btn.classList.add('btn-fill');
    }
    })
