import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import MessagesCarousel from "./components/MessagesCarousel/MessagesCarousel.tsx";
import ScrollToTop from "./ScrollToTop.tsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <MessagesCarousel />
      <AppLayout />
    </>
  );
}
