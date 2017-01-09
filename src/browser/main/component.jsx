import React from 'react';
import CSSModules from 'react-css-modules';
import HelloWorld from '../HelloWorld/component.jsx';
import styles from './styles.scss';

@CSSModules(styles)
export default class MainComponent extends React.Component  {
	render() {
		return <div>
			<HelloWorld />
		</div>;
	}
}