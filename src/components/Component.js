import css from './Component.module.css';

function ComponentMenu_Button(disabled, children) {
    return (
        <div> className = { ComponentMenu.module.css.section }
            <h1> Component Menu </h1> 
            
            <div class="5W1H">
                <h1>5W1H</h1>
                <Button1 disabled={disabled}>{children}</Button1>;
            </div>
            <div class="Intro_Sound">
                <h1>Intro Sound</h1>
                <Button2 disabled={disabled}>{children}</Button2>;
            </div>
            <div class="Background">
                <h1>Background</h1>
                <Button3 disabled={disabled}>{children}</Button3>;
            </div>
        </div>
    );
}

export default ComponentMenu_Button;
