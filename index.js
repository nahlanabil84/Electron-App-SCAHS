const {app,BrowserWindow,ipcMain}=require('electron')
const path=require('path')
const url=require('url')

global.mainRoomsWin = null;
global.loginWin = null;
global.registerPatientWin = null;

function createWindows() {
  mainRoomsWin =new BrowserWindow({width:800,height:600,show: false,resizable: false})
  mainRoomsWin.loadURL(url.format({
      pathname:path.join(__dirname,'index.html'),
      protocol:'file',
      slashes:true
  }))

  registerPatientWin =new BrowserWindow({parent: mainRoomsWin,width:800,height:600,frame:true,show: false,resizable: false})
  registerPatientWin.loadURL(url.format({
      pathname:path.join(__dirname,'register_patient_info.html'),
      protocol:'file',
      slashes:true
  }))
  registerPatientWin.on('close', (event) => {
    if (app.quitting) {
      registerPatientWin = null
    } else {
      event.preventDefault()
      registerPatientWin.hide()
    }
  });

  loginWin = new BrowserWindow({parent: mainRoomsWin,width:500,height:400,frame:false,resizable: false})
  loginWin.loadURL(url.format({
      pathname:path.join(__dirname,'login.html'),
      protocol:'file',
      slashes:true
  }))
  loginWin.on('close', (event) => {
    if (app.quitting) {
      loginWin = null
    } else {
      event.preventDefault()
      loginWin.hide()
    }
  });
 // registerPatientWin.openDevTools()
 mainRoomsWin.openDevTools()
 // loginWin.openDevTools()
}

app.on('ready', createWindows)

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('entry-accepted', (event, arg) => {
    if(arg=='loggedIn'){
        mainRoomsWin.show()
        loginWin.close()
    }
  })

ipcMain.on('synchronous-message', (event, arg) => {
      if(arg=='newPatient'){
        registerPatientWin.webContents.send ('message', 'addPatient-room1')
        registerPatientWin.show()
      } else if(arg =='newPatient-room2'){
        registerPatientWin.webContents.send ('message', 'addPatient-room2')
        registerPatientWin.show()
      } else if(arg =='newPatient-room3'){
        registerPatientWin.webContents.send ('message', 'addPatient-room3')
        registerPatientWin.show()
      } else if(arg =='newPatient-room4'){
        registerPatientWin.webContents.send ('message', 'addPatient-room4')
        registerPatientWin.show()
      } else if(arg =='newPatient-room5'){
        registerPatientWin.webContents.send ('message', 'addPatient-room5')
        registerPatientWin.show()
      } else if(arg =='newPatient-room6'){
        registerPatientWin.webContents.send ('message', 'addPatient-room6')
        registerPatientWin.show()
      } else if(arg =='newPatient-room7'){
        registerPatientWin.webContents.send ('message', 'addPatient-room7')
        registerPatientWin.show()
      } else if(arg =='newPatient-room8'){
        registerPatientWin.webContents.send ('message', 'addPatient-room8')
        registerPatientWin.show()
      } else if(arg =='newPatient-room9'){
        registerPatientWin.webContents.send ('message', 'addPatient-room9')
        registerPatientWin.show()
      } else if(arg =='newPatient-room10'){
        registerPatientWin.webContents.send ('message', 'addPatient-room10')
        registerPatientWin.show()
      } else if(arg =='newPatient-room11'){
        registerPatientWin.webContents.send ('message', 'addPatient-room11')
        registerPatientWin.show()
      } else if(arg =='newPatient-room12'){
        registerPatientWin.webContents.send ('message', 'addPatient-room12')
        registerPatientWin.show()
      } else if(arg =='newPatient-room13'){
        registerPatientWin.webContents.send ('message', 'addPatient-room13')
        registerPatientWin.show()
      } else if(arg =='newPatient-room14'){
        registerPatientWin.webContents.send ('message', 'addPatient-room14')
        registerPatientWin.show()
      } else if(arg =='newPatient-room15'){
        registerPatientWin.webContents.send ('message', 'addPatient-room15')
        registerPatientWin.show()
      } else if(arg =='newPatient-room16'){
        registerPatientWin.webContents.send ('message', 'addPatient-room16')
        registerPatientWin.show()
      } else if(arg=='cancelRegister') {
        // do nothing &
        registerPatientWin.close()
      }
    })

ipcMain.on('asynchronous-message', (event, arg) => {
      if(arg=='sendRegister') {
          //inform main window to change color &
          event.sender.send('asynchronous-reply', 'patientAdded')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room2'){
          event.sender.send('asynchronous-reply', 'patientAdded-room2')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room3'){
          event.sender.send('asynchronous-reply', 'patientAdded-room3')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room4'){
          event.sender.send('asynchronous-reply', 'patientAdded-room4')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room5'){
          event.sender.send('asynchronous-reply', 'patientAdded-room5')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room6'){
          event.sender.send('asynchronous-reply', 'patientAdded-room6')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room7'){
          event.sender.send('asynchronous-reply', 'patientAdded-room7')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room7'){
          event.sender.send('asynchronous-reply', 'patientAdded-room7')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room8'){
          event.sender.send('asynchronous-reply', 'patientAdded-room8')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room9'){
          event.sender.send('asynchronous-reply', 'patientAdded-room9')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room10'){
          event.sender.send('asynchronous-reply', 'patientAdded-room10')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room11'){
          event.sender.send('asynchronous-reply', 'patientAdded-room11')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room12'){
          event.sender.send('asynchronous-reply', 'patientAdded-room12')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room13'){
          event.sender.send('asynchronous-reply', 'patientAdded-room13')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room13'){
          event.sender.send('asynchronous-reply', 'patientAdded-room13')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room14'){
          event.sender.send('asynchronous-reply', 'patientAdded-room14')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room15'){
          event.sender.send('asynchronous-reply', 'patientAdded-room15')
          registerPatientWin.close()
        } else if(arg=='sendRegister-room16'){
          event.sender.send('asynchronous-reply', 'patientAdded-room16')
          registerPatientWin.close()
        }
      })
