import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCard from './components/HomeCard'
// import Joblisting from './components/Joblisting'
// import ViewAllJobs from './components/ViewAllJobs'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from "./pages/NotFound"
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/job/:id' element={<JobPage />} />
            <Route path='/add-job' element={<AddJobPage />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App