import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessage";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";

interface IParams {
  conversationId: string;
}

export default async function Conversationid({ params }: { params: IParams }) {
  const conversation = await getConversationById(params.conversationId);
  const message = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex- flex-col">
        <Header conversation={conversation} />
      </div>
    </div>
  );
}