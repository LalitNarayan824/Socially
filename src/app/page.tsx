import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {


  const user = await currentUser();


  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

      <div className="lg:grid-cols-6">
        {user? <CreatePost/> : null}
      </div>

      <div className="hidden lg:block lg:grid-cols-4">
        {/* <WhoToFollow/> */}
        who to follow

      </div>

    </div>
  );
}
