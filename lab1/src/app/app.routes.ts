import { Routes } from '@angular/router';
import { MemberForm } from './member-form/member-form';
import { Member } from './member/member';
import { Dashbord } from './dashbord/dashbord';
import { Tool } from './tool/tool';
import { Article } from './article/article';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: 'create',
        component: MemberForm
    }, {
        path: '',
        component: Member
    }, {
        path: ':id/edit',
        //: pour dire que c dynamique, on peut mettre n'importe quel id  
        component: MemberForm
    }, {
        path: 'dashboard',
        component: Dashbord
    }, {
        path: 'tools',
        component: Tool
    }, {
        path: 'articles',
        component: Article
    }, {
        path: 'events',
        component: Event
    }, {
        path: 'member',
        component: Member
    }, {
        path: 'login',
        component: Login
    }
];
