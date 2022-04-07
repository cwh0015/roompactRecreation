import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagementLayoutComponent } from './body/management-layout/management-layout.component';
import { HomeLayoutComponent } from './body/home-layout/home-layout.component';
import { TrendsLayoutComponent } from './body/trends-layout/trends-layout.component';
import { CommunityLayoutComponent } from './body/community-layout/community-layout.component';
import { LearningLayoutComponent } from './body/learning-layout/learning-layout.component';
import { AssessmentLayoutComponent } from './body/assessment-layout/assessment-layout.component';
import { SupportLayoutComponent } from './body/support-layout/support-layout.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  
  {
    path: 'admin', component: AddCardComponent
  },

  {
    path: 'auth', component: AuthenticationComponent
  },

  {
    path: 'Management_Layout', component: ManagementLayoutComponent
  },

  {
    path: 'home', component: HomeLayoutComponent
  },

  {
    path:'Trends-Layout', component: TrendsLayoutComponent
  },

  {
    path: 'Community-Layout', component: CommunityLayoutComponent
  },

  {
    path: 'Learning-Layout', component: LearningLayoutComponent
  },

  {
    path: 'Assessment-Layout', component: AssessmentLayoutComponent
  },

  {
    path: 'Support-Layout', component: SupportLayoutComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
