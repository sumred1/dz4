import { Component } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent {
  title = 'Война и мир';
  year = 1868;
  pages = '1300~';
  edition = 'Речь';
}
