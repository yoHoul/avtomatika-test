import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { InfoPartComponent } from './modules/person-page-module/parts/InfoPart/info-part.component';
import { JournalPartComponent } from './modules/person-page-module/parts/JournalPart/journal-part.component';
import { ApiService } from './services/api/api.service';
import { UsersService } from './services/users/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PrizmButtonModule,
  PrizmInputLayoutDateRangeComponent,
  PrizmInputPasswordModule,
  PrizmInputSelectModule,
  PrizmProgressModule,
  PrizmScrollbarModule,
  PrizmSelectModule,
  PrizmSwitcherModule,
  PrizmTableModule,
} from '@prizm-ui/components';
import { LoginPageComponent } from './modules/person-page-module/pages/LoginPage/login-page/login-page.component';
import { PrizmIconsSvgModule } from '@prizm-ui/icons';
import { InfoCardComponent } from './modules/person-page-module/components/InfoCardComponent/info-card/info-card.component';
import { JournalPartTableComponent } from './modules/person-page-module/parts/JournalPart/JournalPartTable/journal-part-table/journal-part-table.component';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { EventChartComponent } from './modules/person-page-module/components/charts/EventChart/eventChart/eventChart.component';
import { IncidentChartComponent } from './modules/person-page-module/components/charts/IncidentChart/incidentChart/incidentChart.component';
import { KpiChartComponent } from './modules/person-page-module/components/charts/KPIChart/kpiChart/kpiChart.component';
import { LabChartComponent } from './modules/person-page-module/components/charts/LabChart/labChart/labChart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { AddInfoCardComponent } from './modules/person-page-module/components/InfoCardComponent/addInfoCard/addInfoCard/addInfoCard.component';
import { AddStatisticTabComponent } from './modules/person-page-module/components/AnlyticsPartComponent/AddStatisticTab/addStatisticTab/addStatisticTab.component';
import { PersonPageComponent } from './modules/person-page-module/pages/PersonPage/person-page.component';
import { AnalyticsPartComponent } from './modules/person-page-module/parts/AnalyticsPart/analytics-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PersonPageComponent,
    InfoPartComponent,
    JournalPartComponent,
    LoginPageComponent,
    InfoCardComponent,
    JournalPartTableComponent,
    EventChartComponent,
    IncidentChartComponent,
    KpiChartComponent,
    LabChartComponent,
    AddInfoCardComponent,
    AddStatisticTabComponent,
    AnalyticsPartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmInputPasswordModule,
    PrizmButtonModule,
    PrizmIconsSvgModule,
    PrizmSwitcherModule,
    PrizmTableModule,
    PrizmScrollbarModule,
    PrizmThemeModule,
    PrizmProgressModule,
    NgxEchartsModule.forRoot({ echarts }),
    PrizmInputLayoutDateRangeComponent,
    PrizmInputSelectModule
    
  ],
  providers: [ApiService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
