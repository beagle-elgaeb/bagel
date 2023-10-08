import { Chart } from "chart.js";
import { RefObject } from "react";
import { colors } from "../../../styles/colors";
import { useData } from "./useData";

export const useCharts = () => {
  const { data } = useData();

  const dataArray = data
    ? Object.keys(data)
        .map((key) => data[key as keyof typeof data])
        .reverse()
    : [];

  const datasets = {
    datasets: [
      {
        labels: ["Эксплуатация", "Создание и развитие", "Инфраструктура"],
        data: dataArray,
        backgroundColor: [colors.orange, colors.lightBlue, colors.darkBlue],
      },
    ],
  };

  const options = {
    cutout: 95,
    rotation: 2,
    reverse: true,
    elements: { arc: { borderWidth: 0 } },
    plugins: { tooltip: { enabled: false } },
    events: [],
    animations: false,
  } as {};

  const highlightText = (titleRefArray: RefObject<HTMLParagraphElement>[], i: number) => {
    titleRefArray.forEach(({ current }) => {
      current!.style.textDecoration = "none";
    });

    titleRefArray[i].current!.style.textDecoration = "underline";
  };

  const clearHighlightText = (titleRefArray: RefObject<HTMLParagraphElement>[]) => {
    titleRefArray.forEach(({ current }) => {
      current!.style.textDecoration = "none";
    });
  };

  const highlightSegment = (myDiagram: Chart<"doughnut", number[], unknown>, index: number) => {
    const backgrounds = myDiagram.data.datasets[0].backgroundColor as string[];
    const opasityBackgrounds = backgrounds.map((background) => background + "CC");

    backgrounds[index] = opasityBackgrounds[index];
    myDiagram.update();
  };

  const clearHighlightSegment = (myDiagram: Chart<"doughnut", number[], unknown>) => {
    myDiagram.data.datasets[0].backgroundColor = [colors.orange, colors.lightBlue, colors.darkBlue];
    myDiagram.update();
  };

  return {
    datasets,
    options,

    highlightText,
    clearHighlightText,

    highlightSegment,
    clearHighlightSegment,
  };
};
