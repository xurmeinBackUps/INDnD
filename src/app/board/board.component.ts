import {Component} from '@angular/core';
import {
  animate, 
  state, 
  style, 
  transition, 
  trigger
} from '@angular/animations';

import { Contract } from '../models/contract';


@Component({
  selector: 'app-board',
  styleUrls: ['board.component.css'],
  templateUrl: 'board.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BoardComponent {
  // constructor(
  //   public contract : Contract
  // ){  }
  dataSource = CONTRACT;
  columnsToDisplay = [ 'title', 'DM', 'maxParty' ];
  contractDetails: Contract | null;
};

const CONTRACT : Contract[] = [
  {
    title : 'Mystery of the Lagoon',
    DM : 'me',
    description : 'fdasgfwredwa',
    maxParty : 5,
    minParty : 3
  },
  {
    title : 'Mystery of the Lagoon2',
    DM : 'me',
    description : 'fdasgfwredwa',
    maxParty : 5,
    minParty : 3
  },
  {
    title : 'Mystery of the Lagoon3',
    DM : 'me',
    description : 'fdasgfwredwa',
    maxParty : 5,
    minParty : 3
  }
];