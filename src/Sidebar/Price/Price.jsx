import './Price.css'

const Price = () => {
  return ( 
    <div className='ml'>
    <h1 className='sidebar-title price-title'> Price</h1>
    <label  className="sidebar-title-container">
        <input type="radio" name="test2" />
        <span className="checkmark"> </span>All
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test2" />
        <span className="checkmark"> </span>$0-$50
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test2" />
        <span className="checkmark"> </span>$50-$100
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test2" />
        <span className="checkmark"> </span>$100-$150
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test2" />
        <span className="checkmark"> </span>over $150
      </label>
    </div>
  )
}

export default Price
