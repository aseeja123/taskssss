import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  complete_data: any;
  data_source: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('assets/schema.json').subscribe((data) => {
      console.log(data);
      this.complete_data = data;
    });
    this.http.get('assets/datasource.json').subscribe((data) => {
      console.log(data);
      this.data_source = data;
    });
  }
}
