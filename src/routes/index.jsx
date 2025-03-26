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
        ]
    }
]
const router = createBrowserRouter(routes, ErrorPage);
export default router;