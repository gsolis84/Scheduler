import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tasks {
  description: string;
  title: string;
  userAssignedTo: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  tasksCollectionRef: AngularFirestoreCollection<Tasks>;
  tasks$: Observable<Tasks[]>;

  constructor(private db: AngularFirestore) {
         this.tasksCollectionRef = db.collection<Tasks>('Requests');
         this.tasks$ = this.tasksCollectionRef.valueChanges();
  }

  ngOnInit() {
  }

}