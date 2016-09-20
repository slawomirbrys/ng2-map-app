import {Component} from '@angular/core';
import {ConfirmService} from "../confirm/confirm.service";

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent {
  modalDecision: string;

  constructor(/*private confirmService: ConfirmService*/) {
  }

  // TODO
  // openModal() {
  //   this.confirmService.showConfirm("Do you want to learn ng2?").then((data) => {
  //     console.log("qq", data);
  //     this.modalDecision = "Zgodzil sie!" + Math.random();
  //   }, (data) => {
  //     console.log("nein", data);
  //     this.modalDecision = "nie tym razem..." + Math.random();
  //   });
  // }
}
