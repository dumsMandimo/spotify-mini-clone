import "./button.css";

export default function Button({ cgildren, onClick, variant = "primary" }) {
    return (
        <button className={`btn ${variant}`} onClick={onClick}>
            {children}
        </button>
    );
}