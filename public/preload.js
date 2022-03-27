// const { ipcRenderer, contextBridge } = require("electron");

// contextBridge.exposeInMainWorld("api", {
//     invoke: args => ipcRenderer.invoke("invoke", args),
//     send: args => ipcRenderer.send("send", args),
//     receive: callback => ipcRenderer.on("receive", (event, data) => callback(data)),
//     UserCreate: args => ipcRenderer.send("user/create", args),
//     UserAlter: args => ipcRenderer.send("user/alter", args),
//     UserGet: (...args) => ipcRenderer.invoke("user/get", ...args),
//     UserDelete: args => ipcRenderer.invoke("user/delete", args)
// });
