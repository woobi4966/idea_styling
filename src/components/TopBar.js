import css from './TopBar.module.css';

function TopBar(){

    return(
        <div className={css.bar}>
            <div className={css.logo}>
                <p>IDEA STYLING</p>
            </div>
        </div>
    );
}

export default TopBar;