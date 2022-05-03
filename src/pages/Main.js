import CardMenu from '../components/CardMenu';
import MainView from '../components/MainView';
import TopBar from '../components/TopBar';
import ComponentMenu from '../components/ComponentMenu';

import css from './Main.module.css';

function Main(){


    return(
        <div className={css.view}>
            <TopBar/>
            <CardMenu/>
            <MainView/>
            <ComponentMenu/>
        </div>
    );
}

export default Main;