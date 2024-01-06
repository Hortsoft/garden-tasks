import { ACTION, ENTITY_TYPE } from "@/types";
import { auth, currentUser } from "@clerk/nextjs";
import { getXataClient } from "./utils/xata";

interface Props {
  entityId: string;
  entityType: keyof ENTITY_TYPE;
  entityTitle: string;
  action: keyof ACTION;
  boardId: string;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { userId } = auth();
    const user = await currentUser();
    const xataClient = getXataClient();

    if (!user || !userId) {
      throw new Error("User not found!");
    }

    const { entityId, entityType, entityTitle, action, boardId } = props;

    await xataClient.db.AuditLog.create({
      action: `${action}`,
      entityId,
      boardId,
      entityType: `${entityType}`,
      entityTitle,
      userId: user.id,
      userImage: user?.imageUrl,
      userName: user?.firstName + " " + user?.lastName,
    });
  } catch (error) {
    console.log("[AUDIT_LOG_ERROR]", error);
  }
};