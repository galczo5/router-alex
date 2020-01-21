import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlankBackgroundComponent} from './blank-background/blank-background.component';
import {ExampleContent1Component} from './example-content1/example-content1.component';
import {NavBackgroundComponent} from './nav-background/nav-background.component';
import {ExampleContent2Component} from './example-content2/example-content2.component';


const routes: Routes = [
  {
    path: 'blank',
    children: [
      { path: '', component: BlankBackgroundComponent, outlet: 'wrapper' },
      { path: '', component: ExampleContent1Component, outlet: 'content' }
    ]
  },
  {
    path: 'example1',
    children: [
      { path: '', component: NavBackgroundComponent, outlet: 'wrapper' },
      { path: '', component: ExampleContent1Component, outlet: 'content' }
    ]
  },
  {
    path: 'example2',
    children: [
      { path: '', component: NavBackgroundComponent, outlet: 'wrapper' },
      { path: '', component: ExampleContent2Component, outlet: 'content' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
