import { Component } from '@angular/core'
import { style } from '@angular/core/src/animation/dsl';

@Component({
    selector:"Employee",
    styles: [ `
    
        table{
            color: #369;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 250%;
            font-style: normal;
            border-collapse: collapse;
        }`, `
        td{
            border: 1px solid black;
        }
        `],
    templateUrl: "/app/Employee/employee.component.html"
})
export class EmployeeComponent{

    FirstName: string = "Tom";
    LastName: string = "Hopkins";
    Gender: string = "Male";
    Age: string = "29";
    disableButton: boolean = false;
    enableButton: boolean = true;
    inputValue:string =null;
}