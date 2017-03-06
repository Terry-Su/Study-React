import React from 'react';
import ReactDOM from 'react-dom';

// apiComponent
import Children from './apiComponent/Children'
import Ref from './apiComponent/Ref'
import ShouldComponentUpdate from './apiComponent/ShouldComponentUpdate'
import ComponentWillReceiveProps from './apiComponent/ComponentWillReceiveProps'

// react-router
import BasicExample from './react-router/index'

ReactDOM.render(
  <div>
    {/* apiComponent{ */}
    {false && <Children>it's children</Children>}
    {false && <Ref />}
    {false && <ShouldComponentUpdate />}
    {false && <ComponentWillReceiveProps />}
    {/* apiComponent} */}

    {/* react-router{ */}
    {true && <BasicExample />}
    {/* react-router} */}
  </div>,
  document.getElementById('app')
);