import { Component } from 'react';
import { FeedbackOptions } from 'button/button';
import { Statistics } from 'statistics/statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  onLeaveFeedback(e) {
    const name = e.target.name;
    console.log(name);
    // this.setState(state => ({
    //   [name]: state[name] + 1,
    // }));
  }

  render() {
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
