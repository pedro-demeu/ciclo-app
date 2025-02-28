import ShareApp from "../../components/ShareApp/ShareApp";
import PreviewCalendar from "../../components/PreviewCalendar/PreviewCalendar";
import UserPicture from "../../components/UserPicture/UserPicture";
import LayoutHome from "../../components/LayoutHome/LayoutHome";

export default function HomeScreen() {
  return (
    <LayoutHome>
      <UserPicture />
      <PreviewCalendar />
      <ShareApp />
    </LayoutHome>
  );
}
