import { Component } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ToolbarComponent, IonContent, IonButton],
})
export class HomePage {
  constructor() {}
}
