import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { config, DynamoDB }  from 'node_modules/aws-sdk';
import { selectAws } from '../Ngrx/reducers';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store:Store,private router:Router) { 
   
    this.store.pipe(select(selectAws)).subscribe((data)=>{
      console.log("Inside service")
      console.log(data)
      if(data.aws_id != ""){
        this.connect(data.aws_id,data.aws_pw)
        this.router.navigateByUrl("objectif")
      }
      

    })

  }


connect = (id:any,pw:any)=>{
  const myConfig = {
    accessKeyId: id, // hardcoding credentials is a bad practice
    secretAccessKey: pw,
    region: "us-east-2"
}


  config.update(myConfig);

    config.getCredentials(function(err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log("Access key:", config.credentials?.accessKeyId);
      }
    });

    const dynamoDB = new DynamoDB.DocumentClient()
/*  
   let test =  {
    TableName: "test",
    Item: { id:"1234",value:2 }
   }

    dynamoDB.put(test).promise()
*/
    dynamoDB
      .scan({
        TableName: "test",
      })
      .promise()
      .then(data => console.log(data.Items))
      .catch(console.error)
    
}




}
