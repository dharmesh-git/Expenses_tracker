import React from "react";
import { Provider } from "./expenses/Context";
import Form from "./expenses/components/form";
import UserList from "./expenses/components/UserList";
import { Actions } from "./expenses/Action";
function App() {
  const data = Actions();
  return (
    <Provider value={data}>
      <div className="App">
        <h1>ADD Expenses</h1>
        <div className="wrapper">
          <section className="left-side">
            <Form />
          </section>
          <section className="right-side">
            <UserList />
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default App;