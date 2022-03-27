const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const SetMenuOptions = mainWindow => {
    if (!mainWindow) return;
    const template = [
        {
            label: 'Filter',
            submenu: [
                {
                    label: 'Hello',
                    accelerator: 'Shift+CmdOrCtrl+H',
                    click() {
                        mainWindow.reload()
                    }
                }
            ]
        }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

const CreateWindow = () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true
        },
    });

    mainWindow.loadURL("http://localhost:3000");
    // SetMenuOptions(mainWindow);
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => mainWindow = null);
}

app.on("ready", () => {
    CreateWindow();
});

app.on("window-all-closed", () => process.plataform !== "darwin" && app.quit());

app.on("activate", () => mainWindow === null && CreateWindow());
