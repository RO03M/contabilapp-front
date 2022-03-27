/**
 * 
 * contains all methods to connect react and electron
 */
/**
 * 
 * isDev
            ? path.join(__dirname, '../db/contabil.db')
            : path.join(process.resourcesPath, 'db/contabil.db')
 */

const { ipcMain } = require("electron");
// const isDev = require("electron-is-dev");
const sqlite3 = require("sqlite3");
const path = require("path");
const { UserController } = require("./Controllers/UserController");

ipcMain.on("async-message", (event, arg) => {
    if (arg == "ping") event.reply("async-reply", "pong");
    else event.reply("async-reply", "please send ping");
});

ipcMain.on("user/create", (event, arg) => {
    const userController = new UserController();
    userController.Create(arg);
});

ipcMain.on("user/alter", (event, arg) => {
    const userController = new UserController();
    userController.Alter(arg);
});

ipcMain.handle("user/get", (event, ...args) => {
    const userController = new UserController();
    return userController.Get(...args);
});

ipcMain.handle("user/delete", (event, arg) => {
    const userController = new UserController();
    userController.Delete(arg);
});