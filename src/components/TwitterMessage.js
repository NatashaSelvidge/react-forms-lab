import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      text: "",
    };
  }

  handleChange = (event) => {
    const textContent = event.target.value;
    console.log(textContent);
    // console.log(textContent)
    if (textContent.length > this.state.maxChars) return;
    this.setState({
      text: textContent,
    });
  };

  remainingChars() {
    return this.state.maxChars - this.state.text.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type={this.state.text}
          name="message"
          id="message"
          onChange={this.handleChange}
        />
        <p>Remaining Charaters: {this.remainingChars()} </p>
      </div>
    );
  }
}

export default TwitterMessage;
