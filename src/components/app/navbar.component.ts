import {RouteComponent, LogService} from '../../frameworks/core.framework/index';

@RouteComponent({
  selector: 'sd-navbar',
  templateUrl: './components/app/navbar.component.html',
  styleUrls: ['./components/app/navbar.component.css']
})
export class NavbarComponent {
  constructor(public log: LogService) { 
    log.o(`ToolbarComponent created!`);
  }
}
