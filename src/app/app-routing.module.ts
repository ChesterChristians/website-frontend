import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { HomeComponent } from './pages/home/home.component';
import { JesusWhoComponent } from './pages/jesus-who/jesus-who.component';
import { MinistryComponent } from './pages/ministry/ministry.component';
import { TheBodyComponent } from './pages/the-body/the-body.component';
import { ThinkComponent } from './pages/think/think.component';
import { UnityPleaseComponent } from './pages/unity-please/unity-please.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'jesus-who', component: JesusWhoComponent},
  {path: 'unity-please', component: UnityPleaseComponent},
  {path: 'think', component: ThinkComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'ministry', component: MinistryComponent},
  {path: 'the-body', component: TheBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
