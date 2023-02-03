import './App.css';
import './code-editor.css';
import './repos.css';

function Nav(){
  return (
    <header>
      <ul>
        <li> <a>Programing News</a> </li>
        <li> <a>Repositorys</a> </li>
        <li> <a>Online Code</a> </li>

      </ul>
    </header>
  );
}



function OnlineCode(){
  return (

    <div className='code-container'>
        
      <div className='editor'>
          <textarea>

          </textarea>

          <button>Run code</button>

      </div>


      <div className='output'>

        <div className='output-terminal'>

        </div>

      </div>

    </div>

  );
}


function Repos(){

  return (
    <div className='repos-container'>

      <div className='repositorys'>

        <div className='repos-list'>
        </div>

      </div>

    </div>
  );
}


export {
  Nav,
  OnlineCode,
  Repos
}
