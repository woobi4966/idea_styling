import classnames from "classnames";
import Card from "./Card";
import css from "./CardMenu.module.css";
import { useState, useEffect, useCallback } from "react";

function CardMenu() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const getPostTitle = useCallback(async () => {
    const res = await fetch("http://localhost:3001/c_table");
    const json = await res.json();
    console.log(json);
    setTitle(json[0].title);
  }, []);

  useEffect(() => {
    getPostTitle();
  }, [getPostTitle]);

  return (
    <div className={classnames(css.section)}>
      {/* <h1>Card Menu</h1> */}
      <div className={css.cards}>
        <Card title="hello" />
        <Card title={title} />
        <Card title="hello" />
        <Card title="hello" />
        <Card title="hello" />
        <Card title="hello" />
      </div>
    </div>
  );
}

export default CardMenu;
