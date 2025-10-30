import "./tutorial.css";
import 'semantic-ui-css/semantic.min.css';
import Tutori from "./tutorial_list";

function Tutorial(props)
{
     return (   
    <div className="ui three stackable cards">
      {Tutori.map((props) => {
      return(
<div class="card">
  <div class="image">
    <img src={props.src} alt={props.Title}/>
  </div>
 
  <div class="content">
    <a class="header">{props.Title}</a>
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

export default Tutorial;