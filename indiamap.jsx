import React, { useEffect } from "react";

const IndiaMap2 = () => {
  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/jsapi";
      script.onload = () => {
        window.google.load("visualization", "1", { packages: ["geochart"] });
        window.google.setOnLoadCallback(drawVisualization);
      };
      document.body.appendChild(script);
    };

    const drawVisualization = () => {
      const data = new window.google.visualization.DataTable();
      data.addColumn("string", "State Code");
      data.addColumn("number", "");
      data.addColumn("number", "AQI PM@.5");
      data.addRows([
        ["Jammu and Kashmir", 0, 200], // Jammu and Kashmir - Orange
        ["Haryana", 0, 300], // Haryana - Orange
        ["IN-UT", 0, 208],
        ["Himachal Pradesh", 0, 107], // Himachal Pradesh - Orange
        ["Arunachal Pradesh", 0, 343], // Arunachal Pradesh - Orange
        ["Punjab", 0, 300], // Punjab - Orange
        ["Rajasthan", 1, 1030], // Rajasthan - White
        ["Gujarat", 1, 1304], // Gujarat - White
        ["Uttar Pradesh", 1, 780], // Uttar Pradesh - White
        ["Bihar", 1, 510], // Bihar - White
        ["Sikkim", 1, 724], // Sikkim - White
        ["West Bengal", 1, 620], // West Bengal - White
        ["Assam", 1, 280], // Assam - White
        ["Nagaland", 1, 201], // Nagaland - White
        ["Mizoram", 1, 423], // Mizoram - White
        ["Tripura", 1, 301], // Tripura - White
        ["Jharkhand", 1, 290], // Jharkhand - White
        ["Madhya Pradesh", 2, 700], // Madhya Pradesh - Blue
        ["Maharashtra", 1, 920], // Maharashtra - Green
        ["Chhattisgarh", 1, 330], // Chhattisgarh - Green
        ["Orissa", 1, 133], // Orissa - Green
        ["Andhra Pradesh", 3, 320], // Andhra Pradesh - Green
        ["Goa", 3, 1121], // Goa - Green
        ["Karnataka", 3, 1290], // Karnataka - Green
        ["Kerala", 3, 311], // Kerala - Green
        ["Tamil Nadu", 3, 930], // Tamil Nadu - Green
        ["Delhi", 0, 231],
        ["Manipur", 1, 220],
        ["Meghalaya", 1, 210],
      ]);

      const opts = {
        region: "IN",
        domain: "IN",
        displayMode: "regions",
        resolution: "provinces",
        backgroundColor: "#81d4fa",
        padding: "50%",
        defaultColor: "#f5f5f5",
        width: "100%",
        height: 600,
        colorAxis: {
          values: [0, 1, 2, 3],
          colors: [
            "#FF671F", // Orange
            "#FFFFFF", // White
            "#06038D", // Blue
            "#046A38", // Green
          ],
        },
      };

      const geochart = new window.google.visualization.GeoChart(
        document.getElementById("visualization")
      );

      window.google.visualization.events.addListener(geochart, "select", () => {
        const selection = geochart.getSelection();
        if (selection.length > 0) {
          const stateCode = data.getValue(selection[0].row, 0);
          const stateName =
            stateCode.toLowerCase().replace(/\s+/g, "-") + ".html";
          window.location.href = stateName;
        }
      });

      geochart.draw(data, opts);
    };

    loadGoogleCharts();
  }, []);

  return (
    <main id="main">
      <div align="center" width="100%">
        <div id="visualization" width="100%"></div>
      </div>
    </main>
  );
};

export default IndiaMap2;
