import React from "react";


function Project(props) {

  return (
    <div className="col-md-6">
      <a href={props.href} className="d-flex flex-column-reverse" target="_blank" rel="noreferrer noopener">
        <img alt={props.title} src={props.img} width="250" height="200" className="border"/>
        <div className=" font-weight-bold py-1 mb-2">{props.title}</div>
      </a>
    </div>
  )
}

export default Project;