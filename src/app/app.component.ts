import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OremusList } from './entities/list.entity';
import { ListViewComponent } from './list-view/list-view.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private listService: ListService) {
    this.exampleList = this.listService.getList('ID001');
  }
  title = 'oremus';
  exampleList: OremusList | undefined;
}
