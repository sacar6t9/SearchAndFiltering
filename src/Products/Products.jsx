import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import{BsFillBagHeartFill} from "react-icons/bs"
const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src=" https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoes"
          />
          <div className="card-details">
            <h1 className="card-title">Shoes</h1>
            <section className="card-reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            <span className="total-review">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del> $300</del> 200
              </div>
              <div className="bag">
                <BsFillBagHeartFill/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
