import React, {useRef, useState, useEffect} from 'react';
import date from 'simple-date';
import bgBlocker from './bg-blocker';


const language = {
    months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekdays: ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    btnfinish: 'DONE',
    hasErrorButton: 'INVALID DATE'
}

const generateCalendar = (args) => {
    args = args || {};
    for (let i in args) {
        if (args.hasOwnProperty(i)) {
            language[i] = args[i];
        }
    }

    return DateCalendar;
}


const DateCalendar = (props) => {
    const _date = props.date;
    let {format, disabled} = props;
    if (!format) format = 'YYYY-MM-DD';
    const [show, setShow] = useState(false);


    let displayDate = _date;
    let dt = date(_date, format);
    let hasError = false;

    const changeDate = (dt) => {
        if (disabled) return null;
        props.onChange(dt.format(format));
    }

    
    if (_date === '' || !dt.isValid()) {
        dt = date();
        let auxError = true;
        let counter = 0;
        while (auxError && counter++ < 10) {
            if (!props.isDateDisabled || !props.isDateDisabled(dt)) {
                auxError = false;
            } else {
                dt.modify(1, 'day');
            }
        }
    } else if (props.isDateDisabled && props.isDateDisabled(dt)) {
        hasError = true;
    }


    const onOpenCalendar = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (disabled) return null;
        setShow(true);
    }
    

    return (
        <div className={`date-calendar-container${props.className ? ` ${props.className}` : ''}${hasError ? ' error' : ''}`}>
            <input
                className={`input-date-calendar${props.inputClassName ? ` ${props.inputClassName}` : ''}`}
                placeholder={props.placeholder ? props.placeholder : ''}
                value={displayDate}
                onMouseDown={(ev) => onOpenCalendar(ev)}
                onChange={() => false}
                disabled={disabled}
            />
            {show ? (
                <div className="area-calendar-all">
                    <Calendar
                        dt={dt}
                        literaldate={_date}
                        onClose={() => setShow(false)}
                        onChange={changeDate}
                        hasError={hasError}
                        isDateDisabled={props.isDateDisabled}
                    />
                </div>
            ) : null}
        </div>
    );
}

const shakeCalendar = (obj) => {
    if (!obj) return;

    obj.classList.add('clicked');
    setTimeout(() => {
        obj.classList.remove('clicked');
    }, 600);

}

let _cb = null;
const myCallback = (cb) => {
    _cb = cb;
    return _cb;
}


const Calendar = (props) => {
    let {dt, hasError} = props;
    const ref = useRef();

    const onClose = () => {
        if (hasError && props.literaldate !== '') return shakeCalendar(ref.current);
        props.onClose();
        bgBlocker.remove();
    }

    

    const _onClose = myCallback(onClose);


    useEffect(() => {
        bgBlocker.create();
        bgBlocker.onClick(_onClose);
    }, [_onClose]);



    const clickArrow = (direction, type) => {
        const newDt = date(dt.format('YYYY-MM-DD'));
        if (direction === 'left') {
            newDt.modify(-1, type);
        } else {
            newDt.modify(1, type);
        }

        props.onChange(newDt);
    }

    const clickDone = () => {
        if (hasError && props.literaldate !== '') return shakeCalendar(ref.current);
        props.onChange(dt);
        onClose();
    }


    return (
        <div className={`date-calendar-view${hasError ? ' error' : ''}`} ref={ref}>
            <div className="arwtop" />
            <div className="date-calendar-header">
                <button className="arrow" onClick={() => clickArrow('left', 'month')}>&lt;</button>
                <span>{language.months[dt.format('M')]}</span>
                <button className="arrow" onClick={() => clickArrow('right', 'month')}>&gt;</button>
            </div>
            <div className="date-calendar-day">
                <button className="arrow" onClick={() => clickArrow('left', 'day')}>&lt;</button>
                <div className="content">
                    <span>{dt.format('DD')}</span>
                    <div>{language.weekdays[dt.format('N')]}</div>
                </div>
                <button className="arrow" onClick={() => clickArrow('right', 'day')}>&gt;</button>
            </div>
            <div className="date-calendar-year">
                <button className="arrow" onClick={() => clickArrow('left', 'year')}>&lt;</button>
                <div className="content">
                    <span>{dt.format('YYYY')}</span>
                </div>
                <button className="arrow" onClick={() => clickArrow('right', 'year')}>&gt;</button>
            </div>
            <div className="date-calendar-accept">
                <button className="btnfinish" onClick={clickDone}>
                    {!hasError ? language.btnfinish : language.hasErrorButton}
                </button>
            </div>
        </div>
    );
}

export default generateCalendar;