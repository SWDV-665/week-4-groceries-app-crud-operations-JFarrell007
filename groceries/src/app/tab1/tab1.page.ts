import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { GroceriesService } from '../api/groceries.service';
import { InputDialogService } from '../dialog/input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Grocery List';

  // tslint:disable-next-line: max-line-length
  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesService, public inputDialogService: InputDialogService ) {}

  loadItems() {
    return this.dataService.getItems();
  }
  async removeItem(item, index) {
    console.log('Removing Item - ', index);
    const toast = await this.toastController.create({
      message: 'Removing Item – ' + index + '...',
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }
  async editItem(item, index) {
    console.log('Editing Item - ', index);
    const toast = await this.toastController.create({
      message: 'Editing Item – ' + index + '...',
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  async addItem() {
    console.log('Adding item');
    this.inputDialogService.showPrompt();
  }

}
