import React from 'react';
import '../styles/Timeline.css';
import { TimelineProps } from '../interfaces/TimelineProps';
const typeConfig: Record<string, { color: string; dot: string }> = {
  Open: { color: '#cce5ff', dot: '#0ea5e9' },
  Submission: { color: '#ffefcc', dot: '#f59e0b' },
  Internal: { color: '#e9e9e9', dot: '#6366f1' },
  Critical: { color: '#ffd1d1', dot: '#ef4444' },
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="sm-timeline">
      <div className="sm-timeline-header">
        <h3 className="sm-timeline-title">Detailed Timeline</h3>
      </div>
      <div className="sm-timeline-scroll-area">
        <div className="sm-timeline-list">
        {events.map((event, idx) => {
          const cfg = typeConfig[event.type];
          const activeColor = event.colorOverride || cfg.color;
          const activeDotColor = event.colorOverride || cfg.dot;

          return (
            <div key={idx} className="sm-timeline-item">
              <div className="sm-timeline-dot-col">
                <div
                  className="sm-timeline-dot"
                  style={{ borderColor: activeDotColor }}
                />
                {idx < events.length - 1 && (
                  <div className="sm-timeline-line" />
                )}
              </div>
              <div className="sm-timeline-body">
                <div className="sm-timeline-top">
                  <span
                    className="sm-timeline-badge"
                    style={{ color: '#202020', backgroundColor: `${activeColor}` }}
                  >
                    {event.type}
                  </span>
                  <span className="sm-timeline-date">{event.date}</span>
                </div>
                <div className="sm-timeline-details">
                  <h4 className="sm-timeline-event-title">{event.title}</h4>
                  <p className="sm-timeline-desc">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
