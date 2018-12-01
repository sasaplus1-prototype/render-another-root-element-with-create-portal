(function(){

  'use strict';

  function Modal(props) {
    const {
      onClick
    } = props;

    return ReactDOM.createPortal(
      <div className="modal">
        <button
          className="button"
          onClick={onClick}
        >hide modal</button>
      </div>,
      document.getElementById('js-react-modal')
    );
  }

  function onClickShow() {
    this.setState({ isShowModal: true });
  }

  function onClickHide() {
    this.setState({ isShowModal: false });
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

      return (
        <div className="app">
          <button
            className="button"
            onClick={this.handleClickShow}
          >show modal</button>
          {isShowModal && <Modal onClick={this.handleClickHide} />}
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('js-react-root'));

}());
