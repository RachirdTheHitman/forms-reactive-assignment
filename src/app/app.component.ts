import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenProjnamesList = ['Test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'projname': new FormControl(null,
      //   [Validators.required, this.forbiddenProjnames.bind(this)]),
      'projname': new FormControl(null,
        [Validators.required], this.forbiddenProjnames.bind(this)),
      'email': new FormControl(null, [Validators.required,
        Validators.email]),
      'projStatus': new FormControl('Critical')
    });
  }

  forbiddenProjnames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  // forbiddenProjnames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenProjnamesList.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  onSubmit() {

    console.log(this.signupForm.value);

  }


}
