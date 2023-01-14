import './App.css';
import { LoginComponent } from './feature/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AseLayout from './general/AseLayout';
import { AddDelivery } from './feature/delivery/add/AddDelivery';
import { AddBox } from './feature/box/add/AddBox';
import { AddUser } from './feature/user/add/AddUser';
import DeleteDelivery from './feature/delivery/delete/DeleteDelivery';
import { ListDelivery } from './feature/delivery/list/ListDelivery';
import { ScanQr } from './feature/scanqr/ScanQr';


function App() {
  return (
    <BrowserRouter>
      <AseLayout>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/home" element={<h1>Deneme</h1>} />
          <Route exact path="/list/delivery" element={<ListDelivery />} />
          <Route exact path="/delivery" element={<AddDelivery />} />
          <Route exact path="/box" element={<AddBox />} />
          <Route exact path="/user" element={<AddUser />} />
          <Route exact path="/delete/delivery" element={<DeleteDelivery />} />
          <Route exact path="/update/delivery" element={<h1>Update Deliverey</h1>} />
          <Route exact path="/scanqr" element={<ScanQr/>} />

        </Routes>
      </AseLayout>
    </BrowserRouter>
  );
}

export default App;
