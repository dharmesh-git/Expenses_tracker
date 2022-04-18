import React from "react";
import { Provider } from "./income/Context";
import Form from "./income/components/form";
import UserList from "./income/components/UserList";
import { Actions } from "./income/Action";
function App() {
  const data = Actions();
  return (
    <Provider value={data}>
      <div className="App">
        <h1>ADD INCOME</h1>
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