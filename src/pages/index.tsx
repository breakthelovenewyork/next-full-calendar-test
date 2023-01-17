import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Cal() {
  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
      selectable
      selectMirror
    />
  );
}
