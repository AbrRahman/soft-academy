import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/blog/Blog";
import CourseDetails from "../../component/courseDetails/CourseDetails";
import Courses from "../../component/courses/Courses";
import Faq from "../../component/faq/Faq";
import Main from "../../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/course', element: <Courses></Courses> },
            { path: '/course/:id', element: <CourseDetails></CourseDetails> },
            { path: '/faq', element: <Faq></Faq> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])