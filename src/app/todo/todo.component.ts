import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  workList = [];
  show: boolean;
  data: any;
  constructor( private fb: FormBuilder) {
    this.form = this.fb.group({
      work: [],
      upDateWork: ''
    });
    this.workList = JSON.parse(localStorage.getItem('work'));
    this.show = false;
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  save() {
    this.workList.push(this.form.get('work').value);
    localStorage.setItem('work', JSON.stringify(this.workList));
    console.log(this.form.get('work').value);
    console.log(this.workList);
  }

  // tslint:disable-next-line:typedef
  delete(i: number) {
    if (confirm('¿Esta seguro de eliminar esta tarea?')){
      console.log(i);
      this.workList.splice(i, 1);
      localStorage.setItem('work', JSON.stringify(this.workList));
    } else {
      return;
    }
  }
  // tslint:disable-next-line:typedef
  update(i: number) {
    this.workList.splice(i, 1, this.form.get('upDateWork').value);
    console.log(this.workList);
    localStorage.setItem('work', JSON.stringify(this.workList));
    this.show = false;
  }

}
