
import './App.css';
import UIButton from './Component/Home';
import MyTypography from './Component/Typography';
function App(){
              return(<>
              <div className='container-fluid'>
              <div class="row p-5 justify-content-center align-items-center ">
                <div class="col ">{<UIButton />}</div>
              </div>
              <div class="row p-5 justify-content-center align-items-center ">
                <div class="col ">{<MyTypography />}</div>
              </div>
              </div>
              </>);
      }
export default App; 