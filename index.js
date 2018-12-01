(function () {
  'use strict';

  function Modal(props) {
    const {
      onClick
    } = props;
    return ReactDOM.createPortal(React.createElement("div", {
      className: "modal"
    }, React.createElement("button", {
      className: "button",
      onClick: onClick
    }, "hide modal")), document.getElementById('js-react-modal'));
  }

  function onClickShow() {
    this.setState({
      isShowModal: true
    });
  }

  function onClickHide() {
    this.setState({
      isShowModal: false
    });
  }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleClickShow = onClickShow.bind(this);
      this.handleClickHide = onClickHide.bind(this);
      this.state = {
        isShowModal: false
      };
    }

    render() {
      const {
        isShowModal = false
      } = this.state;
      return React.createElement("div", {
        className: "app"
      }, React.createElement("button", {
        className: "button",
        onClick: this.handleClickShow
      }, "show modal"), isShowModal && React.createElement(Modal, {
        onClick: this.handleClickHide
      }));
    }

  }

  ReactDOM.render(React.createElement(App, null), document.getElementById('js-react-root'));
})();
