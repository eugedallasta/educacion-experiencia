import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/iexperiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getExperience():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}experiencia/all`);
  }
}
