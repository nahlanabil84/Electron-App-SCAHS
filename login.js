let usr = 'admin'
let pass = '112233'

const ipc = require('electron').ipcRenderer;

const loginBtn = document.getElementById('btnLogin');

function login(){
  var txtUser = document.getElementById('txtUsr').value;
  var txtPwd = document.getElementById('txtPwd').value;

  if(txtUser == '' && txtPwd == ''){
    alert('يجب إدخال اسم المستخدم وكلمة المرور')
  } else if(txtUser == ''){
    alert('يجب إدخال اسم المستخدم')
  } else if(txtPwd == ''){
    alert('يجب إدخال كلمة المرور')
  } else {
    if(txtUser==usr && txtPwd==pass){
      ipc.sendSync('entry-accepted', 'loggedIn')
    }
    else{
      alert('اسم المستخدم أو كلمة المرور غير صحيحتان')
    }
  }
}

loginBtn.addEventListener('click',login)
