const fs = require("fs");
const playList = fs.readFileSync('./video_1.m3u8', 'utf-8');
const segments = playList
  .split('\n')
  .filter(line => line.slice(-3) === '.ts');

//https://storage.yandexcloud.net/kabinetsokalskaya/video/Free/ResursPsy.mp4/

console.log(segments);