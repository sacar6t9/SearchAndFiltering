import './Colors.css'

const Colors = () => {
  return (
    <div>
       <label  className="sidebar-title-container color-title">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>All
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>Black
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />  
        <span className="checkmark"> </span>Blue
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>Red
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>Green
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>White
      </label>
    </div>
  )
}

export default Colors
