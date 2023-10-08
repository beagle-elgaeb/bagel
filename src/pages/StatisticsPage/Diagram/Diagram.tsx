import { Chart } from "chart.js";
import { FC, RefObject, useEffect, useRef } from "react";
import { useCharts } from "../hooks/useChart";
import { registerables } from "chart.js";

Chart.register(...registerables);

const Diagram: FC<PropsType> = (props) => {
  const { titleRefArray } = props;

  const chartOptions = useCharts();
  const { datasets, options, highlightText, clearHighlightText } = chartOptions;
  const { highlightSegment, clearHighlightSegment } = chartOptions;

  const ref = useRef<HTMLCanvasElement>(null);

  if (!datasets || !options) return null;

  useEffect(() => {
    const canvasElement = ref.current!;
    const context = canvasElement.getContext("2d")!;

    const myDiagram = new Chart(context, {
      type: "doughnut",
      data: datasets,
      options,
    });

    canvasElement.addEventListener("mousemove", (event) => {
      const activeSegments = myDiagram.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        true
      );

      activeSegments.length > 0
        ? highlightText(titleRefArray, activeSegments[0].index)
        : clearHighlightText(titleRefArray);
    });

    titleRefArray.forEach((titleRef, i) => {
      titleRef.current!.addEventListener("mouseover", () => highlightSegment(myDiagram, i));

      titleRef.current!.addEventListener("mouseout", () => clearHighlightSegment(myDiagram));
    });

    return () => myDiagram.destroy();
  }, []);

  return <canvas ref={ref} width="328" height="328" />;
};

export default Diagram;

type PropsType = {
  titleRefArray: RefObject<HTMLParagraphElement>[];
};
