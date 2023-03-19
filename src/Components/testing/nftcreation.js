// Import required modules
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

export const nftcreation  = (
    matricule,
    nom,
    prenom,
    ) => {

        const myText = nom+' '+prenom;

        let canvas = createCanvas();
        let ctx = canvas.getContext('2d');
        (async () => {
            const image = await loadImage('.diploma.png');
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);


// Write text on the image
            ctx.fillStyle = 'black';
            ctx.font = 'bold 68px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.fillText(myText, canvas.width / 2,"900");


// Save the modified image
            const out = fs.createWriteStream('diploma_'+matricule+'.png');
            const stream = canvas.createPNGStream();
            stream.pipe(out); })();


 
//------------------------------------------------------ What to put on diploma
// var student_lname = "Brahmi";
// var student_fname = "Sara";
// const myText = student_lname+' '+student_fname;

//--------------------------------------------------saving the dip name with student_id
//--------------------------------------------------- diploma_student_id.png , diploma_18.png

// var student_id = "1919";

//------------------------------------

// Set up canvas and load image
 canvas = createCanvas();
 ctx = canvas.getContext('2d');
(async () => {
    const image = await loadImage('diploma.png');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);


// Write text on the image
ctx.fillStyle = 'black';
ctx.font = 'bold 68px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

ctx.fillText(myText, canvas.width / 2,"900");


// Save the modified image
const out = fs.createWriteStream('diploma_'+matricule+'.png');
const stream = canvas.createPNGStream();
stream.pipe(out); })();
    }
