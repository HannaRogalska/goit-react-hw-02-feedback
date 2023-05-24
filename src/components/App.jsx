import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistic/Statistic';
import s from './App.module.css'


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (!good) {
      return 0;
    }
    const total = good + neutral + bad;
    const feedback = (good * 100) / total;
    return Math.round(feedback);
  };

  onClickHandle = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.main}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickHandle}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}


