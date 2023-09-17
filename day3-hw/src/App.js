
import './App.css';
import Bestseller from './componants/Bestseller';
import Content_container from './componants/Content_container';
import Free_container from './componants/Free_container';
import Header_container from './componants/Header_container';
import Product_container from './componants/Product_container';

function App() {
  return (
    <div className="container">
    <Header_container />
    <Content_container />
    <Free_container />
    <Bestseller />
    <Product_container />

    </div>
  );
}

export default App;
