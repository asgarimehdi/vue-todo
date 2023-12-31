import TasksPage from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import SummaryPage from "../pages/SummaryPage.vue";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home",
    },
    {
        path: "/tasks",
        component: TasksPage,
        name: 'tasks',
       
    },
    {
        path: "/summary",
        component: SummaryPage,
        name: 'summary',
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register',
        // meta: {
        //     auth: true
        // }
    },
    {
        path: "/:notFound(.*)",
        name: 'error.404',
        component: NotFoundErrorPage,
    }
]

export default routes