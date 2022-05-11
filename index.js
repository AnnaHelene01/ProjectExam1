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
d = now.getDate(); //nåværende dato
m = now.getMonth(); // nåværende dato
y = now.getFullYear(); //nåværende dato


out_string = months[m] + ' ' + d + ' , ' + y; //concat dato parts til output string 

document.getElementById('date').innerHTML = out_string; //sette html of the hmtl element to the output string


// SLIDER ->
//function for creating page list
function prepareList() {
    for (count = 0; count < 100; count++)
    //add iteration elements to an array
    createPages= getPageNumber();//user defined function
    }
    //function per creating pages
    function preparePages() {
    var start= ((presentPage - 1) * countPerEachPage);
    var end = start+ countPerEachPage;
    listPage= list.slice(start, end);
    //call some user defined methods to pagination functionality
    }

