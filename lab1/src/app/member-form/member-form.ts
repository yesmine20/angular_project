import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MemberService } from '../../services/member-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  constructor(private MS: MemberService, private router: Router) { }
  form!: FormGroup;
  //varaible de récuperation de données
  //! permet d'initilisaer 
  ngOnInit() {
    this.form = new FormGroup({
      cin: new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null),
      createdAt: new FormControl(null)
    })
  }
  onSubmit() {
    console.log(this.form.value);
    //injecter le service et appler la focntion
    //addmember(this.form.value)
    this.MS.AddMember(this.form.value).
      //exactemnt 1
      subscribe(((
        //hatina void vide khtr eni fel req hatit eli bch yrjaali vide
      ) => {
        this.router.navigate(['/']);
      }));
    //extament 4

  }
}