import './App.css';
import { LoginComponent } from './feature/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AseLayout from './general/AseLayout';
import AddDelivery from './feature/delivery/add/AddDelivery';
import DeleteDelivery from './feature/delivery/delete/DeleteDelivery';
import DeleteCustomer from './feature/customer/delete/DeleteCustomer';
import AddCustomer from './feature/customer/add/AddCustomer';
import { ListDelivery } from './feature/delivery/list/ListDelivery';
import AddDeliverer from './feature/deliverer/add/AddDeliverer';
import DeleteDeliverer from './feature/deliverer/delete/DeleteDeliverer';
import { ListDeliverer } from './feature/deliverer/list/ListDeliverer';
import { ScanQr } from './feature/scanqr/ScanQr';


function App() {
  return (
    <BrowserRouter>
      <AseLayout>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/home" element={<h1>Deneme</h1>} />
          <Route exact path="/list/delivery" element={<ListDelivery />} />
          <Route exact path="/add/delivery" element={<AddDelivery />} />
          <Route exact path="/delete/delivery" element={<DeleteDelivery />} />
          <Route exact path="/update/delivery" element={<h1>Update Deliverey</h1>} />
          <Route exact path="/list/customer" element={<h1>List Customer</h1>} />
          <Route exact path="/delete/customer" element={<DeleteCustomer />} />
          <Route exact path="/add/customer" element={<AddCustomer />} />
          <Route exact path="/update/deliverer" element={<h1>Update Deliverer</h1>} />
          <Route exact path="/add/deliverer" element={<AddDeliverer />} />
          <Route exact path="/delete/deliverer" element={<DeleteDeliverer />} />
          <Route exact path="/list/deliverer" element={<ListDeliverer />} />
          <Route exact path="/scanqr" element={<ScanQr/>} />

        </Routes>
      </AseLayout>
    </BrowserRouter>
  );
}

export default App;
