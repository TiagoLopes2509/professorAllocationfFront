import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Allocation from  './pages/Allocation';
import Course from './pages/Course';
import Department from './pages/Department';
import Professor from './pages/Professor';
import Layout from './components/Layout';
import Home from './pages/Home';
import Page from './components/Page';
import AllocationForm from  './pages/Allocation/AllocationForm';
import CourseForm from './pages/Course/CourseForm';
import DepartmentForm from './pages/Department/DepartmentForm';
import ProfessorForm from './pages/Professor/ProfessorForm'


function AppRoutes() {
  return (  
    <BrowserRouter>
       <Routes>
        <Route 
          element = {
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path='/' element={<Home/>} />

          <Route path='/allocation'>
            <Route index element={<Allocation />} />
            <Route path='create' element={<AllocationForm />} />
            <Route path=':id/update' element={<AllocationForm />} />
          </Route>

          <Route path='/course'>
            <Route index element={<Course />} />
            <Route path='create' element={<CourseForm />} />
            <Route path=':id/update' element={<CourseForm />} />
          </Route>

          <Route path='/department'>
            <Route index element={<Department />} />
            <Route path='create' element={<DepartmentForm />} />
            <Route path=':id/update' element={<DepartmentForm />} />
          </Route>

          <Route path='/professor'>
            <Route index element={<Professor />} />
            <Route path='create' element={<ProfessorForm />} />
            <Route path=':id/update' element={<ProfessorForm />} />
          </Route>

          <Route
            path='*'
            element={<Page title='404...'>Page not found</Page>}
          />

        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default AppRoutes;