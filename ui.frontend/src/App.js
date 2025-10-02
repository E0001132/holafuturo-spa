import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div className="gcr" data-title={'GCR'}>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
