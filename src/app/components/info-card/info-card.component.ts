import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from './InfoCard';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input('card') card: InfoCard;
  constructor() { }

  ngOnInit() {

  }
}
