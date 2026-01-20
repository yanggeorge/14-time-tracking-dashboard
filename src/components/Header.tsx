import React from 'react'
import TimeRangeSelector from './TimeRangeSelector'
import './Header.scss'

interface HeaderProps {
  selectedTimeframe: 'daily' | 'weekly' | 'monthly'
  onTimeframeChange: (timeframe: 'daily' | 'weekly' | 'monthly') => void
}

const Header: React.FC<HeaderProps> = ({ selectedTimeframe, onTimeframeChange }) => {
  return (
    <div className="header">
      <div className="profile">
        <img src="/images/image-jeremy.png" alt="" className="profile-image" />
        <div className="profile-content">
          <p className="profile-desc">Report for</p>
          <p className="profile-name">Jeremy Robson</p>
        </div>
      </div>
      <TimeRangeSelector selected={selectedTimeframe} onSelect={onTimeframeChange} />
    </div>
  )
}

export default Header
