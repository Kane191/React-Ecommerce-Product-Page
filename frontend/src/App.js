import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import AddShoppingCartIcon from '@material-ui/core/AddShoppingCart';
import './App.css';


// install material icon: npm install @material-ui/core @material-ui/icons
function App() {
  return (
    <div className="App">
      <div className="navigation">
        <ul>
          <li><img src="logo.svg" /></li>
          <li><a href="/">Collections</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <div className="right flex">
            <li><a href="/">
              <img src="icon-cart.svg" />
            </a></li>
            <li><a href="/"><img className="profile" src="image-avatar.png"/></a></li>
          </div>
        </ul>
      </div>
      <div className="row">

        <div className="col-6 product_image_div">
            <div>
              <img className="product_main_image" src="image-product-1-thumbnail.jpg"/>
            </div>

            <div className="flex product_images">
              <img  src="image-product-1-thumbnail.jpg"/>
              <img  src="image-product-1-thumbnail.jpg"/>
              <img src="image-product-1-thumbnail.jpg"/>
              <img src="image-product-1-thumbnail.jpg"/>
            </div>
          </div>

        <div className="col-6 product_texts">
          <p className="title">SNEAKERS COMPANY</p>
          <p className="product_name">Fall Limited Edition Sneakers</p>
          <p className="product_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales tempus cursus. Donec in nisi tortor. Mauris sit amet libero dolor. Fusce nibh ex, pretium eget sagittis ac, accumsan vitae nibh. Proin mattis, massa vel fermentum convallis, </p>
          <div className="flex">
            <p className="product_price">$125.00</p>
            <p className="product_discount">$0%</p>
          </div>
          <p className="original_price">$250.00</p>
          <div className="flex cart">
            <button className=" btn btn-primary counter_btn"><img src="icon-plus.svg" /></button>
            <p>0</p>
            <button className=" btn btn-primary counter_btn"><img src="icon-minus.svg" /></button>
            <button className=" btn btn-primary orange_bg"><img src="icon-cart.svg" /> Add to cart</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
