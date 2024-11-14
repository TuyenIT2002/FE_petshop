import Home from '~/pages/Home';
import Pet from '~/pages/Pet';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import config from '~/components/config/config';

// những đường dẫn khi không đăng nhập mà vẫn có thể xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.pet, component: Pet },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.contact, component: Contact },
];

// khi không đăng nhập thì lái người dùng sang trang đăng nhập
const privateRoutes = {};

export { publicRoutes, privateRoutes };
