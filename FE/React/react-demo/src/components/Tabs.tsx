import { useState } from "react";

export function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-panel">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}