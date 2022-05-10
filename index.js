// Tester om jeg kan sette inn dato
var months = [ //create the months
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
], d, m, y, now, out_string; //vars to hold date, month, year, date object and output string
now = new Date(); //new date object
d = now.getDate(); //current date
m = now.getMonth(); // current month
y = now.getFullYear(); //current year


out_string = months[m] + ' ' + d + ' , ' + y; //concat date parts into output string 

document.getElementById('date').innerHTML = out_string; //set the html of the hmtl element to the output string