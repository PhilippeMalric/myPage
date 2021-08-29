import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DynamoDB } from 'aws-sdk';
import { from, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { selectAws } from '../Ngrx/reducers';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  dynamoDB: DynamoDB.DocumentClient;

  constructor(private store:Store) { 

    this.dynamoDB = new DynamoDB.DocumentClient()

  }


addObjectif = (id:string,value:string)=>{

  this.dynamoDB = new DynamoDB.DocumentClient()

  let test =  {
    TableName: "test",
    Item: { id:id,value:value }
   }
   
   return from( this.dynamoDB.put(test).promise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
   .pipe(tap((data)=>{

    console.log('dynamoDB.put',data)

   }))

}

getObjectifs = ()=>{

  this.dynamoDB = new DynamoDB.DocumentClient()

  return from(this.dynamoDB
  .scan({
    TableName: "test",
  })
  .promise())
  .pipe(tap(data => {
    
    console.log("getObjectifs" , data.Items)
    
  }))

}

deleteObjectifs = (id:any)=>{

  this.dynamoDB = new DynamoDB.DocumentClient()

  return from(this.dynamoDB
  .delete({
    TableName: "test",
    Key:{id:id}
  })
  .promise())
  .pipe(tap(data => {
    
    console.log("deleteObjectifs" , data)
    
  }))

}










}
