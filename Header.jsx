import style from "./Header.module.scss";
const Header = () => {
  return (
    <div>
      <header className={style.ama}>
        <ul>
          <li>
            <a href="#">AMA DESIGN</a>
          </li>
          <li>
            <a href="#">All Competitors</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
