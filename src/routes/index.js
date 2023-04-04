//Layout
import RequireAuth from '~/components/Auth/RequiedAuth';
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Source from '~/pages/Source';
import Upload from '~/pages/Upload';

//public route
const publicRoutes = [
    { path: '/', component: Home, auth: RequireAuth },
    { path: '/source', component: Source, auth: RequireAuth },
    { path: '/upload', component: Upload, layout: HeaderOnly, auth: RequireAuth },
    { path: '/login', component: Login, layout: null, auth: null },
    { path: '/register', component: Register, layout: null, auth: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
