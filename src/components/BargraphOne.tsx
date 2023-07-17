import { useEffect, useState } from "react";

function BargraphOne() {
  const [widthArr, setWidthArr] = useState([
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
    "0%",
  ]);

  useEffect(() => {
    setWidthArr([
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
      "40%",
      "50%",
      "60%",
      "70%",
    ]);
  }, []);
  return (
    <div className="bargraph1box">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
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
          last 14 days active workers in training
        </div>
        <div
          style={{
            color: "#333",
            fontFamily: "Poppins",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "140%",
            textTransform: "capitalize",
          }}
        >
          last 14 days
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          paddingTop: "41px",
        }}
      >
        <div className="yAxisBar1">
          {/* y axis */}
          <p>400</p>
          <p>300</p>
          <p>200</p>
          <p>100</p>
          <p>0</p>
        </div>

        <div style={{ width: "100%" }}>
          <div className="bargrp1">
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[0] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[1] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[2] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[3] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[4] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[5] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[6] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[7] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[8] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[9] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[10] }}></div>
            </div>
            <div className="bar">
              <div className="smallBar" style={{ height: widthArr[11] }}></div>
            </div>
          </div>
          <div className="xAxisBar1">
            <p>3 Jun</p>
            <p>4 Jun</p>
            <p>5 Jun</p>
            <p>6 Jun</p>
            <p>7 Jun</p>
            <p>8 Jun</p>
            <p>9 Jun</p>
            <p>10 Jun</p>
            <p>11 Jun</p>
            <p>12 Jun</p>
            <p>13 Jun</p>
            <p>14 Jun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BargraphOne;
