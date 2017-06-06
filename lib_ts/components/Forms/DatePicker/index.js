"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dates_1 = require("react-dates");
const Moment = require("moment");
const config_1 = require("config");
const MUK = require("components/Forms/input");
class DatePicker extends MUK.InputComponent {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "datepicker";
        const startDate = props.input.value ? Moment(props.input.value) : null;
        this.state = {
            startDate,
            endDate: null,
            focused: null,
        };
        require("moment/locale/" + props.locale);
    }
    onDateChange(date) {
        this.setState({ startDate: date });
    }
    onDatesChange(dates) {
        this.setState({ startDate: dates.startDate, endDate: dates.endDate });
    }
    onFocusChange(action) {
        if (action === "startDate") {
            this.setState({ focused: "startDate" });
        }
        else if (action === "endDate") {
            this.setState({ focused: "endDate" });
        }
        else if (action) {
            this.setState({ focused: action.focused });
        }
        else if (action === null) {
            this.setState({ focused: null });
        }
    }
    renderInput() {
        let picker;
        const { focused, startDate, endDate } = this.state;
        const { type, labels, defaults_single, defaults_range, numberOfMonths, minimumDays, meta } = this.props;
        if (type === "single") {
            picker = React.createElement(react_dates_1.SingleDatePicker, Object.assign({}, defaults_single, { placeholder: labels.placeholder, date: startDate, focused: focused, numberOfMonths: numberOfMonths, onDateChange: this.onDateChange.bind(this), onFocusChange: this.onFocusChange.bind(this) }));
        }
        else {
            picker = React.createElement(react_dates_1.DateRangePicker, Object.assign({}, defaults_range, { numberOfMonths: numberOfMonths, minimumNights: minimumDays - 1, onDatesChange: this.onDatesChange.bind(this), onFocusChange: this.onFocusChange.bind(this), startDatePlaceholderText: labels.placeholderFrom, endDatePlaceholderText: labels.placeholderTo, focusedInput: this.state.focused, startDate: startDate, endDate: endDate }));
        }
        return (React.createElement("div", { className: `${this.name}__picker` }, picker));
    }
    renderLabel(className, props) {
        const { labels } = this.props;
        return labels.main;
    }
}
DatePicker.defaultProps = Object.assign({}, MUK.defaultProps, { type: "single", numberOfMonths: 1, minimumDays: 1, locale: "cs", labels: {
        main: "Pick date:",
        placeholder: "Click here...",
        invalid: "Invalid input",
        title: "",
        placeholderFrom: "Date from",
        placeholderTo: "Date to",
    }, defaults_single: {
        // input related props
        id: "date",
        placeholder: "Date",
        disabled: false,
        required: false,
        screenReaderInputMessage: "",
        showClearDate: true,
        // calendar presentation and interaction related props
        orientation: "horizontal",
        anchorDirection: "left",
        horizontalMargin: 0,
        withPortal: false,
        withFullScreenPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 2,
        keepOpenOnDateSelect: false,
        reopenPickerOnClearDate: false,
        // navigation related props
        daySize: 30,
        navPrev: "<",
        navNext: ">",
        onPrevMonthClick() { },
        onNextMonthClick() { },
        // day presentation and interaction related props
        renderDay: null,
        enableOutsideDays: false,
        isDayBlocked: () => false,
        isOutsideRange: day => false,
        isDayHighlighted: day => day.startOf("day").toString() === Moment().startOf("day").toString(),
        // internationalization props
        displayFormat: () => Moment.localeData().longDateFormat("L"),
        monthFormat: "MMMM YYYY",
    }, defaults_range: {
        // input related props
        startDateId: "startDate",
        startDatePlaceholderText: "",
        endDateId: "endDate",
        endDatePlaceholderText: "",
        disabled: false,
        required: false,
        screenReaderInputMessage: "",
        showClearDates: true,
        showDefaultInputIcon: false,
        // calendar presentation and interaction related props
        orientation: "horizontal",
        anchorDirection: "left",
        horizontalMargin: 0,
        withPortal: false,
        withFullScreenPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 2,
        keepOpenOnDateSelect: false,
        reopenPickerOnClearDates: false,
        // navigation related props
        navPrev: "<",
        navNext: ">",
        onPrevMonthClick() { },
        onNextMonthClick() { },
        // day presentation and interaction related props
        daySize: 30,
        renderDay: null,
        minimumNights: 0,
        enableOutsideDays: false,
        isDayBlocked: () => false,
        isOutsideRange: day => false,
        isDayHighlighted: day => day.startOf("day").toString() === Moment().startOf("day").toString(),
        // internationalization
        displayFormat: () => Moment.localeData().longDateFormat("L"),
        monthFormat: "MMMM YYYY",
    } });
exports.default = DatePicker;
//# sourceMappingURL=index.js.map