'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".r-segmented-control {\n    width: 100%;\n    background-color: #fff;    \n    border-bottom: 1px solid #e9eff3;\n    border-left: 1px solid #fff;\n    text-align: center;\n    height: 38px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    direction: ltr;\n    display: table;\n}\n\n.r-segmented-control > ul {\n    display: table-row;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 6px 8px;\n}\n\n.r-segmented-control > ul > li {\n    background: #fff;\n    border: 1px solid;    \n    border-right: none;\n    font-size: 13px;\n    height: 26px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    vertical-align: middle;\n    display: table-cell;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -ms-flex: auto;\n    flex: auto;\n}\n\n.r-segmented-control > ul > li:first-of-type {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.r-segmented-control > ul > li:last-of-type {\n    border-right: 1px solid;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n\n.r-segmented-control .base {\n    border-color: rgb(0,122,255) !important;\n    color: rgb(0,122,255);\n}\n\n.r-segmented-control .dark {\n    border-color: #333 !important;\n    color: #333;\n}\n\n.r-segmented-control .light {\n    border-color: rgb(247, 247, 247) !important;\n    color: rgb(247, 247, 247);\n    background: transparent !important;\n}\n\n.r-segmented-control .success {\n    border-color: #5cb85c !important;\n    color: #5cb85c;\n}\n\n.r-segmented-control .error {\n    border-color: #d9534f !important;\n    color: #d9534f;\n}\n\n.r-segmented-control .base.selected {\n    background: rgb(0,122,255) !important;    \n    color: #fff !important;\n}\n\n.r-segmented-control .dark.selected {\n    background: #333 !important;\n    color: #fff !important;\n}\n\n.r-segmented-control .light.selected {\n    background: rgb(247, 247, 247) !important;\n    color: #333 !important;\n}\n\n.r-segmented-control .success.selected {\n    background: #5cb85c !important; \n    color: #fff !important;\n}\n\n.r-segmented-control .error.selected {\n    background: #d9534f !important;\n    color: #fff !important;\n}";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var SegmentedControl = function (_Component) {
    inherits(SegmentedControl, _Component);

    function SegmentedControl() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, SegmentedControl);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedSegment: 0
        }, _this.onChange = function (selectedSegment) {
            _this.setState({ selectedSegment: selectedSegment });
            _this.props.onChangeSegment(selectedSegment);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(SegmentedControl, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ selectedSegment: this.props.selected });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                'div',
                { className: 'r-segmented-control' },
                React__default.createElement(
                    'ul',
                    null,
                    this.props.segments.map(function (segment, i) {
                        if (i === _this2.state.selectedSegment) {
                            return React__default.createElement(
                                'li',
                                {
                                    key: i,
                                    className: _this2.props.variant + ' selected'
                                },
                                segment
                            );
                        } else {
                            return React__default.createElement(
                                'li',
                                {
                                    key: i,
                                    className: '' + _this2.props.variant,
                                    onClick: function onClick() {
                                        return _this2.onChange(i);
                                    }
                                },
                                segment
                            );
                        }
                    })
                )
            );
        }
    }]);
    return SegmentedControl;
}(React.Component);

SegmentedControl.defaultProps = {
    onChangeSegment: function onChangeSegment(x) {
        return x;
    },
    variant: 'base',
    selected: 0
};


SegmentedControl.propTypes = {
    segments: PropTypes.array.isRequired,
    selected: PropTypes.number,
    variant: PropTypes.string
};

exports.SegmentedControl = SegmentedControl;
