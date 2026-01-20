import React from 'react'
import { Timeframe } from '../types'
import './TimeRangeSelector.scss'

interface TimeRangeSelectorProps {
  selected: Timeframe
  onSelect: (timeframe: Timeframe) => void
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="time-range-selector">
      {(['daily', 'weekly', 'monthly'] as const).map((timeframe) => (
        <button
          key={timeframe}
          className={`time-range-btn ${selected === timeframe ? 'active' : ''}`}
          onClick={() => onSelect(timeframe)}
        >
          {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default TimeRangeSelector
