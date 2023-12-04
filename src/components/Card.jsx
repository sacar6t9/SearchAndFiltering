
import { AiFillStar } from "react-icons/ai";
import{BsFillBagHeartFill} from "react-icons/bs"
const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <div>
      <section className="card">
      <img
            src={img}
            alt={title} className="card-image"
          />
          <div className="card-details">
            <h1 className="card-title">{title}</h1>
            <section className="card-reviews">
              {/* <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" /> */}
            {star } {star} {star } {star}
            <span className="total-review">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon"/>
              </div>
            </section>
          </div>
        </section>
    </div>
  )
}

export default Card
