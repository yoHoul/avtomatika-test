import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmDayRange } from '@prizm-ui/components';
import {  Validators } from '@angular/forms';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'app-analytics-part',
  templateUrl: './analytics-part.component.html',
  styleUrls: ['./analytics-part.component.scss']
})
export class AnalyticsPartComponent implements OnInit {

  @ViewChild('themeTable', { static: true, read: ElementRef }) el!: ElementRef;
  @ViewChild('themeTable2', { static: true, read: ElementRef }) el2!: ElementRef;

  constructor(
    public readonly theme: PrizmThemeService
  ) {}

  readonly value = new UntypedFormControl(
    new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20))
  );
  readonly min = new PrizmDay(2000, 2, 20);
 
  readonly max = new PrizmDay(2040, 2, 20);

  readonly items = [
    'Расход',
    'Ещё что-то',
  ];
  readonly control = new UntypedFormControl(this.items[0], [Validators.required]);
 
  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }

  ngOnInit(): void {
    this.theme.update('dark', this.el.nativeElement);
    this.theme.update('dark', this.el2.nativeElement);
  }
}
