import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from '../../pages/about/task';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tasks:Array<Task>=[];

  constructor(public navCtrl: NavController) {

    this.tasks = [
      {title: 'Clothes', status: 'open', id: 'Packing List'},
      {title: 'Food', status: 'open', id: 'Packing List'},
      {title: 'Toiletries', status: 'open', id: 'Packing List'},
      {title: 'Medications/First Aid',status: 'open', id: 'Packing List'},
      {title: 'Pet Supplies', status: 'open',id: 'Packing List'}
      ];

    }

addItem() {
  let theNewTask: string = prompt ( "New Task");
  if (theNewTask !==''){
  this.tasks.push({title: theNewTask, status: 'open',id: 'Packing List'});
  }
  }
 markAsDone(slidingItem: ItemSliding, task: Task) {
  task.status = "done";
  slidingItem.close();
 }

 removeTask(slidingItem: ItemSliding, task: Task) {
  task.status = "removed";
  let index = this.tasks.indexOf(task);
  if (index > -1){
    this.tasks.splice(index,1)}
    slidingItem.close();
  }


}
