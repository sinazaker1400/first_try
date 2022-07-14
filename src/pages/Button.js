

const Button = (props) => {
    return (
    <button
          type={props.type}
          onClick={props.eventHandler}
          className={props.className}
          style={{
              color:`${props.color}`,
               backgroundColor:`${props.backgroundColor}`,
                width:`${props.width}`,
            height:`${props.height}`,
            padding:`${props.padding}`,
            margin:`${props.margin}`,
            fontSize:`${props.fontSize}px`
        }}
        >{props.text}</button>
    )
};

export const Input = (props) => {
    return (
        <form>
            <label for={props.name}>{props.labelText}</label><br /><br />
          <input
          value={props.text}
          name={props.name}
          id={props.id}
          type={props.type}
          onChange={props.eventHandler}
          className={props.className}
          style={{
              color:`${props.color}`,
               backgroundColor:`${props.backgroundColor}`,
                width:`${props.width}`,
            height:`${props.height}`,
            padding:`${props.padding}`,
            margin:`${props.margin}`,
            fontSize:`${props.fontSize}px`
        }}
        >{props.text}</input>
        </form>
    )
};

export default Button;