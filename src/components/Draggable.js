import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';

const [sidePosition, setSidePosition] = useState({x: 0, y:0 });
<Draggable onDrag={(e, data) => props.trackPos(data)}> <Component>5W1H</Component> </Draggable>
const trackPos = (data) => {
    setSidePosition({x: data.x , y:data.y})
}