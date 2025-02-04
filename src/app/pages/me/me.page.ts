import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [ToolbarComponent, IonContent],
  templateUrl: './me.page.html',
  styleUrl: './me.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MePage {}
