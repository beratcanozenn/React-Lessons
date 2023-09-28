import React from "react";

import Angular from "../images/angular.jpg";
import CSharp from "../images/ccsharp.png";
import Bootstrap5 from "../images/bootstrap5.png";
import CompleWeb from "../images/kompleweb.jpg";
import style from "./style.module.css";

const courseMap = {
  Angular,
  CSharp,
  Bootstrap5,
  CompleWeb,
};

const Course = ({ courseName }) => {
  return (
    <div className={style.course}>
      <img src={courseMap[courseName]} alt="Course" />
    </div>
  );
};

export default Course;
