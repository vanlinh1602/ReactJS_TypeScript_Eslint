import React from "react";
import CustomInfo from "./component/CustomInfo.tsx";
import { dataUser } from './models/userInfo.tsx'

function App() {

  return (
    <div className="App">
      {dataUser.map(items =>
        <CustomInfo
          key={items.age}
          name={items.name}
          age={items.age}
        />
      )}
    </div>
  );
}

export default App;
