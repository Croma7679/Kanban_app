import Card from "./Card";
import { AiOutlinePlus } from "react-icons/ai";
import "./Dashboard.css";
import "../Utils/utils.css";

const DashBoard = (props) => {
  const { finalData, user } = props;
  console.log("user", user);
  return (
    <div>
      <div className="ParBox disp-f">
        {/* <div> */}
        {finalData?.map((ele, ind) => {
          return (
            <div className="IndBox disp-f" key={ind}>
              <div className="heading disp-f">
                <div className="left-side disp-f">
                  {!user ? (
                    <div className="progress" >
                      <img
                        src="https://static-00.iconduck.com/assets.00/in-progress-icon-510x512-mw0pz22p.png"
                        alt="UserImage"
                      />
                      <div className="showStatus"></div>
                    </div>
                  ) : (
                    <div style={{ width: "30px", height: "30px" }}>
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="UserImage"
                      />
                      <div className="showStatus"></div>
                    </div>
                  )}
                  <div >
                    <span className="title">{ele.title}: </span>
                    <span>{ele.value?.length}</span>
                  </div>
                </div>
                <div className="right-side disp-f">
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
                    user={user}
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
