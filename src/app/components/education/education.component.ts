import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/ieducacion';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public education: Educacion[] = [];
  public editEducation: Educacion | undefined;
  public deleteEducation: Educacion | undefined;

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.getEducation();
  }

  getEducation(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Educacion[]) => {
        this.education = response;

      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode:String, education?:Educacion):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode === 'add'){

    }else if(mode === 'delete'){
      this.deleteEducation = education;

    }else if(mode === 'edit'){
      this.editEducation = education;

    }
    container?.appendChild(button);
    button.click();

  }

  public onAddEducation(addForm:NgForm){
    document.getElementById('add-education-form')?.click();
    this.educationService.addEducation(addForm.value).subscribe({
      next: (response: Educacion) => {
        alert('Se ha agregado Educación correctamente');
        this.getEducation();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public onUpdateEducation(education:Educacion){
    this.editEducation = education;
    document.getElementById('edit-education-form')?.click();
    this.educationService.updateEducation(education).subscribe({
      next: (response: Educacion) => {
        alert('Se ha actualizado Educación correctamente');
        this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteEducation(idEdu:number):void{
    this.educationService.deleteEducation(idEdu).subscribe({
      next: (response: void) => {
        alert('Se ha eliminado Educación correctamente');
        this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }



}
