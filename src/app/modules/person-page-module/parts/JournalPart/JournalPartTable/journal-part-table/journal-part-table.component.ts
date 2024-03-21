import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrizmOverlayService, } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';
import { UsersService } from 'src/app/services/users/users.service';
import { IRow } from 'src/app/types/i-user';



@Component({
  selector: 'app-journal-part-table',
  templateUrl: './journal-part-table.component.html',
  styleUrls: ['./journal-part-table.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalPartTableComponent implements OnInit {
  
  @ViewChild('themeTable', { static: true, read: ElementRef }) el!: ElementRef;
  
  constructor(
    private overlay: PrizmOverlayService,
    public usersService: UsersService,
    public readonly theme: PrizmThemeService
  ) {}
  ngOnInit(): void {
    this.theme.update('dark', this.el.nativeElement);
  }
  public columns: string[] = ['begin', 'employer', 'position', 'status', "end"];

  public trackByFn(index: number, item: IRow) {
    return index;
  }
}
