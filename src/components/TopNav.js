import { useState, useEffect } from "react";
import { TiThList } from "react-icons/ti";
import "./TopNav.css";

const TopNav = (props) => {
  const [groupValue, setgroupValue] = useState("status");
  const [orderValue, setOrderValue] = useState("priority");
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const { setGroup, setOrder } = props;

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      localStorage.setItem("group", e.target.value);
      setgroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      setGroup(e.target.value);
    } else {
      localStorage.setItem("order", e.target.value);
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      setOrder(e.target.value);
    }
  };

  return (
    <div className="top-header" style={{ paddingLeft: "10px" }}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          {" "}
          <TiThList /> Display
        </button>
        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span>Grouping</span>
                <select
                  value={groupValue}
                  onChange={(e) => handleGroupValue(e, true)}
                  className="selectStyle"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select
                  value={orderValue}
                  onChange={(e) => handleGroupValue(e, false)}
                  className="selectStyle"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
