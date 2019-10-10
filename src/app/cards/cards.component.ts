import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../shared/firebase.service';
import { Task, Action } from '../shared/models';
import * as _ from 'lodash';

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

  dbUsers: string[];
  tasks: Task[];
  panelOpenState = false;
  // tasksCollectionRef: AngularFirestoreCollection<Tasks>;
  // tasks$: Observable<Tasks[]>;

  constructor(private db: AngularFirestore, private firebaseService: FirebaseService) {
        //  this.tasksCollectionRef = db.collection<Tasks>('Requests');
        //  this.tasks$ = this.tasksCollectionRef.valueChanges();
  }

  ngOnInit() {
    this.firebaseService.getUserTasks().subscribe(t2 => {
      this.tasks = t2;
      this.dbUsers = _.uniq(this.tasks.map(task => task.userAssignedTo));
    });
    console.log(this.dbUsers);
  }

  getUserTasks (user: string): Task[] {
    return this.tasks.filter(task => task.userAssignedTo === user);
  }

  addNewtask(): void {
    const newTask: Task = {
      createdBy: 'TestUser@nst.com',
      userAssignedTo: 'AdminUser@nst.com',
      title: 'Test Title ' + this.tasks.length,
      description: 'Test Description ' + this.tasks.length,
      status: 'New',
      actions: [
        {title: 'Accept', operationType: 'accept', document: '', url: ''},
        {title: 'Reject', operationType: 'reject', document: '', url: ''}
      ]
    };
    this.firebaseService.addNewTask(newTask);
  }

  processTask(taskId: string, action: string) {
    if (action === 'accept') {
      this.firebaseService.acceptRequest(taskId);
    } else if (action === 'reject') {
      this.firebaseService.rejectRequest(taskId);
    }
  }

  // processTask(action: Action) {
  //   this.firebaseService[action.operationType](action.url, 'dummy').subscribe(x => {
  //     console.log(x);
  //   },
  //   e => console.log(`QUESITOERROR: ${e.error}`));
  // }
}
