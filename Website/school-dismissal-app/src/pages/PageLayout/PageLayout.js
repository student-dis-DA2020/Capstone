
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './PageLayout.styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/CustomButton/CustomButton';

class PageLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div style={{ ...styles.container, ...this.props.customStyle }}>
                <Header
                // onClick={() => history.replace('/')}
                >
                    {/* <CustomButton
                        // onClick={() => history.replace('/')}
                        variant="no-outline"
                    >
                        Home
              </CustomButton> */}
                </Header>
                {/* Content between Header and Footer */}
                <div style={styles.childrenContainer}>
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default withRouter(PageLayout);