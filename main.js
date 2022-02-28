const { app, BrowserWindow } = require('electron')
if (require('electron-squirrel-startup')) return app.quit();
const urls = [
  "https://www.funreading.fr"
]

const createWindow = () =>{
  win = new BrowserWindow({
      center: true,
      resizable: true,
      autoHideMenuBar: true,
      webPreferences:{
          nodeIntegration: false,
          show: false
      }
  });
  //win.maximize();
  //win.webContents.openDevTools();
  //win.webContents.
  console.log(urls[0]);

  win.loadURL(urls[0]);
  // win.loadURL(url.format({
  //     pathname: path.join(__dirname,"index.html"),
  //     protocol: 'file',
  //     slashes: true
  // }));
  win.once('ready-to-show',()=>{
      win.show()
  });

  win.on('closed',()=>{
      win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  