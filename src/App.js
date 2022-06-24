import React, { Component } from 'react';
import format from 'date-fns/format';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';

import STYLES from './App.scss';
import BpkCalendar from 'bpk-component-calendar';

const c = className => STYLES[className] || 'UNKNOWN';


const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [

  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thurs',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  }
];

const CALENDAR_SELECTION_TYPE = {
  single: 'single',
  range: 'range',
};


export default class App extends Component {
  constructor () {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
        }
    };
  }

  handleDateSelect = (date) => {
    console.log(date)
    this.setState({
      selectionConfiguration: {
        type: 'single',
        date: date,
      },
    });
  }

render(){
  return (
    <div className={c('App')}>
      <header className={c('App__header')}>
        <div className={c('App__header-i  nner')}>
          <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
        </div>
      </header>
      <main className={c('App__main')}>
        <BpkCalendar
          id='calendar'
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
           />
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
  );}
};

