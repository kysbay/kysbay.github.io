import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { DevelopmentServicesComponent } from './components/development-services/development-services.component';
import { DevelopmentApproachComponent } from './components/development-approach/development-approach.component';
import { TechListComponent } from './components/tech-list/tech-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MainSectionComponent,
        DevelopmentServicesComponent,
        DevelopmentApproachComponent,
        TechListComponent,
        ContactComponent,
        AboutusComponent,
        FooterComponent,
        ModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
