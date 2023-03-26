import React from "react";

interface Props {
  onClick: () => void;
  buttonText?: string;
}

class Button extends React.Component<Props> {
  render() {
    const { buttonText = "" } = this.props;

    return (
      <button
        id="new-quote"
        className="text-xl text-white bg-orange-400 p-2 rounded-lg font-semibold lg:bg-red-700 hover:bg-red-900 flex items-center"
        onClick={this.props.onClick}
      >
        {buttonText === "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
        {buttonText}
      </button>
    );
  }
}

export default Button;
