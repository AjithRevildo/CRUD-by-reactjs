import { NavBar } from "./NavBar";
import { Distributer } from "./ContactCards";
import { AddContacts } from "./AddContacts";

export function Home({ contact, setContact }) {
  return (
    <div>
      <NavBar />
      <AddContacts />
      <Distributer contact={contact} setContact={setContact} />
    </div>
  );
}
