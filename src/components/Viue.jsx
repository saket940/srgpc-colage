import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from'./index'
import Indexa from './admin/index';
import Temp from'./temp'
import Cse from './department/cse'
import Ae from './department/ae'
import Nav from './nav'
import Imgslider from './admin/imgslider';
import Facilities from './facilities'
import About from './about'
import Admin from './admin'
import Spct from './admin/Spct'
import Cl from './facilities/cl'
import Home from './admin/home';
import Etl from './facilities/etl'
import Ftl from './facilities/ftl'
import Gh from './facilities/gh'
import Spc from './facilities/Spc'
import Departement from './department'
import Student from './student'
import Layout from './Layout'
import Smartclass from './facilities/smartclass'
import Et from './department/et'
import Ft from './department/ft'
import Mom from './department/mom'
import Update from './admin/Update';
import NewsCard from './news';
import Event from './event';
import Newecom from './Newecom';

import Evnecom from './Evnecom';
import Updatenews from './admin/Updatenews';
import Addnews from './admin/Addnews';
import Addevent from './admin/Addevent';
import Updateevent from './admin/Updateevent';
import Elearning from './student/Elearning';
import Scholarships from './student/Scholarships';
import TimeTable from './student/TimeTable';
import Syllabus from './student/Syllabus';
import UpdateTimetable from './admin/UpdateTimetable'
import UpdateSyllabus from './admin/UpdateSyllabus';
import UpdateMaterials from './admin/UpdateMaterials';
import Admissions from './Admissions';

const Viue = () => {
    const router = createBrowserRouter([{
        path: "/",
        element: <Layout />, // Use Layout as the wrapper
        children: [
        {
            path:"*",
            element:<Nav/>
        },
        {
            path:"/",
            element:<>
            <Nav/>
            <Index/></>
        },
        {
            path:"/news",
            element:<>
            <Nav/>
            <NewsCard/></>
        },
        {
            path:"/news/:id",
            element:<>
            <Nav/>
            <Newecom/></>
        },
        {
            path:"/event/:id",
            element:<>
            <Nav/>
            <Evnecom/></>
        },
        {
            path:"/event",
            element:<>
            <Nav/>
            <Event/></>
        },
        {
            path:"/admin/index",
            element:<>
            <Indexa/>
            <Home></Home>
            </>
        },
        {
            path:"/admin/updata",
            element:<>
            <Indexa/>
            <Update/>
            </>
        },
        {
            path:"/admin/event",
            element:<>
            <Indexa/>
            <Addevent/>
            </>
        },
        {
            path:"/admin/news",
            element:<>
            <Indexa/>
            <Addnews/>
            </>
        },
        {
            path:"/admin/update/news",
            element:<>
            <Indexa/>
            <Updatenews/>
            </>
        },
        {
            path:"/admin/update/event",
            element:<>
            <Indexa/>
            <Updateevent/>
            </>
        },
        {
            path:"/admin/Solar-Powered_Campus_table",
            element:<>
            <Indexa/>
            <Spct/>
            </>
        },
        {
            path:"/admin/img_slider",
            element:<>
            <Indexa/>
            <Imgslider/>
            </>
        },
        
        {
            path:"/admin",
            element:<>
            <Admin/></>
        },
        {
            path:"/about",
            element:<>
            <Nav/>
            <About/></>
        },
        {
            path:"/temp",
            element:<>
            <Nav/><Temp/></>
        },
        {
            path:"/department/ae",
            element:<>
            <Nav/>
            <Ae/></>
        },
        {
            path:"/department/cse",
            element:<>
            <Nav/>
            <Cse/></>
        },
        {
            path:"/department/et",
            element:<>
            <Nav/>
            <Et/></>
        },
        {
            path:"/department/ft",
            element:<>
            <Nav/>
            <Ft/></>
        },
        {
            path:"/department/mom",
            element:<>
            <Nav/>
            <Mom/></>
        },
        {
            path:"/department",
            element:<>
            <Nav/><Departement/></>
        },
        {
            path:"/student",
            element:<>
            <Nav/><Student/></>
        },
        {
            path:"/e-learning",
            element:<>
            <Nav/><Elearning/></>
        },
        {
            path:"/scholarships",
            element:<>
            <Nav/><Scholarships/></>
        },
        {
            path:"/time-table",
            element:<>
            <Nav/><TimeTable/></>
        },
        {
            path:"/syllabus",
            element:<>
            <Nav/><Syllabus/></>
        },
        {
            path:"/facilities/Solar-Powered Campus",
            element:<><Nav/><Spc/></>
        },
        {
            path:"/facilities",
            element:<><Nav/><Facilities/></>
        },
        {
            path:"/facilities/Computer-Lab",
            element:<><Nav/><Cl/></>
        },
        {
            path:"/facilities/Electronics-Lab",
            element:<><Nav/><Etl/></>
        },
        {
            path:"/facilities/Fashion-Technology-Lab",
            element:<><Nav/><Ftl/></>
        },
        {
            path:"/facilities/Girl's-Hostel",
            element:<><Nav/><Gh/></>
        },
        {
            path:"/facilities/Smart-Classroom",
            element:<><Nav/><Smartclass/></>
        },
        {
            path:"/admin/update-timetable",
            element:<>
            <Indexa/>
            <UpdateTimetable/>
            </>
        },
        {
            path:"/admin/uplode-syllabus",
            element:<>
            <Indexa/>
            <UpdateSyllabus/>
            </>
        },
        {
            path: "/admin/update-materials",
            element: <>
                <Indexa/>
                <UpdateMaterials/>
            </>
        },
        {
            path: "/admissions",
            element: <>
                <Nav/>
                <Admissions/>
            </>
        }
    ],
},
    ])
  return (
<><RouterProvider router={router}/></>
  )
}
export default Viue;
