import sty from "./Container.module.css";

const Container = (props) => {
    return (
        <div className={sty.Container}>{props.children}</div>
    );
}

export default Container;