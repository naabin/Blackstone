import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/admin/login/login.component';
import { MenuListComponent } from './components/admin/menu/menu-list/menu-list.component';
import { AddMenuComponent } from './components/admin/menu/add-menu/add-menu.component';
import { MenuItemComponent } from './components/admin/menu/menu-item/menu-item.component';
import { AddCateringComponent } from './components/admin/catering/add-catering/add-catering.component';
import { CateringListComponent } from './components/admin/catering/catering-list/catering-list.component';
import { CateringItemComponent } from './components/admin/catering/catering-item/catering-item.component';
import { TagComponent } from './components/admin/category/tag/tag.component';
import { TagListComponent } from './components/admin/category/tag-list/tag-list.component';
import { TaggedCateringListComponent } from './components/admin/catering/tagged-catering-list/tagged-catering-list.component';
import { ImageComponent } from './components/admin/image/image.component';
import { HomeComponent } from './components/ui/home/home.component';
import { UiMenuComponent } from './components/ui/ui-menu/ui-menu.component';
import { ImageGalleryComponent } from './components/ui/image-gallery/image-gallery.component';




const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'menu',
        component: MenuListComponent
    },
    {
        path: 'add-menu',
        component: AddMenuComponent,

    },
    {
        path: 'add-menu/:id',
        component: AddMenuComponent
    },
    {
        path: 'menuById/:id',
        component: MenuItemComponent
    },
    {
        path: 'add-catering',
        component: AddCateringComponent
    },
    {
        path: 'add-catering/:id',
        component: AddCateringComponent
    },
    {
        path: 'catering',
        component: CateringListComponent
    },
    {
        path: 'catering/:id',
        component: CateringItemComponent
    },
    {
        path: 'add-category',
        component: TagComponent
    },
    {
        path: 'add-category/:id',
        component: TagComponent
    },
    {
        path: 'category-list',
        component: TagListComponent
    },
    {
        path: 'catering/tagName/:tagName',
        component: TaggedCateringListComponent
    },
    {
        path: 'image',
        component: ImageComponent
    },
    {
        path: 'our-menu',
        component: UiMenuComponent
    },
    {
        path: 'gallery',
        component: ImageGalleryComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
