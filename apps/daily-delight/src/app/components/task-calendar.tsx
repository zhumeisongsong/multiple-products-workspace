import { useMemo } from 'react';

type Props = {
  data: {
    id: string;
    name: string;
    description?: string;
  }[];
  date: {
    year: number;
    month: number;
  };
};

export const TaskCalendar = ({ data, date }: Props) => {
  const calendarDays = useMemo(() => {
    const firstDay = new Date(date.year, date.month, 1);
    const lastDay = new Date(date.year, date.month + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    // Create array of calendar days including empty spots for proper alignment
    const days = Array(42)
      .fill(null)
      .map((_, index) => {
        const dayNumber = index - startingDayOfWeek + 1;
        if (dayNumber < 1 || dayNumber > daysInMonth) return null;
        return dayNumber;
      });

    return days;
  }, [date.year, date.month]);

  return (
    <div>
      {/* Calendar header */}
      <div className="grid grid-cols-7 text-center font-semibold mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) =>
          day ? (
            <div key={index} className={`flex flex-col justify-between aspect-square p-2 border`}>
              <div className="text-right font-semibold text-lg">{day}</div>
              {/* Tasks for this day */}
              <div className="mt-1 text-xs">{data[day - 1]?.name}</div>
            </div>
          ) : (
            <div key={index} className="aspect-square p-2"></div>
          ),
        )}
      </div>
    </div>
  );
};
