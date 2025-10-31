import'./header.css'
function Header(){
    return(
        <div>
            <div class="ui secondary  menu">
  <a class="active item">
    DEV@DEAKIN
  </a>

  <div class="right menu">
    <div class="item">
      <div class="ui icon input" style={{ width: '900px' }}>
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
    
    <a class="ui item">
      Post
    </a>
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
<img class="ui fluid image" src="https://plus.unsplash.com/premium_photo-1671987552220-973918c6f3dc?q=80&w=1253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Wireframe" style={{ margin: '2rem 0' }}/>
        </div>
    )
}
export default Header;
