import { Component } from 'react';
import { FeedbackOptions } from 'button/button';
import { Statistics } from 'statistics/statistics';
import { Section } from 'headers/section';
import { Notification } from '../notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification mesage={'There is no feedback'} />
        )}
      </>
    );
  }
}
