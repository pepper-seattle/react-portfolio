import React from 'react';
import CelticShield from '../CelticShield.png';
import PropTypes from 'prop-types';

const styles = {
  container: {
    backgroundColor: '#222',
    color: '#e9e9e9',
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
  },
  icon: {
    textAlign: 'left',
    height: 50,
  },
  title: {
    margin: 0,
  },
};

const Header = props => {
  return (
    <div style={styles.container}>
      <img src={CelticShield} alt="AO" style={styles.icon} />
      <h1 style={styles.title}>Theme Provider</h1>
    </div>
  )
}

export default Header;