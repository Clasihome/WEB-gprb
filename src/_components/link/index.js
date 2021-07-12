import React from 'react';
import { Link } from 'gatsby';

export default (props) => (
  <Link {...props} style={{ textDecoration: "none", color: "inherit" }}>
    {props.children}
  </Link>
)