import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div>
      {props.headerTitle}
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
      </ul>
    </div>
  )
}

export default Header