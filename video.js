const fs = require("fs");
//const { mkdir } = require("node:fs");
const request = require("request");
const playList = fs.readFileSync('./video_1.m3u8', 'utf-8');
const segments = playList
  .split('\n')
  .filter(line => line.slice(-3) === '.ts');

const baseUrl = 'https://storage.yandexcloud.net/kabinetsokalskaya/video/Free/ResursPsy.mp4/';
//console.log(segments)
fs.mkdir(`./video_1`, (err => {if (err) throw err}));
request(baseUrl + segments[0]).pipe(fs.createWriteStream(segments[0]));
//segments.forEach(chunk => request(baseUrl + chunk).pipe(fs.createWriteStream(chunk.slice(-4))));