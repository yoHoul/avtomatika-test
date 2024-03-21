import { Component } from '@angular/core';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-journal-part',
  templateUrl: './journal-part.component.html',
  styleUrls: ['./journal-part.component.scss'],
})
export class JournalPartComponent {
  constructor(public usersService: UsersService) {}
  public exportExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('ProductSheet');

    if (this.usersService.userUI) {
      worksheet.columns = [
        { header: 'Дата выхода на смену', key: 'begin', width: 30 },
        { header: 'Сотрудник', key: 'employer', width: 30 },
        { header: 'Должность', key: 'position', width: 30 },
        { header: 'Статус', key: 'status', width: 30 },
        { header: 'Дата завершения', key: 'end', width: 30 },
      ];
      worksheet.addRows(this.usersService.userUI?.table);
    }

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'Журнал смен.xlsx');
    });
  }
}
