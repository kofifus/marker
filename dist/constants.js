"use strict"; 

//Modifiers
exports.Reset = '\x1b[0m';
exports.Bold = '\x1b[1m';
exports.Dim = '\x1b[2m';
exports.Underscore = '\x1b[4m';
exports.Blink = '\x1b[5m';
exports.Reverse = '\x1b[7m';
exports.Hidden = '\x1b[8m'; 
//Colors
exports.NoColor = '\x1b[N';
exports.Black = '\x1b[30m';
exports.Red = '\x1b[31m';
exports.Green = '\x1b[32m';
exports.Yellow = '\x1b[33m';
exports.Blue = '\x1b[34m';
exports.Magenta = '\x1b[35m';
exports.Cyan = '\x1b[36m';
exports.White = '\x1b[37m'; //Backgrounds

exports.BgBlack = '\x1b[40m';
exports.BgRed = '\x1b[41m';
exports.BgGreen = '\x1b[42m';
exports.BgYellow = '\x1b[43m';
exports.BgBlue = '\x1b[44m';
exports.BgMagenta = '\x1b[45m';
exports.BgCyan = '\x1b[46m';
exports.BgWhite = '\x1b[47m';