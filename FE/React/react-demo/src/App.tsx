import { ImageCarousel } from "./components/ImageCarousel";
import { Accordion }  from "./components/Accordion"
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import BarChart from "./components/BarChart";

export default function App() {

  const tabsConfig = [
        { label: "Carousel", content: <ImageCarousel />},
        { label: "Accordion", content: <Accordion /> },
        { label: "TODO list", content: <TodoList /> },
        { label: "Bar Chart", content: <BarChart/> },
  ];
  

  return (
    <Tabs
        tabs={tabsConfig}
      />
  );
}
