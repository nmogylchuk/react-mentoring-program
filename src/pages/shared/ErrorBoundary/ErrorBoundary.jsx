import React from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error) {
        console.log(`Error '${error.message}' has been occurred`);
    }

    render() {
        if (this.state.hasError) {
            return <h2 className="error">Oops, something went wrong :-(</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
