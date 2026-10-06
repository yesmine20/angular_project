import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [MatFormField, MatInput, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(
    private AS: AuthService,
    private router: Router
  ) { }

  login() {
    // Récupérer email et password
    console.log(this.email, this.password);

    // Appeler le service d'authentification
    this.AS.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Si la connexion réussit
        this.router.navigate(['/member']);
      })
      .catch((error) => {
        // Si la connexion échoue
        console.log(error);
      });
  }
}

