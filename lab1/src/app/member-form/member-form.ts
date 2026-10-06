import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MemberService } from '../../services/member-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-member-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatButtonModule],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  constructor(private MS: MemberService, private router: Router, private activatedroute: ActivatedRoute) { }
  form!: FormGroup;
  idCourant!: number; // variable hedhi bch nrecuperiw feha route active

  //varaible de récuperation de données
  //! permet d'initilisaer 
  ngOnInit() {

    //recupere la route active 
    this.idCourant = this.activatedroute.snapshot.params['id']

    //recuperer id khtr kn edit feha id create le heka eli yaaml far9
    if (this.idCourant) {
      this.MS.GetMemberById(this.idCourant).subscribe((member) => {
        this.form = new FormGroup({
          cin: new FormControl(member.cin),
          name: new FormControl(member.name),
          type: new FormControl(member.type),
          createdAt: new FormControl(member.createdAt)
        });
      })
    }
    else {
      //si id existe => je susi dans edit / getMemberById 
      // sinon je suis dans create kima l code actuel 
      this.form = new FormGroup({
        cin: new FormControl(null),
        name: new FormControl(null),
        type: new FormControl(null),
        createdAt: new FormControl(null)
      })
    }

  }
  //n7bou kif yji luser edit yjih form m3ebi bel les données mte3ou w kn yji luser create yjih form vide

  //   onSubmit() {
  //     console.log(this.form.value);
  //     //injecter le service et appler la focntion
  //     //addmember(this.form.value)
  //     if (!this.idCourant) {
  //       this.MS.updateMember(this.idCourant, this.form.value).subscribe(() => { }

  //       }));
  //     //extament 4
  //   }
  //    else {

  //   this.MS.AddMember(this.form.value).
  //     //exactemnt 1
  //     subscribe(((
  //       //hatina void vide khtr eni fel req hatit eli bch yrjaali vide
  //     ) => {
  //       this.router.navigate(['/']);
  //     }


  //   }
  // sub() {
  //   if (this.idCourant) {
  //     //methode update Member
  //     this.MS.updateMember(this.idCourant, this.form.value).subscribe(() => { this.router.navigate(['/']); });
  //   } else { }
  // }
  // }
  onSubmit() {
    console.log(this.form.value);

    //injecter le service et appler la focntion
    //addmember(this.form.value)

    if (this.idCourant) {
      this.MS.updateMember(this.idCourant, this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
      //extament 4
    } else {
      this.MS.AddMember(this.form.value).subscribe(() => {
        //hatina void vide khtr eni fel req hatit eli bch yrjaali vide
        this.router.navigate(['/']);
      });
      //exactemnt 1
    }
  }

  sub() {
    if (this.idCourant) {
      //methode update Member
      this.MS.updateMember(this.idCourant, this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
    }
  }
}
//fama commande patch yelzm nchoufha 