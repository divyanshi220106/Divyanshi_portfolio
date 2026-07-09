//strings
let str="Divyanshi";
let str2='Anshika';
console.log(str[2]);//v
console.log(str2[6]);//a

//template literals -----special string--
let specialString=`This is a template literal ${1+2+3}`;
console.log(specialString);

//escape character  string ke andr next line deta h 
let str3="KashishSingh"; //escAPE CH KI LENGTH EK SINGLE COUNT HOGI H 
console.log(str3.toUpperCase());
let str4="            Naina Ishi      "
console.log(str4.trim());
let str5="0123456789";
console.log(str5.slice(1,3));
let str6="divya";
console.log(str6.replace("di","ra"));

let fullName =prompt("enter your fullname without spaces");
let username="@"+fullName +fullName.length;
console.log(username);