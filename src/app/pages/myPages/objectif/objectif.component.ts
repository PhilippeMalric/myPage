import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.scss']
})
export class ObjectifComponent implements OnInit {
  objectifForm: any;
  dataSource: any;

  displayedColumns: string[] = ['id', 'value',"delete"]


  constructor(
    private formBuilder: FormBuilder,
    private dataService:DataService,
    private objectifService:ObjectifService,
    private store:Store) { }

  ngOnInit(): void {
    this.objectifForm = this.formBuilder.group({
      id: '',
      description: ''
    });

   
    
  }

  getObjectifs = ()=>{
    
    this.objectifService.getObjectifs().subscribe((data:any)=>{
      this.dataSource = data.Items
    })
    


  }


  addObjectif = ()=>{



    this.objectifService.addObjectif(this.objectifForm.value.id,this.objectifForm.value.description).subscribe(
      (data)=>{
        this.getObjectifs()
        //console.log(data)


      }
    )
  }

  deleteObjectif = (id:any)=>{

    this.objectifService.deleteObjectifs(id).subscribe((data)=>{
      console.log(data)
      this.getObjectifs()

    })

  }



}
