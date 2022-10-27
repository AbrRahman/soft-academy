import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/blog/Blog";
import CourseDetails from "../../component/courseDetails/CourseDetails";
import Courses from "../../component/courses/Courses";
import Faq from "../../component/faq/Faq";
import Login from "../../component/login/Login";
import Register from "../../component/register/Register";
import Main from "../../layout/Main";
import PrivateRouter from "../privateRouter/PrivateRouter";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/course',
                loader: () => fetch('http://localhost:8000/course'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:8000/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            { path: '/faq', element: <PrivateRouter><Faq></Faq></PrivateRouter> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> }
        ]
    }
])