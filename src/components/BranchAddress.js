import React, { useState } from 'react';
import './BranchAddress.css';

const BranchAddress = () => {
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illo ipsa velit facilis provident qui eligendi, quia ut magnam tenetur. Accusantium nisi quos delectus in necessitatibus ad. Ducimus, id!";
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
      <div className="row">
        <div className="col-md-6">
          <CollapsiblePanel title="Kolkata - New Town">
            <span>{text}</span>
          </CollapsiblePanel>
        </div>
        <div className="col-md-6">
          <CollapsiblePanel title="New Delhi - Vidya Vihar">
            <span>{text}</span>
          </CollapsiblePanel>
        </div>
      </div>
    </div>
  );
};

export default BranchAddress;
