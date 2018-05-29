import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../_service/load-scripts.service';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.css']
})
export class DashboardTwoComponent implements OnInit {

  constructor(private _scriptService: LoadScriptsService) { }

  ngOnInit() {
   // this._scriptService.loadScripts();
  }

}
