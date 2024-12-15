import style from "./App.module.scss";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Drawer from "./components/drawer/Drawer";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div className={style.wrapper}>
      <Drawer />
      <Header />
      <div className={style.content}>
        <div className={style.upBlock}>
          <h1>Тебе понравится</h1>
          <div className={style.searchBlock}>
            <SearchIcon />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className={style.featured}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
