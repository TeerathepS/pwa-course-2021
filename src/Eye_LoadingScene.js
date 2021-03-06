import {Link} from "react-router-dom";
import './Eye_LoadingScene.css';

function Eye_LoadingScene({children}){
    return(
        <Link to="/App">
        <div className="App col-12">
            <div className="EyeBG">
                <div className="Text_Fantasma">Fantasma</div>
                {children}
            </div>
        </div>
        </Link>
    );
};

export default Eye_LoadingScene;