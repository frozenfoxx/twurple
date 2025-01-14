export { ChatClient } from './ChatClient';
export type { ChatClientOptions, TwitchBotLevel } from './ChatClient';
export type { WebSocketConnectionOptions } from '@d-fischer/connection';

export { TwitchPrivateMessage as PrivateMessage } from './commands/TwitchPrivateMessage';

export { ClearChat } from './caps/twitchCommands/messageTypes/ClearChat';
export { HostTarget } from './caps/twitchCommands/messageTypes/HostTarget';
export { Reconnect } from './caps/twitchCommands/messageTypes/Reconnect';
export { RoomState } from './caps/twitchCommands/messageTypes/RoomState';
export { UserNotice } from './caps/twitchCommands/messageTypes/UserNotice';
export { UserState } from './caps/twitchCommands/messageTypes/UserState';
export { Whisper } from './caps/twitchCommands/messageTypes/Whisper';

export { ClearMsg } from './caps/twitchTags/messageTypes/ClearMsg';
export { GlobalUserState } from './caps/twitchTags/messageTypes/GlobalUserState';

export type { ChatBitsBadgeUpgradeInfo } from './userNotices/ChatBitsBadgeUpgradeInfo';
export type { ChatCommunityPayForwardInfo } from './userNotices/ChatCommunityPayForwardInfo';
export type { ChatCommunitySubInfo } from './userNotices/ChatCommunitySubInfo';
export type { ChatPrimeCommunityGiftInfo } from './userNotices/ChatPrimeCommunityGiftInfo';
export type { ChatRaidInfo } from './userNotices/ChatRaidInfo';
export type { ChatRewardGiftInfo } from './userNotices/ChatRewardGiftInfo';
export type { ChatRitualInfo } from './userNotices/ChatRitualInfo';
export type { ChatStandardPayForwardInfo } from './userNotices/ChatStandardPayForwardInfo';
export type {
	ChatSubGiftInfo,
	ChatSubGiftUpgradeInfo,
	ChatSubUpgradeInfo,
	ChatSubExtendInfo,
	ChatSubInfo
} from './userNotices/ChatSubInfo';

export type { ChatSayMessageAttributes } from './ChatMessageAttributes';

export { ChatUser } from './ChatUser';

export { LogLevel } from '@d-fischer/logger';

export { toChannelName, toUserName } from './utils/userUtil';
export { parseTwitchMessage } from './utils/messageUtil';
