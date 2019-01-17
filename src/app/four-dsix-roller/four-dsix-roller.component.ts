import { Component } from '@angular/core';

@Component({
  selector: 'app-four-dsix-roller',
  templateUrl: './four-dsix-roller.component.html',
  styleUrls: ['./four-dsix-roller.component.css']
})
export class FourDsixRollerComponent {
  private roll = new AbilityScoreRoll

  constructor() { }

  rollAbilityScore() {
    console.log(this.roll)
  }
}

export class AbilityScoreRoll {
    public die1 = new Number;
    public die2 = new Number;
    public die3 = new Number;
    public die4 = new Number;

  fourD6dropOne: Array<any> = [
    this.die1 = (Math.floor(Math.random() * 6) + 1),
    this.die2 = (Math.floor(Math.random() * 6) + 1),
    this.die3 = (Math.floor(Math.random() * 6) + 1),
    this.die4 = (Math.floor(Math.random() * 6) + 1)
  ]

}
