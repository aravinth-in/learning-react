import '../styles/GlobalStyleDemo.css';

const GlobalStyleDemo = () => {
  return (
    <div className="global-container">
      <h2 className="global-title">External CSS Stylesheet Demo</h2>
      <p className="global-paragraph">
        This component uses a traditional external CSS file.
        Notice how we use `className` instead of `class`.
      </p>
      <button className="global-button">
        Hover Me
      </button>
    </div>
  );
};

export default GlobalStyleDemo;