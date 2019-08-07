import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';

const routes = [
    {
        path: '', component: MainComponent, children: [
            { path: 'main', component: HomeComponent },
            { path: 'popular', component: PopularComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}