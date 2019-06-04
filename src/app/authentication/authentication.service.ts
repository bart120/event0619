import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
};

@Injectable(
    { providedIn: 'root' }
)
export class AuthenticationService {

    private authSubject = new BehaviorSubject('');

    public expireDate: Date;

    public get auth(): Observable<string> {
        return this.authSubject.asObservable();
    }

    constructor(private http: HttpClient, private storage: Storage) { }

    login(login: string, password: string): Observable<any> {
        return this.http.post(`${environment.urlAuth}`, `username=${login}&password=${password}&grant_type=password`, httpOptions).pipe(
            tap(async (resp: any) => {
                this.authSubject.next(resp.access_token);
                this.expireDate = new Date();
                this.expireDate.setSeconds(this.expireDate.getSeconds() + resp.expires_in);
                // console.log(resp.access_token);
                await this.storage.set('ACCESS_TOKEN', resp.access_token);
                await this.storage.set('EXPRIRES_IN', resp.expires_in);
            })
        );
    }

    async logout() {
        this.authSubject.next('');
        await this.storage.remove('ACCESS_TOKEN');
        await this.storage.remove('EXPRIRES_IN');
    }
}
