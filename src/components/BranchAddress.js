import React, { useState } from 'react';
import './BranchAddress.css';

const BranchAddress = () => {
  const text2 = "98, Vidya Vihar,West Enclave, Pitampura, Delhi";
  const text1 = "Flat No. C1/701 Street-702, Near City Centre-2, New Town - Kolkata";
  const [expandedPanel, setExpandedPanel] = useState(null);

  const toggleExpand = (panelName) => {
    setExpandedPanel((prevPanel) => (prevPanel === panelName ? null : panelName));
  };

  const CollapsiblePanel = ({ title, children }) => {
    const isExpanded = expandedPanel === title;

    return (
      <div className="collapsible-panel">
        <div className="panel-header" onClick={() => toggleExpand(title)}>
          <h3 className="panel-title">{title}</h3>
          <span className={`panel-icon ${isExpanded ? 'minus' : 'plus'}`}>
            {isExpanded ? '-' : '+'}
          </span>
        </div>
        {isExpanded && <div className="panel-content">{children}</div>}
      </div>
    );
  };

  return (
    <div className="container my-2">
      <div className="panels-container">
        <div className="panel">
          <CollapsiblePanel title="Kolkata - New Town">
            <span>{text1}</span>
          </CollapsiblePanel>
        </div>
        <div className="panel">
          <CollapsiblePanel title="New Delhi - Vidya Vihar">
            <span>{text2}</span>
          </CollapsiblePanel>
        </div>
      </div>
    </div>
  );
};

export default BranchAddress;
