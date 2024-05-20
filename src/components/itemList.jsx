import React, { useEffect } from "react";
import useListStore from "../app/listStore";

const ItemList = () => {
  const { list, loader, fetchList } = useListStore((state) => ({
    list: state.list,
    loader: state.loader,
    fetchList: state.fetchList,
  }));

  useEffect(() => {
    fetchList();
  }, []);

  console.log("LIST", list);

  return (
    <>
      <ul>
        {Array.isArray(list) &&
          list.map((lists, i) => (
            <React.Fragment key={i}>
              <li
                className="course-item"
                style={{
                  backgroundColor: "grey",
                }}
              >
                <span style={{ color: "black" }}>{lists?.title}</span>
                <span style={{ color: "black" }}>{lists?.description}</span>
              </li>
            </React.Fragment>
          ))}
      </ul>
    </>
  );
};

export default ItemList;
