import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {of} from 'rxjs';
import {User} from '../model/user/user.model';

const HttpOptions = {
   headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable()
export class ApiService{

    constructor(){}

    public getUser(): Observable<any> {

        let fakeUsers : User[] = [{id: 1, firstName:'Jose', lastName:'Carlitos', email:'email@gmail.com'}];
        return of(fakeUsers);
    }


}