import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@CSSModules(styles)
export default class HelloWorldComponent extends React.Component  {
	render() {
		return <div styleName='myclass'>
			Hello World.
		</div>;
	}
}