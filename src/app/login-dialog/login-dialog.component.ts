import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from "@angular/forms";

class DialogData {
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      login: '',
      password: ''
    })
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmitClick() {
    this.dialogRef.close(this.form.value);
  }

}
