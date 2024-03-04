import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'controlFlow',
        title: 'Control-Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'deferOptions',
        title: 'Defer-Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path:'deferViews',
        title: 'Defer-Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'example',
        title: 'Example',
        loadComponent: () => import('./dashboard/pages/example/example.component'),
      },
      {
        path: 'reactiveForms',
        title: 'Reactive-Forms',
        loadComponent: () => import('./dashboard/pages/reactive-forms/reactive-forms.component'),
      },
      {
        path: 'prendas',
        title: 'Almacen de prendas',
        loadComponent: () => import('./dashboard/pages/prendas/prendas.component'),
      },
      {
        path: 'dynamicForm',
        title: 'Dynamic-Form',
        loadComponent: () => import('./dashboard/pages/dynamic-form/dynamic-form.component'),
      },
      {
        path: 'repasoForm',
        title: 'Repaso-Form',
        loadComponent: () => import('./dashboard/pages/repaso-form/repaso-form.component'),
      },
      {
        path: 'examen',
        title: 'Examen',
        loadComponent: () => import('./dashboard/pages/examen/examen.component'),
      },
/*       {
        path: 'gepetoTest',
        title: 'Gepeto-Test',
        loadComponent: () => import('./dashboard/pages/gepeto-test/gepeto-test.component'),
      }, */
      {
        path: 'registerForm',
        title: 'Formulario de registro',
        loadComponent: () => import('./dashboard/pages/register-form/register-form.component')
      },
      {
        path: 'contador',
        title: 'Pagina de contador',
        loadComponent: () => import('./dashboard/pages/contador/contador.component')

      },
      {
        path:'tareas',
        title:'Pagina de tareas',
        loadComponent: () => import('./dashboard/pages/tareas/tareas.component')
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'control-flow',
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  }
];
