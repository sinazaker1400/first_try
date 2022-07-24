import React from "react";
import {connect} from "react-redux";
import Input from "../components/Input";
import {setInput, setName, setStyle, setSpace, setKeeper} from "../actions/villaActions";
import Button from "../components/Button";



class ReactReduxApp extends React.Component {
    render() {
        return (
            <div>

                <Input
                id="input-1"
                eventHandler={() => this.props.setInput(document.getElementById("input-1").value)}
                />

               <Button eventHandler={() => {
                   this.props.setName(this.props.villa.inputValue);
                   document.getElementById("input-1").value = "";
            }}
            text="set the villa name"/>

            <Button eventHandler={() => {
                   this.props.setStyle(this.props.villa.inputValue);
                   document.getElementById("input-1").value = "";
            }}
            text="set the villa style"/>

<Button eventHandler={() => {
                   this.props.setSpace(this.props.villa.inputValue);
                   document.getElementById("input-1").value = "";
            }}
            text="add the villa space"/>

<Button eventHandler={() => {
                   this.props.setKeeper(this.props.villa.inputValue);
                   document.getElementById("input-1").value = "";
            }}
            text="set the villa keeper"/>

<p>the villa name is {this.props.villa.villaName} and it's style is {this.props.villa.villaStyle} & villa spaces are  {this.props.villa.villaSpaces.map(space => space + ", ")}& the villa keeper is {this.props.villa.villaKeeper}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      villa: state
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

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxApp);

