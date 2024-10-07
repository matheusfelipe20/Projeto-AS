import React from 'react';
import './Divider.css';

const Divider = ({ color = '#000000' }) => {
    return <hr className="divider" style={{ backgroundColor: color }} />;
};

export default Divider;
