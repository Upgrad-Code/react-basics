import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FolderStructure = ({ explorer }) => {
  const [toggle, setToggle] = useState(false);
  const hasChildren = explorer.items && explorer.items.length;
  return (
    <>
      <span className="px-2" onClick={() => setToggle(!toggle)} style={{display: "block"}}>
        {explorer.name}
      </span>
      <div className="px-4" style={{ display: toggle ? 'block' : 'none' }}>
        {hasChildren &&
          explorer.items.map((item) => (
            <FolderStructure key={item.name} explorer={item} />
          ))}
      </div>
    </>
  );
};

export default FolderStructure;
