const ipc = require('electron').ipcRenderer;
const remote = require('electron').remote;

const { dialog } = require('electron').remote;

const sendBtn = document.getElementById('btnSend');
const cancelBtn = document.getElementById('btnCancel');

let roomFlag = null, patientName = null, patientSex = null, patientBirthDate = null,
patientNationality = null, patientAddress = null, patientPhone = null,
patientNationalID = null, patientMedicalID = null, emergencyName = null,
emergencyPhone = null

sendBtn.addEventListener('click',send)
cancelBtn.addEventListener('click',cancel)

function send(){
  if(checkInputs){

    const options = {
        type: 'question',
        buttons: ['لا، مراجعة البيانات', 'نعم، ادخل البيانات'],
        defaultId: 1,
        title: 'سؤال',
        message: 'هل أنت واثق من بيانات المريض؟ هل تريد تأكيد إدخال المريض؟',
      };
    dialog.showMessageBox(null, options, (response) => {
      switch (response) {
        case 0:           //no, close dialog and stay in screen
           console.log(response);
          break;
        case 1:           //yes, send data
          switch (roomFlag) {
            case 'addPatient-room1':
            ipc.send('asynchronous-message', 'sendRegister');
            break;
            case 'addPatient-room2':
            ipc.send('asynchronous-message', 'sendRegister-room2');
            break;
            case 'addPatient-room3':
            ipc.send('asynchronous-message', 'sendRegister-room3');
            break;
            case 'addPatient-room4':
            ipc.send('asynchronous-message', 'sendRegister-room4');
            break;
            case 'addPatient-room5':
            ipc.send('asynchronous-message', 'sendRegister-room5');
            break;
            case 'addPatient-room6':
            ipc.send('asynchronous-message', 'sendRegister-room6');
            break;
            case 'addPatient-room7':
            ipc.send('asynchronous-message', 'sendRegister-room7');
            break;
            case 'addPatient-room8':
            ipc.send('asynchronous-message', 'sendRegister-room8');
            break;
            case 'addPatient-room9':
            ipc.send('asynchronous-message', 'sendRegister-room9');
            break;
            case 'addPatient-room10':
            ipc.send('asynchronous-message', 'sendRegister-room10');
            break;
            case 'addPatient-room11':
            ipc.send('asynchronous-message', 'sendRegister-room11');
            break;
            case 'addPatient-room12':
            ipc.send('asynchronous-message', 'sendRegister-room12');
            break;
            case 'addPatient-room13':
            ipc.send('asynchronous-message', 'sendRegister-room13');
            break;
            case 'addPatient-room14':
            ipc.send('asynchronous-message', 'sendRegister-room14');
            break;
            case 'addPatient-room15':
            ipc.send('asynchronous-message', 'sendRegister-room15');
            break;
            case 'addPatient-room16':
            ipc.send('asynchronous-message', 'sendRegister-room16');
            break;
        }
        break;
      }
    });
  } else{
    // show dialog
    const options = {
        type: 'warning',
        buttons: ['حسناً'],
        defaultId: 0,
        title: 'تحذير',
        message: 'راجع البيانات، بعض الخانات فارغة',
      };

      dialog.showMessageBox(null, options, (response) => {
        switch (response) {
          case 0:
            console.log(response);
            break;
        }
      });
    // alert('راجع الخانات لا يمكن ترك إحداها فارغة')
  }
}

function cancel(){
  if(checkInputs){
    const options = {
        type: 'question',
        buttons: ['لا، استمر', 'نعم، إلغاء'],
        defaultId: 1,
        title: 'سؤال',
        message: 'هل تريد إلغاء إضافة المريض؟',
        detail: 'إذا قمت إلغاء إضافة المريض سيتم حذف البيانات المدخلة مسبقاً',
      };

      dialog.showMessageBox(null, options, (response) => {
        switch (response) {
          case 0:         //no stay in screen
            console.log(response);
            break;
          case 1:         //yes, exit screen
            ipc.send('synchronous-message', 'cancelRegister');
            break;
          default:

        }
      });
  } else{
    ipc.send('synchronous-message', 'cancelRegister');
  }
}

function checkInputs(){
  patientName = document.getElementById('txtPatientName').value;
  patientSex = document.getElementById('patientSexSelect').value;
  patientBirthDate = document.getElementById('datePatientBirthDate').value;
  patientNationality = document.getElementById('txtPatientNationality').value;
  patientAddress = document.getElementById('txtPatientAddress').value;
  patientPhone = document.getElementById('telPatientPhone').value;
  patientNationalID = document.getElementById('txtPatientNationalID').value;
  patientMedicalID = document.getElementById('txtPatientMedicalID').value;
  emergencyName = document.getElementById('txtPatientEmergencyPersonName').value;
  emergencyPhone = document.getElementById('telPatientEmergencyPersonPhone').value;

  if(patientName != '' && patientSex != '' && patientBirthDate != '' &&
  patientNationality != '' && patientAddress != '' && patientPhone != ''
&& patientNationalID != '' && patientMedicalID != '' && emergencyName != ''
&& emergencyPhone != ''){

  return true
  } else{
    return false
  }
}

ipc.on('asynchronous-reply', (event, arg) => {
  //// TODO: send to rooms_buttons screen to change btn color
    if(arg=='patientAdded'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-1-color');
      }
    } else if(arg == 'patientAdded-room2'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-2-color');
      }
    } else if(arg == 'patientAdded-room3'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-3-color');
      }
    } else if(arg == 'patientAdded-room4'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-4-color');
      }
    } else if(arg == 'patientAdded-room5'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-5-color');
      }
    } else if(arg == 'patientAdded-room6'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-6-color');
      }
    } else if(arg == 'patientAdded-room7'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-7-color');
      }
    } else if(arg == 'patientAdded-room8'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-8-color');
      }
    } else if(arg == 'patientAdded-room9'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-9-color');
      }
    } else if(arg == 'patientAdded-room10'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-10-color');
      }
    } else if(arg == 'patientAdded-room11'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-11-color');
      }
    } else if(arg == 'patientAdded-room12'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-12-color');
      }
    } else if(arg == 'patientAdded-room13'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-13-color');
      }
    } else if(arg == 'patientAdded-room14'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-14-color');
      }
    } else if(arg == 'patientAdded-room15'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-15-color');
      }
    } else if(arg == 'patientAdded-room16'){
      if (remote.getGlobal('mainRoomsWin')){
        remote.getGlobal('mainRoomsWin').webContents.send ('message', 'change-btn-16-color');
      }
    }
  })

ipc.on('message', (event, message) => {
  roomFlag = message
})
