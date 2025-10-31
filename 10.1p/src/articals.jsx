import Data from "./articals_list";
import "./articals.css";
import 'semantic-ui-css/semantic.min.css';

function Articals(props)
{
     return (
    <div className="ui three stackable cards">
      {Data.map((props) => {
      return(
<div class="card">
  <div class="image">
    <img src={props.src} alt={props.Title}/>
  </div>
 
  <div class="content">
    <a class="header">{props.Title}</a>
    <div class="meta">
      <span class="date">{props.date}</span>
    </div>
    <div class="description">{props.Description}: 
    </div>
     <div class="extra content">
    {props.example}
     </div>
  </div>
   <div class="content">
    <span class="right floated">
      {props.Author}
    </span>
    <span class="left floated star">
      ⭐ {props.rating}
    </span>
  </div>

  
</div>  
  )})}
    </div>
  )
}

export default Articals;