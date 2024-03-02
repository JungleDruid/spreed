/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export type paths = {
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/federation/invitation/{id}": {
    /**
     * Accept a federation invites
     * @description 🚧 Draft: Still work in progress
     */
    post: operations["federation-accept-share"];
    /**
     * Decline a federation invites
     * @description 🚧 Draft: Still work in progress
     */
    delete: operations["federation-reject-share"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/federation/invitation": {
    /**
     * Get a list of federation invites
     * @description 🚧 Draft: Still work in progress
     */
    get: operations["federation-get-shares"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/federation/active": {
    /** Fake join a room on the host server to verify the federated user is still part of it */
    post: operations["room-join-federated-room"];
  };
};

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    Capabilities: {
      features: string[];
      config: {
        attachments: {
          allowed: boolean;
          folder?: string;
        };
        call: {
          enabled: boolean;
          "breakout-rooms": boolean;
          recording: boolean;
          /** Format: int64 */
          "recording-consent": number;
          "supported-reactions": string[];
          "predefined-backgrounds": string[];
          "can-upload-background": boolean;
          "sip-enabled": boolean;
          "sip-dialout-enabled": boolean;
          "can-enable-sip": boolean;
        };
        chat: {
          /** Format: int64 */
          "max-length": number;
          /** Format: int64 */
          "read-privacy": number;
          "has-translation-providers": boolean;
          /** Format: int64 */
          "typing-privacy": number;
        };
        conversations: {
          "can-create": boolean;
        };
        previews: {
          /** Format: int64 */
          "max-gif-size": number;
        };
        signaling: {
          /** Format: int64 */
          "session-ping-limit": number;
          "hello-v2-token-key"?: string;
        };
      };
      version: string;
    };
    ChatMessage: {
      actorDisplayName: string;
      actorId: string;
      actorType: string;
      /** @enum {boolean} */
      deleted?: true;
      /** Format: int64 */
      expirationTimestamp: number;
      /** Format: int64 */
      id: number;
      isReplyable: boolean;
      markdown: boolean;
      message: string;
      messageParameters: {
        [key: string]: {
          [key: string]: Record<string, never>;
        };
      };
      messageType: string;
      reactions: {
        [key: string]: number;
      };
      referenceId: string;
      systemMessage: string;
      /** Format: int64 */
      timestamp: number;
      token: string;
      lastEditActorDisplayName?: string;
      lastEditActorId?: string;
      lastEditActorType?: string;
      /** Format: int64 */
      lastEditTimestamp?: number;
      silent?: boolean;
    };
    FederationInvite: {
      accessToken: string;
      /** Format: int64 */
      id: number;
      /** Format: int64 */
      state: number;
      localCloudId: string;
      /** Format: int64 */
      localRoomId: number;
      /** Format: int64 */
      remoteAttendeeId: number;
      remoteServerUrl: string;
      remoteToken: string;
      roomName: string;
      userId: string;
      inviterCloudId: string;
      inviterDisplayName: string;
    };
    OCSMeta: {
      status: string;
      statuscode: number;
      message?: string;
      totalitems?: string;
      itemsperpage?: string;
    };
    PublicCapabilities: OneOf<[{
      spreed: components["schemas"]["Capabilities"];
    }, unknown[]]>;
    Room: {
      actorId: string;
      actorType: string;
      /** Format: int64 */
      attendeeId: number;
      /** Format: int64 */
      attendeePermissions: number;
      attendeePin: string | null;
      avatarVersion: string;
      /** Format: int64 */
      breakoutRoomMode: number;
      /** Format: int64 */
      breakoutRoomStatus: number;
      /** Format: int64 */
      callFlag: number;
      /** Format: int64 */
      callPermissions: number;
      /** Format: int64 */
      callRecording: number;
      /** Format: int64 */
      callStartTime: number;
      canDeleteConversation: boolean;
      canEnableSIP: boolean;
      canLeaveConversation: boolean;
      canStartCall: boolean;
      /** Format: int64 */
      defaultPermissions: number;
      description: string;
      displayName: string;
      hasCall: boolean;
      hasPassword: boolean;
      /** Format: int64 */
      id: number;
      isCustomAvatar: boolean;
      isFavorite: boolean;
      /** Format: int64 */
      lastActivity: number;
      /** Format: int64 */
      lastCommonReadMessage: number;
      lastMessage: components["schemas"]["RoomLastMessage"] | unknown[];
      /** Format: int64 */
      lastPing: number;
      /** Format: int64 */
      lastReadMessage: number;
      /** Format: int64 */
      listable: number;
      /** Format: int64 */
      lobbyState: number;
      /** Format: int64 */
      lobbyTimer: number;
      /** Format: int64 */
      messageExpiration: number;
      name: string;
      /** Format: int64 */
      notificationCalls: number;
      /** Format: int64 */
      notificationLevel: number;
      objectId: string;
      objectType: string;
      /** Format: int64 */
      participantFlags: number;
      /** Format: int64 */
      participantType: number;
      /** Format: int64 */
      permissions: number;
      /** Format: int64 */
      readOnly: number;
      /** Format: int64 */
      recordingConsent: number;
      sessionId: string;
      /** Format: int64 */
      sipEnabled: number;
      status?: string;
      /** Format: int64 */
      statusClearAt?: number | null;
      statusIcon?: string | null;
      statusMessage?: string | null;
      token: string;
      /** Format: int64 */
      type: number;
      unreadMention: boolean;
      unreadMentionDirect: boolean;
      /** Format: int64 */
      unreadMessages: number;
    };
    RoomLastMessage: components["schemas"]["ChatMessage"] | components["schemas"]["RoomProxyMessage"];
    RoomProxyMessage: {
      actorDisplayName: string;
      actorId: string;
      actorType: string;
      /** Format: int64 */
      expirationTimestamp: number;
      message: string;
      messageParameters: {
        [key: string]: {
          [key: string]: Record<string, never>;
        };
      };
      messageType: string;
      systemMessage: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = {

  /**
   * Accept a federation invites
   * @description 🚧 Draft: Still work in progress
   */
  "federation-accept-share": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v1";
        /** @description ID of the share */
        id: number;
      };
    };
    responses: {
      /** @description Invite accepted successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["Room"];
            };
          };
        };
      };
      /** @description Invite can not be accepted (maybe it was accepted already) */
      400: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                error: string;
              };
            };
          };
        };
      };
      /** @description Invite can not be found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                error?: string;
              };
            };
          };
        };
      };
      /** @description Remote server could not be reached to notify about the acceptance */
      410: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                error: string;
              };
            };
          };
        };
      };
    };
  };
  /**
   * Decline a federation invites
   * @description 🚧 Draft: Still work in progress
   */
  "federation-reject-share": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v1";
        /** @description ID of the share */
        id: number;
      };
    };
    responses: {
      /** @description Invite declined successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Invite can not be found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                error?: string;
              };
            };
          };
        };
      };
    };
  };
  /**
   * Get a list of federation invites
   * @description 🚧 Draft: Still work in progress
   */
  "federation-get-shares": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v1";
      };
    };
    responses: {
      /** @description Get list of received federation invites successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: components["schemas"]["FederationInvite"][];
            };
          };
        };
      };
    };
  };
  /** Fake join a room on the host server to verify the federated user is still part of it */
  "room-join-federated-room": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v4";
        /** @description Token of the room */
        token: string;
      };
    };
    responses: {
      /** @description Federated user is still part of the room */
      200: {
        headers: {
          "X-Nextcloud-Talk-Hash"?: string;
        };
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Room not found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
    };
  };
};