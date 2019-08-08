import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';

const routes = [
    {
        path: 'main', component: MainComponent, children: [
            { path: 'title', component: HomeComponent, data: { animation: 'login' } },
            { path: 'popular', component: PopularComponent, data: { animation: 'registration' } },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}