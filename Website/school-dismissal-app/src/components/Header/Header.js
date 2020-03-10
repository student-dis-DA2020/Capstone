import React from 'react';
import styles from './Header.styles';
import logo from '../../assets/BusLogo.png';

const Header = ({ children, onClick }) => (
    <div style={styles.headerContainer}>
        <img
            src={logo}
            alt="Student Dismissal"
            style={{
                height: 50,
                alignSelf: 'center',
                margin: 25,
            }}
            onClick={onClick}
        />
        <div style={styles.buttonContainer}>
            {children}
        </div>
    </div>
);
export default Header;