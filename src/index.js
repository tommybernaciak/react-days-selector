import React from 'react';

/**
 * @param value number that represents selected days
 * @param onClick function that will react to selection change
 * @param disabled boolean flag to disable input
 *
 */
const DaysSelector = ({ value, onClick, disabled = false }) => {
  const [days, setDays] = useState(getPowers(value));

  useEffect(() => {
    setDays(getPowers(value));
  }, [value]);

  const setClass = day => {
    return days.includes(day) ? 'selected' : 'not-selected';
  };

  const updateValue = useCallback(
    day => {
      const removeDayFromSelection = () => {
        return days.filter(d => {
          return d !== day;
        });
      };

      const addDayToSelection = () => {
        return days.concat([day]);
      };

      if (days.includes(day)) {
        onClick(removeDayFromSelection().reduce((a, b) => a + b, 0));
      } else {
        onClick(addDayToSelection().reduce((a, b) => a + b, 0));
      }
    },
    [days, setFieldValue, fieldName]
  );

  return (
    <div row className={classes.root}>
      <button className={setClass(DAYS.SUN)} onClick={() => updateValue(DAYS.SUN)}>
        Sun
      </button>
      <button className={setClass(DAYS.MON)} onClick={() => updateValue(DAYS.MON)}>
        Mon
      </button>
      <button className={setClass(DAYS.TUE)} onClick={() => updateValue(DAYS.TUE)}>
        Tue
      </button>
      <button className={setClass(DAYS.WED)} onClick={() => updateValue(DAYS.WED)}>
        Wed
      </button>
      <button className={setClass(DAYS.THU)} onClick={() => updateValue(DAYS.THU)}>
        Thu
      </button>
      <button className={setClass(DAYS.FRI)} onClick={() => updateValue(DAYS.FRI)}>
        Fri
      </button>
      <button className={setClass(DAYS.SAT)} onClick={() => updateValue(DAYS.SAT)}>
        Sat
      </button>
    </div>
  );
};

export default memo(DaysSelector);
