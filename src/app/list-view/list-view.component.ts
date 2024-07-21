import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OremusList } from '../entities/list.entity';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  @Input() list: OremusList | undefined;
}
