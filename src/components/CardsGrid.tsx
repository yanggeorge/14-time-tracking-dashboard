import React from "react";
import Card from "./Card";
import { Activity, Timeframe } from "../types";
import "./CardsGrid.scss";

interface CardsGridProps {
  activities: Activity[];
  timeframe: Timeframe;
}

const CardsGrid: React.FC<CardsGridProps> = ({ activities, timeframe }) => {
  const getPreviousLabel = (): string => {
    switch (timeframe) {
      case "daily":
        return "Last Day";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
    }
  };

  return (
    <div className="cards-grid">
      {activities.map((activity) => (
        <Card
          key={activity.title}
          activity={activity}
          timeframe={timeframe}
          previousLabel={getPreviousLabel()}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
