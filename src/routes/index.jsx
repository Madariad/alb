import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from '../pages/index.jsx';
import Dashboard from '../pages/Dashboard';
import DashboardCont from '../pages/Dashboard/components/Dashboard.jsx';

import Materials from "../pages/Dashboard/components/Materials.jsx";
import Advice from "../pages/Dashboard/components/Advice.jsx";
import LessonPlans from "../pages/Dashboard/components/LessonPlans.jsx"; 
import LessonDetails from "../pages/Dashboard/components/LessonDetails.jsx";
import MaterialsDetails from "../pages/Dashboard/components/MaterialsDetails.jsx";
import Tasks from "../pages/Dashboard/components/Tasks.jsx";
import TaskDetails from "../pages/Dashboard/components/TaskDetails.jsx";
import Education from "../pages/Dashboard/components/education.jsx";



const routes = 
[
    {
        path: '/',
        element: <Home />,
        ErrorPage: <ErrorPage />
    },
    {
        path: 'materials',
        element: <Dashboard />,
        ErrorPage: <ErrorPage />,
       
        children: [
            {
                index: true,
            
                element: <DashboardCont />,
                errorElement: <ErrorPage />,
    
              
            },
            {
                path: 'metodic',
                element: <Materials />,
                errorElement: <ErrorPage />
            },
            {
                path: 'metodic/details/:id',
                element: <MaterialsDetails />,
                errorElement: <ErrorPage />
            },
            {
                path: 'advice',
                element: <Advice />,
                errorElement: <ErrorPage />
            },
            {
                path: 'lesson',
                element: <LessonPlans />,
                errorElement: <ErrorPage />
            },
            {
                path: 'lesson/details/:id',
                element: <LessonDetails />,
                errorElement: <ErrorPage />
            },  
            {
                path: 'tasks',
                element: <Tasks />,
                errorElement: <ErrorPage />
            },
            {
                path: 'tasks/details/:id',
                element: <TaskDetails />,
                errorElement: <ErrorPage />
            },

            {
                path: 'education',
                element: <Education />,
                errorElement: <ErrorPage />
            },
        ]
    }
]
const router = createBrowserRouter(routes, ErrorPage);
export default router;