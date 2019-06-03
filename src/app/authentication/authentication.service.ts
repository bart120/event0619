import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
};

@Injectable(
    { providedIn: 'root' }
)
export class AuthenticationService {

    constructor(private http: HttpClient, private storage: Storage) { }

    login(login: string, password: string): Observable<any> {
        return this.http.post(`${environment.urlAuth}&username=fsgdfg&password=fgdfsgs`, '', httpOptions).pipe(
            tap(async (resp: any) => {
                await this.storage.setItem('ACCESS_TOKEN', resp.access_token);
                await this.storage.setItem('EXPRIRES_IN', resp.expires_in);
            })
        );
    }
}
