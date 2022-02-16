import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainCarouselComponent } from './body/mainCarousel/mainCarousel.component';
import { ManagementCardComponent } from './body/managementCard/managementCard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagementLayoutComponent } from './body/management-layout/management-layout.component';
import { HomeLayoutComponent } from './body/home-layout/home-layout.component';
import { TrendsLayoutComponent } from './body/trends-layout/trends-layout.component';
import { CommunityLayoutComponent } from './body/community-layout/community-layout.component';
import { LearningLayoutComponent } from './body/learning-layout/learning-layout.component';
import { AssessmentLayoutComponent } from './body/assessment-layout/assessment-layout.component';
import { SupportLayoutComponent } from './body/support-layout/support-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ManagementCardComponent,
    MainCarouselComponent,
    ManagementLayoutComponent,
    HomeLayoutComponent,
    TrendsLayoutComponent,
    CommunityLayoutComponent,
    LearningLayoutComponent,
    AssessmentLayoutComponent,
    SupportLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
