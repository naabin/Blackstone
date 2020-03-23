import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import { LoginService } from './service/login.service';
import { AddMenuService } from './service/add-menu.service';
import { DatePipe } from '@angular/common';
import { SharedService } from './shared/shared.service';
import { CateringService } from './service/catering.service';
import { TagService } from './service/tag.service';
import { NavBarComponent } from './components/admin/nav-bar/nav-bar.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AddMenuComponent } from './components/admin/menu/add-menu/add-menu.component';
import { MenuListComponent } from './components/admin/menu/menu-list/menu-list.component';
import { MenuItemComponent } from './components/admin/menu/menu-item/menu-item.component';
import { AddCateringComponent } from './components/admin/catering/add-catering/add-catering.component';
import { CateringListComponent } from './components/admin/catering/catering-list/catering-list.component';
import { CateringItemComponent } from './components/admin/catering/catering-item/catering-item.component';
import { TagComponent } from './components/admin/category/tag/tag.component';
import { TagListComponent } from './components/admin/category/tag-list/tag-list.component';
import { TaggedCateringListComponent } from './components/admin/catering/tagged-catering-list/tagged-catering-list.component';
import { ImageComponent } from './components/admin/image/image.component';
import { SpecialOfdComponent } from './components/admin/special-ofd/special-ofd.component';
import { HomeComponent } from './components/ui/home/home.component';
import { CarouselComponent } from './components/ui/carousel/carousel.component';
import { AboutComponent } from './components/ui/about/about.component';
import { ReservationComponent } from './components/ui/reservation/reservation.component';
import { MenuFeatureComponent } from './components/ui/menu-feature/menu-feature.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { UiMenuComponent } from './components/ui/ui-menu/ui-menu.component';
import { ImageGalleryComponent } from './components/ui/image-gallery/image-gallery.component';
import { ContactComponent } from './components/ui/contact/contact.component';
import { CateringComponent } from './components/ui/catering/catering.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddMenuComponent,
    MenuListComponent,
    MenuItemComponent,
    AddCateringComponent,
    CateringListComponent,
    CateringItemComponent,
    TagComponent,
    TagListComponent,
    TaggedCateringListComponent,
    ImageComponent,
    SpecialOfdComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    ReservationComponent,
    MenuFeatureComponent,
    FooterComponent,
    UiMenuComponent,
    ImageGalleryComponent,
    ContactComponent,
    CateringComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgxGalleryModule

  ],
  providers: [
    LoginService,
    AddMenuService,
    { provide: DatePipe, useValue: {} },
    SharedService,
    CateringService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
