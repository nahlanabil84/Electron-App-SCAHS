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
    //  ipc.sendSync('entry-accepted', 'sendRegister')
      var window = remote.getCurrentWindow();
      window.close();

  //   }
  //   else{
  //     alert('اسم المستخدم أو كلمة المرور غير صحيحتان')
  //   }
  // }
}

function cancel(){
  //TODO show dialog to make sure no user to be added
    // if(txtUser==usr && txtPwd==pass){
  //    ipc.sendSync('entry-accepted', 'cancelRegister')
      var window = remote.getCurrentWindow();
      window.close();

    // }
    // else{
    //   alert('اسم المستخدم أو كلمة المرور غير صحيحتان')
    // }
}
