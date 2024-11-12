import { auth } from "../_lib/auth";
import { createGuest, getGuest } from "../_lib/data-service";

export const metadata = {
  title: "Guest area",
};
export default async function Page() {
  const session = await auth();
  console.log(session);
  // const guest = await getGuest(session.user.email);
  // console.log(guest);
  // if (!guest.length) {
  //   const data = await createGuest({
  //     fullName: session.user.name,
  //     email: session.user.email,
  //   });
  //   console.log(data, "daaaaataaaaa");
  // }
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome {session.user.name}
    </h2>
  );
}
