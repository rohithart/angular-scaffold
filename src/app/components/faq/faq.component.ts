import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Crumbs } from 'src/app/models/Crumbs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  crumbs: Crumbs[] = [
    { name: 'FAQ', url: '/faq' },
  ]

  questions: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.readQuestions();
  }

  readQuestions() {
    this.getJSON().subscribe((data: any) => {
      this.questions = data.faq;
    });
  }

  private getJSON(): Observable<any> {
    return this.http.get("./assets/files/faq.json");
  }

}
