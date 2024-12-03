/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

const questions = [
    {
      type: 'input',
      name: 'user_input',
      message: "Enter text you want to convert to QR Code: ",
    },
  ];
  
  inquirer.prompt(questions).then((answers) => {
    // console.log(JSON.stringify(answers, null, '  '));
    console.log(`Here are the answers: ${answers.user_input}`);
    var feedback = answers.user_input;

    var qr_svg = qr.image(feedback);
    qr_svg.pipe(fs.createWriteStream('QR_Image.png'));
    
    fs.writeFile("message.txt", feedback, (err) => {
        if(err) throw err;
        console.log("File has been created");
    });

  })


  
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });;



//   var qr_svg = qr.image('I love QR!', { type: 'svg' });
