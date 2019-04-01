const ipc = require('electron').ipcRenderer;
const {app,BrowserWindow,ipcMain}=require('electron')
const path=require('path')
const url=require('url')

let mainRoomsWin, loginWin, registerPatientWin

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

  loginWin = new BrowserWindow({parent: mainRoomsWin,width:500,height:400,frame:false,resizable: false})
  loginWin.loadURL(url.format({
      pathname:path.join(__dirname,'login.html'),
      protocol:'file',
      slashes:true
  }))

 //registerPatientWin.openDevTools()
 //mainRoomsWin.openDevTools()
 // loginWin.openDevTools()
}

app.on('ready', createWindows)

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('entry-accepted', (event, arg) => {
    if(arg=='loggedIn'){
        mainRoomsWin.show()
        loginWin.hide()
    } else if(arg=='newPatient'){
      registerPatientWin.show()
    } else if(arg=='sendRegister') {
      //inform main window to change color &

      // ipc.sendSync('entry-accepted', 'patientAdded')
      registerPatientWin.hide()
    } else if(arg=='cancelRegister') {
      // do nothing &
      registerPatientWin.hide()
    }
  })
