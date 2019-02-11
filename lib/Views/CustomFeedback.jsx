'use strict';
import ObserveModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import FeedbackForm from './FeedbackForm';
import Styles from './custom-feedback.scss';
import Icon from "terriajs/lib/ReactViews/Icon.jsx";
import { Medium } from 'terriajs/lib/ReactViews/Generic/Responsive.jsx';
import classNames from "classnames";

const CustomFeedback = createReactClass({
    displayName: 'CustomFeedback',
    mixins: [ObserveModelMixin],

    propTypes: {
        viewState: PropTypes.object.isRequired
    },

    // 3 states:
    // 1. Feedback hidden: viewState.feedbackFormIsVisible === false
    // 2. At feedback menu: viewState.feedbackFormIsVisible === true && state.menuVisible === true
    // 2. At developer feedback form: viewState.feedbackFormIsVisible === true && state.menuVisible === false

    getInitialState() {
        return {
            menuVisible: true
        };
    },

    onOpenFeedback(){
      this.props.viewState.feedbackFormIsVisible = true;
    },

    onDismiss() {
        this.props.viewState.feedbackFormIsVisible = false;
        this.setState(this.getInitialState());
    },

    switchToForm(){
      this.setState({
        menuVisible: false
      });
    },

    render() {
      const feedbackTypeClassName = classNames(Styles.feedback__type, {
            [Styles.feedback__type__offscreen]: !this.props.viewState.feedbackFormIsVisible || !this.state.menuVisible,
        });
      const formClassName = classNames(Styles.feedback__form, {
            [Styles.feedback__form__offscreen]: !this.props.viewState.feedbackFormIsVisible || this.state.menuVisible,
        });

      const header = (<div className={Styles.header}>
                          <h4 className={Styles.title}>
                            <Icon glyph={Icon.GLYPHS.feedback}/>
                            Contact Austrade
                          </h4>
                          <button className={Styles.btnClose} onClick={this.onDismiss} title='close feedback'>
                              <Icon glyph={Icon.GLYPHS.close} />
                          </button>
                      </div>);

        return (
            <div className={Styles.feedback}>
            <div className={formClassName}>
              {header}
              <If condition={!this.state.menuVisible}>
                <FeedbackForm viewState={this.props.viewState} onDismiss={this.onDismiss}/>
              </If>
            </div>
            <div className={feedbackTypeClassName}>
                {header}
                <div>
                    <button className={Styles.feedbackOption} onClick={() => window.open('https://www.austrade.gov.au/International/Invest/Investment-Specialists/Enquiry-Form', 'InvestmentEnquiry')}>
                      <h5>Make an investment enquiry</h5>
                      <div>If you're a foreign investor planning to establish or expand your business operations in Australia, Austrade can provide you with professional assistance, free of charge</div>
                    </button>
                    <button className={Styles.feedbackOption} onClick={this.switchToForm}>
                      <h5>Provide feedback</h5>
                      <div>Provide feedback on your map experience to Austrade and the software developers.</div>
                    </button>
                </div>
            </div>
            <div className={Styles.feedbackButton}>
                <button type='button' className={Styles.btnFeedback} onClick={this.onOpenFeedback}>
                    <Icon glyph={Icon.GLYPHS.feedback}/>
                   <Medium><span>Contact Austrade</span></Medium>
                </button>
            </div>
            </div>
        );
    },
});

module.exports = CustomFeedback;
