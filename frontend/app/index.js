import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './components/Home'
import ProfileShow from './components/ProfileShow'
import PostShow from './components/PostShow'
import PostNew from './components/PostNew'
import UserLogin from './components/UserLogin'
import UserNew from './components/UserNew'

const App = React.createClass({
  render() {
    return <div> { this.props.children } </div>
  }
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile" component={ProfileShow} />
			<Route path="post" component={PostShow} />
			<Route path="new" component={PostNew} />
			<Route path="login" component={UserLogin} />
			<Route path="register" component={UserNew} />
		</Route>
	</Router>
), document.getElementById('root'))
