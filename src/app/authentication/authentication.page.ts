import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  formAuth: FormGroup;

  constructor(
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.formAuth = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.menu.enable(false);
  }

  login(): void {
    if (this.formAuth.valid) {
      this.auth.login(this.formAuth.value.login, this.formAuth.value.password).subscribe(
        (data) => {
          this.router.navigate(['/home']);
          this.menu.enable(true);
        },
        (err) => {
          this.router.navigate(['/home']);
          this.menu.enable(true);
          console.warn(err);
          // alert('Erreur');
        }
      );
    }
  }

}
