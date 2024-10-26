import React from 'react';
import './Divider.css';

const Divider = ({ color = '#000000', width }) => {
    return <hr className="divider" style={{ backgroundColor: color, width: width }} />;
};

export default Divider;
