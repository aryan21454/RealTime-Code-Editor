import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import EditorPage from "./pages/EditorPage/EditorPage.jsx"
import { Toaster } from "react-hot-toast";
import './App.css'
function App() {
  return (
   <>
     <div>
      <Toaster position="top-right"
      toastOptions={{
        success:{
          iconTheme:{
            primary:'#531111'
          }
        }
      }}
      ></Toaster>

     </div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/editor/:id" element={ <EditorPage/> }/>
        </Routes>
      </Router>

   </>
  );
}

export default App;
