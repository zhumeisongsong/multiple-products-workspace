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
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`
              aspect-square p-2 border rounded-md
              ${day === null ? 'bg-gray-50' : 'hover:bg-gray-100'}
            `}
          >
            {day && (
              <>
                <div className="text-sm text-gray-600">{day}</div>
                {/* Tasks for this day */}
                <div className="mt-1">
                  {data
                    .filter((task) => {
                      // Add your logic here to match tasks with dates
                      return false;
                    })
                    .map((task) => (
                      <div
                        key={task.id}
                        className="text-xs bg-blue-100 p-1 rounded mb-1 truncate"
                      >
                        {task.name}
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
