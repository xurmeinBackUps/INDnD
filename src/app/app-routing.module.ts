import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { BoardComponent } from './board/board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  { path : 'home', component : SplashComponent },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : PageNotFoundComponent }
];

const _routes : Routes = [
  { path : 'board', component : BoardComponent },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
