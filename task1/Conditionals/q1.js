"use strict";
 let yearOfBirth=parseInt(prompt("Enter ur year of birth:"));
 let currentYear= new Date().getFullYear();
 let age=currentYear-yearOfBirth;
if(age>30 && age<60){
    document.write("You are not eligible. You may join other programs.");


}
else if(age>18 && age<30){
    document.write("You are eligible. Start your application.");

}
else if(age<18){
    document.write("You may join the kids' program.");

}
else if(age>60){
    document.write("You may join the seniors’ program.");

}