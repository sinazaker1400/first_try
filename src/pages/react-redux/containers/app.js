import React from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import {
  setInput,
  setName,
  setStyle,
  setSpace,
  setKeeper,
} from "../actions/villaActions";
import Button from "../components/Button";
// import { Divider } from "@material-ui/core";

class ReactReduxApp extends React.Component {
  render() {
    return (
      <div>
        <Input
          id="input-1"
          eventHandler={() =>
            this.props.setInput(document.getElementById("input-1").value)
          }
        />

        <Button
          eventHandler={() => {
            this.props.setName(this.props.villa.inputValue);
            document.getElementById("input-1").value = "";
          }}
          text="set the villa name"
        />

        <Button
          eventHandler={() => {
            this.props.setStyle(this.props.villa.inputValue);
            document.getElementById("input-1").value = "";
          }}
          text="set the villa style"
        />

        <Button
          eventHandler={() => {
            this.props.setSpace(this.props.villa.inputValue);
            document.getElementById("input-1").value = "";
          }}
          text="add the villa space"
        />

        <Button
          eventHandler={() => {
            this.props.setKeeper(this.props.villa.inputValue);
            document.getElementById("input-1").value = "";
          }}
          text="set the villa keeper"
        />

        <p>
          the villa name is {this.props.villa.villaName} and it's style is{" "}
          {this.props.villa.villaStyle} & villa spaces are{" "}
          {this.props.villa.villaSpaces.map((space) => space + ", ")}& the villa
          keeper is {this.props.villa.villaKeeper}
        </p>
        <div className="villa_div">
          
          <div className="villa_spaces">
            {this.props.villa.villaSpaces.map((space) => (
              <span className="villa_space">{space}</span>
            ))}
          </div>
          <span className="villa_keeper_span">
            {this.props.villa.villaKeeper && this.props.villa.villaName && (
              <img
                className="villa_keeper_img"
                src="https://www.kindpng.com/picc/m/168-1689748_clip-art-carpet-cleaning-png-transparent-png.png"
                title={
                  "Hi Sir, I am your villa keeper," +
                  this.props.villa.villaKeeper
                }
              ></img>
            )}
          </span>
          <span className="villa_icon_span">
{this.props.villa.villaName && (
    <img className="villa_icon"
    src="https://www.kindpng.com/picc/m/76-765636_beach-house-icon-beach-house-icon-png-transparent.png"
    title={this.props.villa.villaName}></img>
)}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    villa: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInput: (value) => {
      dispatch(setInput(value));
    },
    setName: (name) => {
      dispatch(setName(name));
    },
    setStyle: (style) => {
      dispatch(setStyle(style));
    },
    setSpace: (space) => {
      dispatch(setSpace(space));
    },
    setKeeper: (keeper) => {
      dispatch(setKeeper(keeper));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxApp);
