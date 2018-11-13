import { Component } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tasks {
  description: string;
  title: string;
  userAssignedTo: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // tasksCollectionRef: AngularFirestoreCollection<Tasks>;
  // tasks$: Observable<Tasks[]>;
  // name = 'Firestore testing';
  
  // constructor(private db: AngularFirestore) {
  //        this.tasksCollectionRef = db.collection<Tasks>('tasks2');
  //        this.tasks$ = this.tasksCollectionRef.valueChanges();
  //   }
   
}