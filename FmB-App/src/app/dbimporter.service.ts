import { Injectable } from '@angular/core';
import { Pool } from "pg";
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class DbimporterService {
  private pool:Pool
  constructor(private http:HttpClient) {
    this.pool=new Pool(
       // create a new connection to the database
       {
        host: "localhost",
        user: "postgres",
        database: "postgres",
        password: "sarukan",
        port: 5432
       }
    )
    const query =
    "INSERT INTO banken_daten (Id, Bank, Name, Sitz, Land, Verband) VALUES ($1, $2, $3, $4, $5, $6)";

    this.pool.connect((err, client, done) => {
      if (err) throw err;

    this.http.get('data/BankenDaten.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              try {
                client.query(query, row, (err, res) => {
                  if (err) {
                    console.log(err.stack);
                  } else {
                    console.log("inserted " + res.rowCount + " row:", row);
                  }
                });
              } finally {
                done();
              }
            }
        },
        error => {
            console.log(error);
        }
    );
      });
   }
}
