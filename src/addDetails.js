import React from 'react';

const Add = () =>{
    return(

        function addrow(){
            var empid = document.getElementById('empid').value;
            var fname = document.getElementById('fname').value;
            var lname = document.getElementById('lname').value;
            var balance = document.getElementById('balance').value;
        
            var table = document.getElementsByTagName('table')[0];
            var newRow = table.insertRow(0); 
        
            var cel1 = newRow.insertCell(0);
            var cel2 = newRow.insertCell(0);
            var cel3 = newRow.insertCell(0);
            var cel4 = newRow.insertCell(0);
        
            cel1.innerHTML = empid;
            cel2.innerHTML = fname;
            cel3.innerHTML = lname;
            cel4.innerHTML = balance;
        }
    );
};


export default Add;
