import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import Schooldetails from './pages/Authentication/signupsteps/register_school';
import AddressDetails from './pages/Authentication/signupsteps/register_address';
import Admindata from './pages/Authentication/signupsteps/finalstep';
import LoginLoadingpage from './pages/Authentication/signupsteps/loadingpage';
const SchoolCalendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const Studenttable=lazy(()=>import('./components/studenttable'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const Studentadmissionform=lazy(()=>import('./components/studentadmissionform'));
const AddStudentHouse=lazy(()=>import('./components/AddStudentHouse'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const AddClasses=lazy(()=>import('./components/addclasses'));
const TearcherAdmissionform=lazy(()=>import('./components/Addteachers'));
const Teacherdetailtable=lazy(()=>import('./components/teacherstable'));
const Teacherspage =lazy(()=>import('./components/teacherspage'));
const Createtimetable=lazy(()=>import('./components/createtimetable'));
const FileUpload=lazy(()=>import('./components/try'));
const Studentdetailspage=lazy(()=>import('./components/studentdetailspage'));
const AddClasses_section=lazy(()=>import('./components/addclass_section'))
const Schooltimetable=lazy(()=>import('./components/schooltimetable'));
const Createsubject=lazy(()=>import('./components/createsubject'));
const Teacherdetailpage=lazy(()=>import('./components/teacherdetailpage'));
const AddSchoolHoilday=lazy(()=>import('./components/AddSchoolholiday'));
const Teachertimetable=lazy(()=>import('./components/teachertimetable'));
function App() {
 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/admin_account' element={<Admindata/>}/>
      <Route path='/loading' element={<LoginLoadingpage/>}/>
    
       <Route path='/register_address' element={<AddressDetails/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/register" element={<Schooldetails/> }/>
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          <Route
            path="/calendar"
            element={
              <Suspense fallback={<Loader />}>
                <SchoolCalendar />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/students/admissionform"
            element={
              <Suspense fallback={<Loader />}>
                <Studentadmissionform />
              </Suspense>
            }
          />
            <Route
            path="/academics/studentclasses"
            element={
              <Suspense fallback={<Loader />}>
                <AddClasses/>
              </Suspense>
            }
          />
            <Route
            path="/academics/createsubjects"
            element={
              <Suspense fallback={<Loader />}>
                <Createsubject/>
              </Suspense>
            }
          />
            <Route
            path="/try"
            element={
              <Suspense fallback={<Loader />}>
                <FileUpload/>
              </Suspense>
            }
          />

            <Route
            path="/academics/classes_sections"
            element={
              <Suspense fallback={<Loader />}>
                <AddClasses_section/>
              </Suspense>
            }
          />
           <Route
            path="/students/studentdetails/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Studentdetailspage/>
              </Suspense>
            }
          />
           <Route
            path="/setting/studenthouses"
            element={
              <Suspense fallback={<Loader />}>
             <AddStudentHouse/>
              </Suspense>
            }
          />
           <Route
            path="/students/detailtable"
            element={
              <Suspense fallback={<Loader />}>
              <Studenttable/>
              </Suspense>
            }
          />
            <Route
            path="/human_resoures/add_teachers"
            element={
              <Suspense fallback={<Loader />}>
              <TearcherAdmissionform/>
              </Suspense>
            }
          />
             <Route
            path="/human_resoures/teaching-staff/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Teacherdetailpage/>
              </Suspense>
            }
          />
            <Route
            path="/human_resoures/teaching-staff"
            element={
              <Suspense fallback={<Loader />}>
              <Teacherspage/>
              </Suspense>
            }
          />
            <Route
            path="/academics/createtimetable"
            element={
              <Suspense fallback={<Loader />}>
              <Createtimetable/>
              </Suspense>
            }
          />
            <Route
            path="/academics/addschoolholiday"
            element={
              <Suspense fallback={<Loader />}>
              <AddSchoolHoilday/>
              </Suspense>
            }
          />
           <Route
            path="/academics/schooltimetable"
            element={
              <Suspense fallback={<Loader />}>
              <Schooltimetable/>
              </Suspense>
            }
          />
           <Route
            path="/academics/schooltimetable/:teacher_id"
            element={
              <Suspense fallback={<Loader />}>
              <Teachertimetable/>
              </Suspense>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <Suspense fallback={<Loader />}>
                <FormElements />
              </Suspense>
            }
          />
              <Route
            path="/teacherstable"
            element={
              <Suspense fallback={<Loader />}>
                <Teacherdetailtable/>
              </Suspense>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <Suspense fallback={<Loader />}>
                <FormLayout />
              </Suspense>
            }
          />
          <Route
            path="/tables"
            element={
              <Suspense fallback={<Loader />}>
                <Tables />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
          <Route
            path="/chart"
            element={
              <Suspense fallback={<Loader />}>
                <Chart />
              </Suspense>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <Suspense fallback={<Loader />}>
                <Alerts />
              </Suspense>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <Suspense fallback={<Loader />}>
                <Buttons />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
