import './header.scss';

const headerStyle = {
  padding: '20px 0',
  lineHeight: '1.5em',
};

const Header = () => (
  <header style={headerStyle}>
    <h1
      style={{
        fontSize: '6rem',
        fontWeight: '600',
        marginBottom: '2rem',
        lineHeight: '1em',
        color: '#ececec',
        textTransform: 'lowercase',
        textAlign: 'center',
      }}
    >
      todos
    </h1>
  </header>
);
export default Header;
