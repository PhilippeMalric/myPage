import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { premiereActions, updateAwsActions } from 'src/app/Ngrx/main-actions.actions';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  awsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService:DataService,
    private store:Store) { 

    this.awsForm = this.formBuilder.group({
      id: '',
      secret: ''
    });

  }

  ngOnInit(): void {
  }


  test1(){

    this.store.dispatch(premiereActions())

  }

  onSubmit(){
    
    console.log(this.awsForm)
    this.store.dispatch(updateAwsActions({data:{aws_id:this.awsForm.value.id,aws_pw:this.awsForm.value.secret}}))

  }


}
