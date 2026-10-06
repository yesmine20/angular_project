import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemberModel } from '../../models/Member';
import { MemberService } from '../../services/member-service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ConfirmComp } from '../confirme-comp/confirme-comp';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  imports: [
    CommonModule, MatTableModule, MatIconModule, RouterLink
  ],
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member implements OnInit {
  constructor(
    private MS: MemberService,
    private dialog: MatDialog
  ) { }

  // injection de dépendances = mécanisme d'injecter le service
  // HttpClient dans le composant Member
  // créer une instance de la classe HttpClient obligatoire privée
  // dans le composant Member
  dataSource = signal<MemberModel[]>([]); // <-- signal au lieu d'une simple variable
  displayedColumns: string[] = [
    'id',
    'name',
    'cin',
    'type',
    'createdAt',
    'actions'
  ];
  ngOnInit(): void {

    // ngOnInit() : système qui appelle la fonction au chargement
    // mais de préférence on crée une fonction fetch et on l'appelle dans ngOnInit()

    // 1 dans l'image
    // subscribe permet de dire : je suis à l'écoute
    // fel () la variable eli bch nekhiu feha notification
    // variable locale valable yetsab feha notification eli baatha service
    // {} action après récupération des données
    this.fetchMembers();
  }

  // Fonction pour récupérer tous les membres
  fetchMembers(): void {
    this.MS.GetAllMembers().subscribe((response) => {
      this.dataSource.set(response);
    });
  }

  deleteMember(id: number): void {
    // ouvrir la boîte
    // lorsqu'on lance la boîte Angular lance un Observable
    // donc boîte observer et Member component subscriber
    // observer yarjaa valeur boolean true ou false selon le click de l'user
    const dialogRef = this.dialog.open(ConfirmComp);
    dialogRef.afterClosed().subscribe((result) => {
      // attendre le click
      // si user a fait le click sur OK
      if (result === true) {
        this.MS.deleteMember(id).subscribe(() => {

          // après suppression, on recharge la liste
          // pour afficher les données mises à jour
          this.fetchMembers();

        });

      }

    });

    // ngOnInit() y3atlha system mch behi enou taayet wahdek l ngOnInit
    // de préférence naamlou fonction fetch naaytoulha fel ngOnInit
    //
    // ahna houni nhbou yaadew yaaml getAllMembers baad masfkhou
    // donc après le delete on appelle fetchMembers()
  }
}

