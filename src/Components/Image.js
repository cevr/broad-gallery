import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Image.css';

export class Image extends PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
        description: PropTypes.string
    };
    static defaultProps = {
        description: 'A beautiful part of this collection'
    };

    state = {
        hovered: false,
        isDeleted: false
    };

    handleHover = event => {
        this.setState({ hovered: !this.state.hovered });
    };

    handleDelete = () => {
        this.setState({ isDeleted: true });
    };

    render() {
        const { src, description, author } = this.props;
        const { hovered, isDeleted } = this.state;
        return (
            <div className={`image-container ${isDeleted ? 'hidden' : null}`}>
                <i className={`fas fa-times close ${!hovered ? 'icon-hidden' : null}`} onClick={this.handleDelete}/>
                <img
                    className="hover"
                    src={src}
                    alt={description}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
                    ref={ref => (this.image = ref)}
                />
                <div className="hover">
                    <p className="info hidden">{author}</p>
                </div>
            </div>
        );
    }
}
