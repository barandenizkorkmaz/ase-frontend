import './App.css';
import { LoginComponent } from './feature/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AseLayout from './general/AseLayout';


function App() {
  return (
    <BrowserRouter>
      <AseLayout>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/home" element={<h1>Deneme</h1>} />
        </Routes>
      </AseLayout>
    </BrowserRouter>
  );
}

export default App;
