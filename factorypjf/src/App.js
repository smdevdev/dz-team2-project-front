import { Route, Routes } from "react-router-dom";
import "style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "style/Table.css";
import Layout from "./component/layout/Layout";
import Storage from "./component/management/storage/Storage";
import Management from "./pages/Management";
import Partner from "./component/management/partner/Partner";
import Item from "./component/management/item/Item";
import Product from "./component/management/product/Product";
import UnitPrice from "./component/management/unitPrice/UnitPrice";
import Code from "component/management/code/Code";
import StorageRoutes from "./pages/Storage";
import StorageInquiry from "./component/storage//item/Inquiry";
import Registration from "./component/storage/registration/Registration";
import ProductionRoutes from "router/ProductionRoutes";
import InBound from "component/management/inbound/InBound";
import ItemRelation from "component/management/itemRelation/ItemRelation";
import { MovementsList } from "component/storage/movement/MovementsList";
import Movement from "component/storage/movement/Movement";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/production/*" element={<ProductionRoutes />} />
        {/* <Route path="/inbound/*" element={<InboundRoutes/>}/>
        <Route path="/storage/*" element={<StorageRoutes/>}/> */}

        <Route path="/storage/" element={<StorageRoutes />}>
          <Route path="" element={<StorageInquiry />} />
          <Route path="movement" element={<Movement />} />
          <Route path="movementsList" element={<MovementsList />} />
          <Route path="registration" element={<Registration />} />
        </Route>

        <Route path="/management" element={<Management />}>
          <Route index path="item" element={<Item />} />
          <Route path="storage" element={<Storage />} />
          <Route path="partner" element={<Partner />} />
          <Route path="product" element={<Product />} />
          <Route path="unitprice" element={<UnitPrice />} />
          <Route path="code" element={<Code />} />
          <Route path="inbound" element={<InBound />} />
          <Route path="relation" element={<ItemRelation />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
