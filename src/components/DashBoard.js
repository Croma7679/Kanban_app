import Card from "./Card";
import { AiOutlinePlus } from "react-icons/ai";
import "./Dashboard.css";

const DashBoard = (props) => {
  const { finalData } = props;
  console.log("dashboard", finalData);
  return (
    <div>
      <div className="ParBox">
        {/* <div> */}
        {finalData?.map((ele, ind) => {
          return (
            <div className="IndBox" key={ind}>
              <div className="heading">
                <div className="title">
                  <span>{ele.title} : </span>
                  {ele.value?.length}
                </div>
                <div className="right-side">
                  <AiOutlinePlus />{" "}
                  <span style={{ letterSpacing: "2px", marginLeft: "12px" }}>
                    ...
                  </span>
                </div>
              </div>
              {ele.value?.map((childEle, ind) => {
                return (
                  <Card
                    key={ind}
                    title={childEle.title}
                    id={childEle.id}
                    tag={childEle.tag}
                    status={childEle.status}
                  ></Card>
                );
              })}
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
