import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Task from "../components/todoListApp/Task";

const TodoListApp = () => {
  return (
    <div className="mt-5 pt-5">
      <NavBar />
      <Task />
      <Footer />
    </div>
  );
};

export default TodoListApp;
