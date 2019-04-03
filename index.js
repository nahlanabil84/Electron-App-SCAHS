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
  mainRoomsWin.on('close', (event) => {
    if (app.quitting) {
      mainRoomsWin = null
    } else {
      event.preventDefault()
      mainRoomsWin.hide()
    }
  });

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

 registerPatientWin.openDevTools()
 mainRoomsWin.openDevTools()
 loginWin.openDevTools()
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
        }
      })
