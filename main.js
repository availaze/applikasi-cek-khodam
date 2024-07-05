const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain

async function createWindow () {
  try {
    const mainWindow = new BrowserWindow({
      width: 1620,
      height: 960,
      webPreferences: {
        preload: path.join(__dirname, './preload/preload.js'),
        contextIsolation: false,
        enableRemoteModule: false,
        nodeIntegration: true,
        devTools: true
      },
      transparent: true,
      frame: false,
      titleBarStyle: "hidden",
      icon : path.join(__dirname, './favicon.png'),
      title : "Cek Khodam"
    });

    await mainWindow.loadFile('./public/index.html');

    const minimize = () => mainWindow.minimize();
    const close = () => mainWindow.close();


    ipc.on('minimize', () => minimize());
    ipc.on('closeApp', () => close());

  } catch (error) {
    console.error('Failed to create window:', error);
  }
}

app.whenReady().then(() => {
  createWindow().catch(error => console.error('Error during app initialization:', error));

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow().catch(error => console.error('Error during window creation:', error));
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'win32') {
    app.quit();
  }
});
