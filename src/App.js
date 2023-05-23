import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // データベースからデータを取得する
    const postData = collection(db, "portfolio");
    console.log(postData);
    getDocs(postData).then((snapShot) => {
      console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default App;
