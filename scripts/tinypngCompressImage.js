// ! 别乱跑这个文件,每个月压缩图片的次数有限

const tinify = require('tinify');
const path = require('path');
const fse = require('fs-extra');

const API_KEY = 'ZF720612Ggb2vmMTbFXfCX2q2p954pVN';

const compress = async __ => {
    tinify.key = API_KEY;
    const imagesDir = path.resolve(__dirname, './images');
    let fileNames = await fse.readdir(imagesDir)
    const imageFiles = fileNames.filter(fileName => /.*?((\.jpg)|(\.png))$/.test(fileName));
    
    for (const imageName of imageFiles) {
        const source = tinify.fromFile(path.resolve(imagesDir, imageName));
        const outputPath = path.resolve(__dirname, '../img');
        source.toFile(path.resolve(outputPath, imageName));
    }

    const albumDir = path.resolve(__dirname, './images/album');
    const photoNames = await fse.readdir(albumDir);
    for (const photoName of photoNames) {
        const source = tinify.fromFile(path.resolve(albumDir, photoName));
        const outputPath = path.resolve(__dirname, '../img/album');
        source.toFile(path.resolve(outputPath, photoName));
    }
}

compress();