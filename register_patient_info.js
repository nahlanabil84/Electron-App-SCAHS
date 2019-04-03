const ipc = require('electron').ipcRenderer;
const remote = require('electron').remote;

const sendBtn = document.getElementById('btnSend');
const cancelBtn = document.getElementById('btnCancel');

sendBtn.addEventListener('click',send)
cancelBtn.addEventListener('click',cancel)

function send(){
  //check data is complete
  //if complete show dialog to ask if sure
  //if not complet show alert to warn some data is empty

  // var txtUser = document.getElementById('txtUsr').value;
  // var txtPwd = document.getElementById('txtPwd').value;
  //
  // if(txtUser == '' && txtPwd == ''){
  //   alert('يجب إدخال اسم المستخدم وكلمة المرور')
  // } else if(txtUser == ''){
  //   alert('يجب إدخال اسم المستخدم')
  // } else if(txtPwd == ''){
  //   alert('يجب إدخال كلمة المرور')
  // } else {
  //   if(txtUser==usr && txtPwd==pass){
     ipc.send('asynchronous-message', 'sendRegister');

  //   }
  //   else{
  //     alert('اسم المستخدم أو كلمة المرور غير صحيحتان')
  //   }
  // }
}

function cancel(){
  //TODO show dialog to make sure no user to be added
    // if(txtUser==usr && txtPwd==pass){
     ipc.send('synchronous-message', 'cancelRegister');

    // }
    // else{
    //   alert('اسم المستخدم أو كلمة المرور غير صحيحتان')
    // }
}

ipc.on('asynchronous-reply', (event, arg) => {
    if(arg=='patientAdded'){
      //// TODO: send to rooms_buttons screen to change btn color
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-1-color');
      }
    }
  })
