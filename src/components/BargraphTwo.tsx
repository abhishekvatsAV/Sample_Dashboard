import { useEffect, useState } from "react";

function BargraphTwo() {
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
    <div className="days7">
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
          daily training completions
        </div>
        <div
          style={{
            color: "#0F2552",
            fontFamily: "Poppins",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "140%",
            textTransform: "capitalize",
          }}
        >
          last 7 days
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "14px",
          paddingTop: "26px",
        }}
      >
        <div className="yAxisBar2">
          <p>160</p>
          <p>120</p>
          <p>80</p>
          <p>40</p>
          <p>0</p>
        </div>
        <div style={{ width: "100%" }}>
          <div>
            {/* //TODO bargraph */}
            <div className="bargrp1">
              <div className="bar changebar" style={{ height: "150px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[0],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "161px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[1],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "182px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[2],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "158px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[3],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "150px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[4],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "130px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[5],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "100px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[6],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "167px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[7],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "106px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[8],
                  }}
                ></div>
              </div>
              <div className="bar changebar" style={{ height: "111px" }}>
                <div
                  className="smallBar change"
                  style={{
                    height: widthArr[9],
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="xAxisBar2">
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>T</p>
            <p>F</p>
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BargraphTwo;
