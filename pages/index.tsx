import { useState } from "react";
import Layout from "../components/Layout";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

const IndexPage = () => {
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() },
  ]);

  return (
    <Layout>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events}
        datesSet={(arg: DatesSetArg) => {
          setEvents([...events, { title: "additional", start: arg.start }]);
        }}
      />
    </Layout>
  );
};

export default IndexPage;
