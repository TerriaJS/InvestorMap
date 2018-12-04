'use strict';

import ObserveModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import sendFeedback from 'terriajs/lib/Models/sendFeedback.js';
import Styles from './custom-feedback.scss';

const FeedbackForm = createReactClass({
    displayName: 'FeedbackForm',
    mixins: [ObserveModelMixin],

    propTypes: {
        viewState: PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            isSending: false,
            name: '',
            email: '',
            comment: '',
            error: null
        };
    },

    handleChange(e){
      this.setState({
            [e.target.getAttribute('name')]: e.target.value,
            error: null
      });
    },

    onDismiss() {
        this.setState(this.getInitialState());
        this.props.onDismiss();
    },

    onSubmit(evt) {
        evt.preventDefault();
        if (this.state.comment.length > 0) {
            this.setState({
                isSending: true
            });
            // submit form
            sendFeedback({
                terria: this.props.viewState.terria,
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment,
                feedbackType: "feedback"
            }).then(succeeded => {
                if (succeeded) {
                    this.setState({
                        isSending: false,
                        comment: ''
                    });
                    this.props.viewState.feedbackFormIsVisible = false;
                } else {
                    this.setState({
                        isSending: false
                    });
                }
            });
        } else {
          this.setState({
            error: 'comment cannot be empty'
          });
        }
    },

    render() {
        return (
                <div className={Styles.body}>
                    {this.state.error && <div className={Styles.error}>{this.state.error}</div>}
                    <p>If you would like to provide feedback on your map experience to Austrade and the software developers or make any comments on the data please do so below.</p>
                    <form onSubmit={this.onSubmit}>
                        <label className={Styles.label}>Name (optional)</label>
                        <input type="text" name="name" className={Styles.field} value={this.state.name} onChange={this.handleChange} />
                        <label className={Styles.label}>Email address (optional)<br /><small>We can&#39;t follow up without it!</small></label>
                        <input type="text" name="email" className={Styles.field} value={this.state.email} onChange={this.handleChange} />
                        <label className={Styles.label}>Comment or question</label>
                        <textarea className={Styles.field} name="comment" value={this.state.comment} onChange={this.handleChange} />
                        <div className={Styles.action}>
                            <button type="button" className={Styles.btnCancel} onClick={this.onDismiss}>Cancel</button>
                            <button type="submit" className={Styles.btnSubmit} disabled={this.state.isSending}>{this.state.isSending ? 'Sending...' : 'Send'}</button>
                        </div>
                    </form>
                </div>
        );
    },
});

module.exports = FeedbackForm;
