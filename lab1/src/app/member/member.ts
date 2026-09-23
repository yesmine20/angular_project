import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MemberModel } from '../../models/Member';
import { MemberService } from '../../services/member-service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member',
  imports: [CommonModule, MatTableModule, MatIconModule, RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member implements OnInit {
  constructor(private MS: MemberService) { }

  //injection de dépendancess = mecansime de 'injecter le service httpclient dans le composant member
  //creer une instance de la classe httpclient  obligatoire privé dans le composant member
  dataSource = signal<MemberModel[]>([]);   // <-- signal au lieu d'une simple variable
  displayedColumns: string[] = [
    'id',
    'name',
    'cin',
    'type',
    'createdAt',
    'actions'
  ];

  ngOnInit(): void {
    //1 dans l'image 
    //subscriber pemet de dire je suis a l'ecoute 
    // fel () l varaible eli bch nekhiu feha notification
    //var loacl valable yetsab feha notification eli baatha service
    //{} action post aprés récupération de données 
    this.MS.GetAllMembers().subscribe((response) => {
      this.dataSource.set(response);

    });
  }
}