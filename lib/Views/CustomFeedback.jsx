'use strict';
import ObserveModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import createReactClass from 'create-react-class';
import parseCustomMarkdownToReact from 'terriajs/lib/ReactViews/Custom/parseCustomMarkdownToReact';
import PropTypes from 'prop-types';
import FeedbackForm from './FeedbackForm';
import InvestForm from './InvestForm';
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

    render() {
      const feedbackTypeClassName = classNames(Styles.feedback__type, {
            [Styles.feedback__type__offscreen]: !this.props.viewState.feedbackFormIsVisible || this.state.feedbackType,
        });
      const formClassName = classNames(Styles.feedback__form, {
            [Styles.feedback__form__offscreen]: !this.props.viewState.feedbackFormIsVisible || !this.state.feedbackType,
        });

      const header = (<div className={Styles.header}>
                          <h4 className={Styles.title}> <Icon glyph={Icon.GLYPHS.feedback}/>Contact Austrade</h4>
                          <button className={Styles.btnClose} onClick={this.onDismiss} title='close feedback'>
                              <Icon glyph={Icon.GLYPHS.close} />
                          </button>
                      </div>);

        return (
            <div className={Styles.feedback}>
            <div className={formClassName}>
              {header}
              <If condition={this.state.feedbackType == 'feedback'}>
                <FeedbackForm viewState={this.props.viewState} onDismiss={this.onDismiss}/>
              </If>

              <If condition={this.state.feedbackType == 'investment'}>
                <InvestForm viewState={this.props.viewState} onDismiss={this.onDismiss}/>
              </If>
            </div>
            <div className={feedbackTypeClassName}>
                {header}
                <div>
                    <button className={Styles.feedbackOption} onClick={this.switchFeedbackType.bind(this, 'investment')}>
                      <h5>Make an investment enquiry</h5>
                      <div>If you'a foreign investor planning to establish or expand your business operations in Australia, Austrade can provide you with professional assistance, free of charge</div>
                    </button>
                    <button className={Styles.feedbackOption} onClick={this.switchFeedbackType.bind(this, 'feedback')}>
                      <h5>Provide feedback</h5>
                      <div>Provide feedback on your map experience to Austrade and the software developers.</div>
                    </button>
                </div>
            </div>
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
