export interface IUser {
  id: number;
  password: string;
  name: string;
  position: string;
  isActive: boolean;
  backgroundColor?: string;
  img?: string;
}

export interface ICard {
  title: string;
  lastDate: string;
  taskComplete: number;
  notification: boolean;
  allTasks?: number;
}

export interface IUserUI {
  id: number;
  cards: ICard[];
  table: IRow[];
  incidentChartData: {value: number, name: string}[];
  KPIChartData: {mounth: string[], value: number[]};
  LabChartData: {mounth: string[], value: number[]};
  EventChartData: {title: string, decription: string, date: string}[];
}

export interface IRow {
  begin: string;
  employer: string;
  position: string;
  status: string;
  end: string;
}
