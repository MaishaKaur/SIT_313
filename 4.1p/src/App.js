import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './header';
import Articals from './articals';
import Tuto from './tutorial';
import Email from './email';
import Button from './button';
import Footer from './Footer';

const style = {
  textAlign: "center"
}

function App() {
  return (
    <div >
      <Header />
      <h1  style = {style}>Featured Articles</h1>
      <Articals />
      <Button />
      <h1 style = {style} >Featured Tutorials</h1>
      <Tuto />
      <Button />
      <Email />
      <Footer />

    </div>
  );
}

export default App;
