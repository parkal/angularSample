"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.FirstName = "Tom";
        this.LastName = "Hopkins";
        this.Gender = "Male";
        this.Age = "29";
        this.disableButton = false;
        this.enableButton = true;
        this.inputValue = null;
    }
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: "Employee",
        styles: ["\n    \n        table{\n            color: #369;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 250%;\n            font-style: normal;\n            border-collapse: collapse;\n        }", "\n        td{\n            border: 1px solid black;\n        }\n        "],
        templateUrl: "/app/Employee/employee.component.html"
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map