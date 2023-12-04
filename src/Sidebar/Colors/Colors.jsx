import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test3" onChange={handleChange} />
        <span className="checkmark all"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" value="" onChange={handleChange} />
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test3" onChange={handleChange} />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>{" "}
        white
      </label>
    </div>
  );
};

export default Colors;
