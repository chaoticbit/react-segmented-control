import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './segmented-control-react.css';

const Container = styled.div`
    width: 100%;
    background-color: #fff;    
    border-bottom: 1px solid #e9eff3;
    border-left: 1px solid #fff;
    text-align: center;
    height: 38px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    direction: ltr;
    display: table;
`;

const ScList = styled.ul`
    display: table-row;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 6px 8px;
`;

const ScListItem = styled.li`
    background: #fff;
    border: 1px solid;    
    border-right: none;
    font-size: 13px;
    height: 26px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
    display: table-cell;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex: auto;
    flex: auto;

    &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    &:last-of-type {
        border-right: 1px solid;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }    
`;

export default class SegmentedControl extends Component {
    state = {
        selectedSegment: 0
    };
    static defaultProps = {
        onChangeSegment: x => x,
        variant: 'base',
        selected: 0
    };
    componentDidMount() {
        this.setState({ selectedSegment: this.props.selected });        
    }   

    onChange = selectedSegment => {
        this.setState({ selectedSegment });
        this.props.onChangeSegment(selectedSegment);
    };
    render() {
        return (
            <Container className="r-sc">
                <ScList>
                    {                                                
                        this.props.segments.map((segment, i) => {                         
                            if (i === this.state.selectedSegment) {
                                return (
                                    <ScListItem 
                                        key={i} 
                                        className={`${this.props.variant} selected`}
                                    >
                                        {segment}
                                    </ScListItem>
                                );
                            } else {
                                return (
                                    <ScListItem
                                        key={i}
                                        className={`${this.props.variant}`}
                                        onClick={() => this.onChange(i)}
                                    >
                                        {segment}
                                    </ScListItem>
                                );
                            }
                        })
                    }
                </ScList>
            </Container>
        );
    }
}

SegmentedControl.propTypes = {
    segments: PropTypes.array.isRequired,
    selected: PropTypes.number,
    variant: PropTypes.string    
};