import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from '../pages/routing'
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideComponent } from './componentes/aside/aside.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// const routes: Routes = [
//   { path: '',
//     // component: LayoutComponent,
//     children: Routing,
//   }
// ];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule
  ],
  exports: [RouterModule,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class LayoutModule { }
