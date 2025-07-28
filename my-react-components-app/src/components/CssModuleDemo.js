import styles from './CssModuleDemo.module.css';

const CssModuleDemo = () => {
  return (
    <div className={styles.container}> {/* Access classes via the imported styles object */}
      <h2 className={styles.title}>CSS Modules Demo</h2>
      <p className={styles.paragraph}>
        This uses CSS Modules. The class names are automatically scoped,
        so `container` here won't conflict with another `container` elsewhere.
      </p>
      <button className={styles.moduleButton}>
        Click Me (Scoped)
      </button>
    </div>
  );
};

export default CssModuleDemo;