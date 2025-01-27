import logo from '../../assets/logo.svg';

const Logo = ({ className: styles }) => {
  return (
    <a
      className={styles}
      href="https://raresdrg.github.io/Health-React-Node.js-project/"
    >
      <img src={logo} alt="app-logo" />
      <p>
        <span>Health</span>
        <span>App</span>
      </p>
    </a>
  );
};

export default Logo;
