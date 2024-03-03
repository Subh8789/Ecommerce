import Home from './homepage/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Errorpage from './components/Errorpage';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';
import OrderPage from './pages/OrderPage';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


function App() {

  let persistor = persistStore(appStore)
  
  return (
    <>
   <Provider store={appStore}>
   <PersistGate  persistor={persistor}>
    <BrowserRouter>
      <Routes>
      <Route path='*' element={<Errorpage err={"Enter the correct url"} />} />
        <Route path='/' element={<Home />} />
        <Route path='/productdetail/:id' element={<ProductDetail />}/>
        <Route path='/orderpage' element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
    
    </PersistGate>
    </Provider>
    </>
      
   
  );
}

export default App;
