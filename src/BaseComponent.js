import { PureComponent } from 'react';

class BaseComponent extends PureComponent {
    rerender = () => {
      this.setState({
        _rerender: new Date(),
      });
    }
  }

export default BaseComponent;