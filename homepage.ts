import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  mensagem:string='';

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  verificarRadio() {
    if (this.radioSelecionada==='opition1'){
      this.mensagem='Você escolheu opção1';
    }else{
      if (this.radioSelecionada==='opition2'){
        this.mensagem='Você escolheu opção2';
      }else{
        this.mensagem='Você escolheu opção3';
      }
    }

    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
      color:'danger',
      position: 'bottom'
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
