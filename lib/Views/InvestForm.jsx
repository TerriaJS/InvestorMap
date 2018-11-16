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

const InvestForm = createReactClass({
    displayName: 'InvestForm',
    mixins: [ObserveModelMixin],

    propTypes: {
        viewState: PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            isSending: false,
            name: '',
            organisation: '',
            email: '',
            country: '',
            comment: '',
            error: null
        };
    },

    onDismiss() {
        this.setState(this.getInitialState());
        this.props.onDismiss();
    },

    handleChange(e){
      this.setState({
            [e.target.getAttribute('name')]: e.target.value,
            error: null
      });
    },

    onSubmit(evt) {
        evt.preventDefault();

        if (this.state.name.length > 0 && this.state.organisation.length > 0 && this.state.email.length ) {
            this.setState({
                isSending: true
            });
            // submit form
            sendFeedback({
                terria: this.props.viewState.terria,
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment,
                organisation: this.state.organisation,
                country: this.state.country,
                feedbackType: "investment enquiry"
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
          const error = `${this.state.name.length > 0? "": "name "} ${this.state.organisation.length > 0? "": "organisation "} ${this.state.email.length > 0? "": "email "} cannot be empty`
          this.setState({
              error: error
          })
        }
    },

    render() {
        return (
          <div className={Styles.body}>
              <div className={Styles.error}>{this.state.error && this.state.error}</div>
              <p>Please complete the form below and one of our specialists will help you open the doors to a country with unlimited investment potential.</p>
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
                  <p>* Required fields</p>
                  <div className={Styles.action}>
                      <button type="button" className={Styles.btnCancel} onClick={this.onDismiss}>Cancel</button>
                      <button type="submit" className={Styles.btnSubmit} disabled={this.state.isSending}>{this.state.isSending ? 'Sending...' : 'Send'}</button>
                  </div>
              </form>
          </div>
        );
    },
});

module.exports = InvestForm;
