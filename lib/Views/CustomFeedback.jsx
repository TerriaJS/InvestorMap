'use strict';

import ObserveModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import createReactClass from 'create-react-class';
import parseCustomMarkdownToReact from 'terriajs/lib/ReactViews/Custom/parseCustomMarkdownToReact';
import PropTypes from 'prop-types';
import sendFeedback from 'terriajs/lib/Models/sendFeedback.js';
import Styles from './custom-feedback.scss';
import Icon from "terriajs/lib/ReactViews/Icon.jsx";
import classNames from "classnames";

const CustomFeedback = createReactClass({
    displayName: 'CustomFeedback',
    mixins: [ObserveModelMixin],

    propTypes: {
        viewState: PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            isSending: false,
            sendShareURL: true,
            name: '',
            email: '',
            comment: ''
        };
    },

    onOpenFeedback(){
      this.props.viewState.feedbackFormIsVisible = true;
    },

    onDismiss() {
        this.props.viewState.feedbackFormIsVisible = false;
        this.setState(this.getInitialState());
    },

    onSubmit(evt) {
        evt.preventDefault();

        if (this.state.comment.length > 0) {
            this.setState({
                isSending: true
            });

            // submit form
            // sendFeedback({
            //     terria: this.props.viewState.terria,
            //     name: this.state.name,
            //     email: this.state.email,
            //     sendShareURL: this.state.sendShareURL,
            //     comment: this.state.comment
            // }).then(succeeded => {
            //     if (succeeded) {
            //         this.setState({
            //             isSending: false,
            //             comment: ''
            //         });
            //         this.props.viewState.feedbackFormIsVisible = false;
            //     } else {
            //         this.setState({
            //             isSending: false
            //         });
            //     }
            // });
        }

        return false;
    },

    render() {
        return (
            <div className='investormap_feedback'>
              <div className={Styles.feedbackButton}>
                  <button type='button' className={Styles.btnFeedback} onClick={this.onOpenFeedback}>
                      <Icon glyph={Icon.GLYPHS.feedback}/>
                      <span>Contact Austrade</span>
                  </button>
              </div>
            </div>
        );
    },
});

module.exports = CustomFeedback;
