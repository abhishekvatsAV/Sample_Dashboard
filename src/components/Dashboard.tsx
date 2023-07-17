import "./Dashboard.css";
import BargraphOne from "./BargraphOne";
import BargraphTwo from "./BargraphTwo";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="intro">
        <h1>hello, Puneet Dhiman</h1>
        <p>following is your organization’s performance summary</p>
      </div>

      <div className="grid">
        {/* for 1st grid element */}
        <div className="grid-1">
          <div>in training workers</div>
          <div className="graphbox">
            <div className="graphboxfirstchild">
              <h1>3,354</h1>
              <div className="graphbox2child">
                <div>
                  <img src="images/trendUp.svg" alt="trendUp-icon" />
                  <p>20%</p>
                </div>
                <p>234</p>
              </div>
            </div>
            <div className="minigraph">
              <div className="graph">
                <img src="images/graph1.svg" alt="" />
              </div>
              <div className="week">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>

        {/* for 2nd grid element */}
        <div className="grid-1">
          <div>in training workers</div>
          <div className="graphbox">
            <div className="graphboxfirstchild">
              <h1>2,433</h1>
              <div className="graphbox2child">
                <div
                  style={{
                    background: "rgba(237, 28, 36, 0.10)",
                    color: "#ED1C24",
                  }}
                >
                  <img src="images/trendupred.svg" alt="trendUp-icon" />
                  <p>20%</p>
                </div>
                <p>435</p>
              </div>
            </div>
            <div className="minigraph">
              <div className="graph">
                <img src="images/graphred.svg" alt="" />
              </div>
              <div className="week">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>

        {/* for 3nd grid element */}
        <div className="grid-1">
          <div>% workers passing quiz</div>
          <div className="graphbox">
            <div className="graphboxfirstchild">
              <h1>95</h1>
              <div className="graphbox2child">
                <div>
                  <img src="images/trendUp.svg" alt="trendUp-icon" />
                  <p>20%</p>
                </div>
                <p>24</p>
              </div>
            </div>
            <div className="minigraph">
              <div className="graph">
                <img src="images/graph1.svg" alt="" />
              </div>
              <div className="week">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>

        {/* for 4th grid element */}
        <div className="grid-1">
          <div>avg. days taken</div>
          <div className="graphbox">
            <div className="graphboxfirstchild">
              <h1>6</h1>
              <div className="graphbox2child">
                <div>
                  <img src="images/trendUp.svg" alt="trendUp-icon" />
                  <p>20%</p>
                </div>
                <p>3</p>
              </div>
            </div>
            <div className="minigraph">
              <div className="graph">
                <img src="images/graph1.svg" alt="" />
              </div>
              <div className="week">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>

        {/* for 5th grid element */}
        <div>
          <h5
            style={{
              color: "#333",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "100%",
              textTransform: "capitalize",
            }}
          >
            chapter wise status
          </h5>
          <div style={{ paddingTop: "20px", paddingBottom: "10px" }}>
            <img src="images/chapterCircle.svg" alt="" />
          </div>
          <div className="chaptergrid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle cx="5.28766" cy="5.15753" r="4.32877" fill="#0D62FF" />
              </svg>
              <div
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                finished training
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle
                  cx="5.05478"
                  cy="5.15753"
                  r="4.32877"
                  fill="#333333"
                  fill-opacity="0.3"
                />
              </svg>
              <div
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                chapter a
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle cx="5.28766" cy="4.81506" r="4.32877" fill="#8400D5" />
              </svg>
              <div
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                chapter b
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle cx="5.05478" cy="4.81506" r="4.32877" fill="#425F57" />
              </svg>
              <div
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                chapter c
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
              >
                <circle cx="5.28766" cy="4.4726" r="4.32877" fill="#ED1C24" />
              </svg>
              <div
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                haven’t started yet
              </div>
            </div>
          </div>
        </div>

        {/* for 6th grid element */}
        <BargraphOne />

        {/* for 7th grid element */}
        <div className="grid7">
          <h5>monthly training activity</h5>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <img src="images/arrowUp.svg" alt="" />
            <p
              style={{
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "140%",
                color: "rgba(51, 51, 51, 0.50)",
              }}
            >
              16% more enrollees this month
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {/* this below div is for checkpoints */}
            <div>
              <div className="circle firstCircle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                paddingTop: "25px",
              }}
            >
              <div className="courseBlock">
                <p>course a</p>
                <p>23 workers took this course this week</p>
              </div>
              <div className="courseBlock">
                <p>course b</p>
                <p>253 workers took this course this week</p>
              </div>
              <div className="courseBlock">
                <p>course c</p>
                <p>253 workers took this course this week</p>
              </div>
              <div className="courseBlock">
                <p>course d</p>
                <p>253 workers took this course this week</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flexbox" style={{ padding: "0" }}>
          {/* for 8th grid element */}
          <div className="quiz">
            <h5
              style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "21px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "100%",
                textTransform: "capitalize",
              }}
            >
              quiz passing %
            </h5>
            <div style={{ display: "flex", gap: "30px", paddingTop: "30px" }}>
              <div>
                {/* // TODO double circle here */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "196px",
                    width: "196px",
                    background:
                      "radial-gradient(white 40%, transparent 41%), conic-gradient(#DA3831 0% 55%, #3E8C4B 55% 100%)",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingTop: "30px",
                }}
              >
                {/* for passed  */}
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <circle
                      cx="5.74026"
                      cy="6.49999"
                      r="5.74032"
                      fill="#018E42"
                    />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        color: "#333",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "140%",
                      }}
                    >
                      passed
                    </p>
                    <p
                      style={{
                        color: "#333",
                        fontFamily: "Poppins",
                        fontSize: "11px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "140%",
                        textTransform: "capitalize",
                      }}
                    >
                      1423 workers
                    </p>
                  </div>
                </div>

                {/* for failed */}
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <circle
                      cx="5.74026"
                      cy="6.49999"
                      r="5.74032"
                      fill="#ED1C24"
                    />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        color: "#333",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "140%",
                      }}
                    >
                      failed
                    </p>
                    <p
                      style={{
                        color: "#333",
                        fontFamily: "Poppins",
                        fontSize: "11px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "140%",
                        textTransform: "capitalize",
                      }}
                    >
                      134 workers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* for 9th grid element */}
          <BargraphTwo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
