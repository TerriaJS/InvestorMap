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
            name: '',
            email: '',
            comment: '',
            feedbackType: undefined
        };
    },

    onOpenFeedback(){
      this.props.viewState.feedbackFormIsVisible = true;
    },

    onDismiss() {
        this.props.viewState.feedbackFormIsVisible = false;
        this.setState(this.getInitialState());
    },

    switchFeedbackType(type){
      this.setState({
        feedbackType: type
      });
      this.resetField();
    },

    resetField(){
      this.setState({
        isSending: false,
        name: '',
        email: '',
        comment: '',
      })
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
            <div className={Styles.feedback}>
            <If condition={this.props.viewState.feedbackFormIsVisible}>
              <div className={Styles.feedback__inner}>
                <div className={Styles.header}>
                    <h4 className={Styles.title}> <Icon glyph={Icon.GLYPHS.feedback}/>Contact Austrade</h4>
                    <button className={Styles.btnClose} onClick={this.onDismiss} title='close feedback'>
                        <Icon glyph={Icon.GLYPHS.close} />
                    </button>
                </div>
                  <If condition={!this.state.feedbackType}>
                    <div className={Styles.body}>
                        <button className={Styles.feedbackOption} onClick={this.switchFeedbackType.bind(this, 'investment')}>
                          <h5>Make an investment enquiry</h5>
                          <div>If you#39re a foreign investor planning to establish or expand your business operations in Australia, Austrade can provide you with professional assistance, free of charge</div>
                        </button>
                        <button className={Styles.feedbackOption} onClick={this.switchFeedbackType.bind(this, 'feedback')}>
                          <h5>Provide feedback</h5>
                          <div>Provide feedback on your map experience to Austrade and the software developers.</div>
                        </button>
                    </div>
                  </If>
                  <If condition={this.state.feedbackType == 'feedback'}>
                    <div className={Styles.body}>
                        <div>If you would like to provide feedback on your map experience to Austrade and the software developers or make any comments on the data please do so below. (replacing first par below).</div>
                        <form onSubmit={this.onSubmit}>
                            <label className={Styles.label}>Name (optional)</label>
                            <input type="text" name="name" className={Styles.field} value={this.state.name} onChange={this.handleChange} />
                            <label className={Styles.label}>Email address (optional)<br /><em>We can&#39;t follow up without it!</em></label>
                            <input type="text" name="email" className={Styles.field} value={this.state.email} onChange={this.handleChange} />
                            <label className={Styles.label}>Comment or question</label>
                            <textarea className={Styles.field} name="comment" value={this.state.comment} onChange={this.handleChange} />
                            <div className={Styles.action}>
                                <button type="button" className={Styles.btnCancel} onClick={this.onDismiss}>Cancel</button>
                                <button type="submit" className={Styles.btnSubmit} disabled={this.state.isSending}>{this.state.isSending ? 'Sending...' : 'Send'}</button>
                            </div>
                        </form>
                    </div>
                  </If>

                  <If condition={this.state.feedbackType == 'investment'}>
                    <div className={Styles.body}>
                        <div>Please complete the form below and one of our specialists will help you open the doors to a country with unlimited investment potential.</div>
                        <form onSubmit={this.onSubmit}>
                            <label className={Styles.label}>Name *</label>
                            <input type="text" name="name" className={Styles.field} value={this.state.name} onChange={this.handleChange} />
                            <label className={Styles.label}>Organisation *</label>
                            <input type="text" name="organisation" className={Styles.field} value={this.state.organisation} onChange={this.handleChange} />
                            <label className={Styles.label}>Email address*</label>
                            <input type="text" name="email" className={Styles.field} value={this.state.email} onChange={this.handleChange} />
                            <label className={Styles.label}>Country</label>
                            <input type="text" name="country" className={Styles.field} value={this.state.country} onChange={this.handleChange} />
                            <label className={Styles.label}>Any comments</label>
                            <textarea className={Styles.field} name="comment" value={this.state.comment} onChange={this.handleChange} />
                            <div>* Required fields</div>
                            <div className={Styles.action}>
                                <button type="button" className={Styles.btnCancel} onClick={this.onDismiss}>Cancel</button>
                                <button type="submit" className={Styles.btnSubmit} disabled={this.state.isSending}>{this.state.isSending ? 'Sending...' : 'Send'}</button>
                            </div>
                        </form>
                    </div>
                  </If>

              </div>

            </If>
            <If condition={!this.props.viewState.feedbackFormIsVisible}>
              <div className={Styles.feedbackButton}>
                  <button type='button' className={Styles.btnFeedback} onClick={this.onOpenFeedback}>
                      <Icon glyph={Icon.GLYPHS.feedback}/>
                      <span>Contact Austrade</span>
                  </button>
              </div>
            </If>
            </div>
        );
    },
});

module.exports = CustomFeedback;
