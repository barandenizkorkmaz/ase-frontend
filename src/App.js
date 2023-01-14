import './App.css';
import { LoginComponent } from './feature/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AseLayout from './general/AseLayout';
import { AddDelivery } from './feature/delivery/add/AddDelivery';
import { AddBox } from './feature/box/add/AddBox';
import { DeleteBox } from './feature/box/delete/DeleteBox';
import { DeleteDelivery } from './feature/delivery/delete/DeleteDelivery';
import { DeleteUser } from './feature/user/delete/DeleteUser';
import { AddUser } from './feature/user/add/AddUser';
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
          <Route exact path="/delivery/create" element={<AddDelivery />} />
          <Route exact path="/box/create" element={<AddBox />} />
          <Route exact path="/user/register" element={<AddUser />} />
          <Route exact path="/box/delete" element={<DeleteBox />} />
          <Route exact path="/delivery/delete" element={<DeleteDelivery />} />
          <Route exact path="/user/delete" element={<DeleteUser />} />
          <Route exact path="/update/delivery" element={<h1>Update Deliverey</h1>} />
          <Route exact path="/scanqr" element={<ScanQr/>} />

        </Routes>
      </AseLayout>
    </BrowserRouter>
  );
}

export default App;
