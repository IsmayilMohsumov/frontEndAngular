import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConfigService} from '../../service/config.service';
import {Configurations} from '../../models';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  heroes = [];
  outputsArr = [];
  config: Configurations = new Configurations('1', 'somedata', 'payload');

  addHero(newHero: string) {
    this.checkValue(newHero, this.heroes);
    if (this.checkValue(newHero, this.heroes) === 'Not exists') {
      this.heroes.push(newHero);
    } else {
      alert('exist');
    }
  }

  addValueToOutputs(newValue: string) {
    this.checkValue(newValue, this.outputsArr);
    if (this.checkValue(newValue, this.outputsArr) === 'Not exists') {
      this.outputsArr.push(newValue);
    } else {
      alert('exist');
    }
  }

  constructor(private service: ConfigService) {
  }

  ngOnInit(): void {
  }

  checkValue(value, arr) {
    let status = 'Not exists';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      const name = arr[i];
      if (name === value) {
        status = 'Exist';
        break;
      }
    }
    return status;
  }

  deleteValue(value: string) {
    this.heroes.splice(this.heroes.indexOf(value), 1);
  }

  deleteValueForOutputs(value: string) {
    this.outputsArr.splice(this.outputsArr.indexOf(value), 1);
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    alert('here');
  }

  addConfig() {
    this.service.addConfig(this.config).subscribe();
  }
}
