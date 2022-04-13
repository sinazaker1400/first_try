

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
export default Button;