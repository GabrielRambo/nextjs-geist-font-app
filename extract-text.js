const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('orçamento.pdf');

pdf(dataBuffer).then(function(data) {
    // Output the text content of the PDF
    console.log(data.text);

    // Save the extracted text to a file
    fs.writeFileSync('orçamento.txt', data.text);
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
