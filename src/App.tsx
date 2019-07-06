import React from 'react';
import styles from './App.scss';

interface AppProps {

}

const App: React.FC<AppProps> = (props) => {
    return (
        <div className={styles.App} {...props}>
            <span className={styles.App__Title}>React Charts</span>
            <div className={styles.App__ChartContainer}>ChartGoesHere</div>
        </div>
    );
};

export default App;
