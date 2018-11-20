import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators/catchError';
import { Task } from './models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private afs: AngularFirestore, private http: HttpClient) { }

  // getUserTasks2(): Observable<Task[]> {
  //   return this.afs.collection<Task>('tasks2').valueChanges();
  // }

  getUserTasks(): Observable<Task[]> {
    let a = this.afs
      .collection<Task>('Requests')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(dca => {
            const data = dca.payload.doc.data() as Task;
            const id = dca.payload.doc.id;
            return { id, ...data };
          })
        )
      );
      return a;
  }

  addNewTask(task: Task) {
    this.afs.collection<Task>('Requests').add(task);
  }

  acceptRequest(taskId: string) {
    this.afs.doc('Requests/' + taskId).update({'status': 'Accepted'});
  }

  rejectRequest(taskId: string) {
    this.afs.doc('Requests/' + taskId).update({'status': 'Rejected'});
  }

  // approveRequest(api: string, data: any) {
  //   return this.post<any>(api, data);
  // }

  private post<T>(api: string, data: T, defaultResult?: T): Observable<T> {
    return this.http.post<T>(api, data, {headers: this.headers})
        .pipe(
            map(result => {
              return result || defaultResult as T;
            })
        );
  }

  public get<T>(api: string, defaultResult?: T): Observable<T> {
    return this.http.get<T>(api, {headers: this.headers})
        .pipe(
            map(result => {
              return result || defaultResult as T;
            })
        );
  }

  // private handleError(error: any) {
  //   console.warn(error);
  //   return _throw(error || 'Server error');
  // }
}
