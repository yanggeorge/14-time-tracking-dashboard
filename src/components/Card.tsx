import React from "react";
import { Activity, Timeframe } from "../types";
import "./Card.scss";

interface CardProps {
  activity: Activity;
  timeframe: Timeframe;
  previousLabel: string;
}

const Card: React.FC<CardProps> = ({ activity, timeframe, previousLabel }) => {
  const data = activity.timeframes[timeframe];
  const getIconPath = (): string => {
    const iconMap: Record<string, string> = {
      Work: "/images/icon-work.svg",
      Play: "/images/icon-play.svg",
      Study: "/images/icon-study.svg",
      Exercise: "/images/icon-exercise.svg",
      Social: "/images/icon-social.svg",
      "Self Care": "/images/icon-self-care.svg",
    };
    return iconMap[activity.title] || "/images/icon-exercise.svg";
  };

  const getActivityClass = (): string => {
    return activity.title.toLowerCase().replace(" ", "-");
  };
  return (
    <div
      className={`card-wrapper ${getActivityClass()}`}
      style={
        {
          "--icon-url": `url(${getIconPath()})`,
        } as React.CSSProperties
      }
    >
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{activity.title}</h3>
          <img
            src="/images/icon-ellipsis.svg"
            alt={`${activity.title} icon`}
            className="card-icon"
          />
        </div>
        <div className="card-content">
          <p className="current-time">
            {data.current}hr{data.current !== 1 ? "s" : ""}
          </p>
          <p className="previous-time">
            {previousLabel} - {data.previous}hr{data.previous !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
