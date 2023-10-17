import Card from "./Card";
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
              <h2 style={{ textAlign: "center", paddingTop: "1rem" }}>
                {ele.title}
              </h2>
              {ele.value?.map((childEle, ind) => {
                return (
                  <Card
                    key={ind}
                    title={childEle.title}
                    id={childEle.id}
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
