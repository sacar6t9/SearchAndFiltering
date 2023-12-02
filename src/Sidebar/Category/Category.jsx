import "./Category.css";
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
    <div>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>All
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>Flats
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>Sandal
      </label>
      <label  className="sidebar-title-container">
        <input type="radio" name="test" />
        <span className="checkmark"> </span>Heels
      </label>
    </div>
    </div>
  );
};

export default Category;
