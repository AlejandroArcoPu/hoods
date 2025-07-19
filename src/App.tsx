import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import MessagesCarousel from "./components/MessagesCarousel/MessagesCarousel.tsx";

export default function App() {
  return (
    <>
      <MessagesCarousel />
      <AppLayout />
    </>
  );
}
