# Input Date Calendar

React component to render a simple calendar.

This project is integrated with [simple-date](https://github.com/wviveiro/simple-date), a light date component.

## Install
```
npm install wviveiro/input-date-calendar
```

## Usage
```javascript
import InputDateCalendar from 'input-date-calendar';
import 'input-date-calendar/dist/styles/index.css';

const Form = () => {
    const [date, setDate] = useState('');

    // onChange receives a simple-date object
    const onChange = (dt) => setDate(dt.format('DD/MM/YYYY');

    // isDateDisabled receives a simple-date object and
    // expects a boolean return
    const isDateDisabled = (dt) => {
        return (dt.getFullDate() === '2019-07-10'); // Block only 2019-07-10
    }


    return (
        <div>
            <InputDateCalendar
                date={date}
                format="DD/MM/YYYY"
                placeholder="Change date"
                className="calendar-wrapper"
                inputClassName="input-calendar"
                onChange={onChange}
                isDateDisabled={isDateDisabled}
                disabled={false}
            />
        </div>
    );
}
```

## Props

1. **format**: `string` - Date format that will be displayed and also that will be received from **date** prop. Default `YYYY-MM-DD`

2. **date**: `string` - Date that will show in the input field. The date has to be in the same format of the prop **format**

3. **placeholder**: `string` - Placeholder of the input field

4. **className**: `string` - appends a class in the main wrapper div of the component

5. **inputClassName**: `string` - appends a class in the input field for the component

6. **onChange**: `function` - Triggers on changing date. The return is a date string in the same format as the prop **format**.

6. **isDateDisabled**: `function` - Verifies if a specific date is disabled and don't let the customer select it.

7. **disabled**: `boolean` - Disable changing field.


## Languages

The component is available in english and portuguese. The default language is language. To use portuguese just load

```javascript
import InputDateCalendar from 'input-date-calendar/dist/portuguese';
import 'input-date-calendar/dist/styles/index.css';

```

### Extending other languages:

```javascript
import generateCalendar from 'input-date-calendar/dist/calendar';

const Calendar = generateCalendar({
    months: ['', 'Jan' ... 'Dec'],
    weekdays: ['', 'Mon' ... 'Sun'],
    btnfinish: 'DONE',
    hasErrorButton: 'INVALID DATE',
});

```