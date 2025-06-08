import Hello from "./Hello";
import HelloWIthProps from "./HelloWithProps";
import Counter from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";
function App() {
  return(
 <><div>
      <Hello />
    </div><div>
    <HelloWIthProps name="Anna"/>
    <HelloWIthProps name="Michal"/>
    <HelloWIthProps name="Bartek"/>
      </div><div>
        <Counter />
        </div><div>
          <InputTracker />
          </div><div>
            <LoginStatus />
            </div><div>
              <TodoList todos={(["Kacper","Olenkiewicz"])}/>
              </div><div>
                <LoginForm />
                </div></>
 );
}

export default App;
