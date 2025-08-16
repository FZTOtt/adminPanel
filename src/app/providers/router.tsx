import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/root-layout";
import { UsersPage } from "../../pages/users";
import { MethodsPage } from "../../pages/methods";
import { TransactionsPage } from "../../pages/transactions";
import { ExportPage } from "../../pages/export";
import { CoursePage } from "../../pages/course";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/users',
                element: <UsersPage />
            },
            {
                path: '/methods',
                element: <MethodsPage/>
            },
            {
                path: '/trans',
                element: <TransactionsPage/>
            },
            {
                path: '/export',
                element: <ExportPage/>
            },
            {
                path: '/course',
                element: <CoursePage/>
            }
        ]
    }
])