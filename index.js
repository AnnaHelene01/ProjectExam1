// Sette inn dato som endrer seg aktivt!
var months = [ //sette inn månedene
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
], d, m, y, now, out_string; //vars til å holde dato, måned, år, dato object og output string
now = new Date(); //new date object
d = now.getDate(); //current date
m = now.getMonth(); // current month
y = now.getFullYear(); //current year


out_string = months[m] + ' ' + d + ' , ' + y; //concat dato parts til output string 

document.getElementById('date').innerHTML = out_string; //sette html of the hmtl element to the output string