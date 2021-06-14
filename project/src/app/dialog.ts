import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
/**
* @title Dialog elements
*/
@Component({
selector: 'dialog-elements-example',
templateUrl: '../app/components/hero-detail/dialog-elements-example-dialog.html',
})
export class DialogElementsExample {
constructor(public dialog: MatDialog) {}
openDialog() {
this.dialog.open(DialogElementsExampleDialog);
}
}
@Component({
selector: 'dialog-elements-example-dialog',
templateUrl: '../app/components/hero-detail/dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}