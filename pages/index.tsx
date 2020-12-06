import Layout from "../components/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialEvents={[{ title: "initial event", start: new Date() }]}
    />
  </Layout>
);

export default IndexPage;
