import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectAws } from 'src/app/Ngrx/reducers';
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
  id_present: any;


  constructor(
    private formBuilder: FormBuilder,
    private dataService:DataService,
    private objectifService:ObjectifService,
    private store:Store) { 

      this.id_present = false

      this.store.pipe(select(selectAws)).subscribe((data)=>{
        console.log("Objectif component")
        console.log(data)
        if(data.aws_id!=""){
          this.id_present = true
          this.getObjectifs()
        }
      })
    }

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
