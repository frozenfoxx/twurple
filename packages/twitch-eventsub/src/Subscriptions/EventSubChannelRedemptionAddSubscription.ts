import type { HelixEventSubSubscription } from 'twitch';
import type { EventSubChannelRedemptionAddEventData } from '../Events/EventSubChannelRedemptionAddEvent';
import { EventSubChannelRedemptionAddEvent } from '../Events/EventSubChannelRedemptionAddEvent';
import type { EventSubListener } from '../EventSubListener';
import { EventSubSubscription } from './EventSubSubscription';

/**
 * @private
 */
export class EventSubChannelRedemptionAddSubscription extends EventSubSubscription<EventSubChannelRedemptionAddEvent> {
	constructor(
		handler: (data: EventSubChannelRedemptionAddEvent) => void,
		client: EventSubListener,
		private readonly _userId: string
	) {
		super(handler, client);
	}

	get id(): string {
		return `channel.channel_points_custom_reward_redemption.add.${this._userId}`;
	}

	protected transformData(data: EventSubChannelRedemptionAddEventData): EventSubChannelRedemptionAddEvent {
		return new EventSubChannelRedemptionAddEvent(data, this._client._apiClient);
	}

	protected async _subscribe(): Promise<HelixEventSubSubscription> {
		return this._client._apiClient.eventSub.subscribeToChannelRedemptionAddEvents(
			this._userId,
			await this._getTransportOptions()
		);
	}
}
