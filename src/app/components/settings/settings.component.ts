import { Component, OnInit } from '@angular/core';
import { WhoopsDialogService } from '../../services/whoops-dialog.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private whoops: WhoopsDialogService) { }

  ngOnInit(): void { }

  openWhoops = () => this.whoops.open();

}
