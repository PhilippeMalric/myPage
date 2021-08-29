import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as AWS from 'node_modules/aws-sdk';
import { selectAws } from '../Ngrx/reducers';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store:Store) { 
   
    this.store.pipe(select(selectAws)).subscribe((data)=>{
      console.log("Inside service")
      console.log(data)
      if(data.aws_id != ""){
        this.connect(data.aws_id,data.aws_pw)
      }
      

    })

  }


connect = (id:any,pw:any)=>{
  const config = {
    accessKeyId: id, // hardcoding credentials is a bad practice
    secretAccessKey: pw,
    region: "us-east-2"
}


  AWS.config.update(config);

    AWS.config.getCredentials(function(err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log("Access key:", AWS.config.credentials?.accessKeyId);
      }
    });

    const dynamoDB = new AWS.DynamoDB.DocumentClient()
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
