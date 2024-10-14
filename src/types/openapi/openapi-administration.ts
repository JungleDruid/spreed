/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/admin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List admin bots
         * @description This endpoint requires admin access
         */
        get: operations["bot-admin-list-bots"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/certificate/expiration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the certificate expiration for a host
         * @description This endpoint requires admin access
         */
        get: operations["certificate-get-certificate-expiration"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/hostedsignalingserver/requesttrial": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Request a trial account
         * @description This endpoint requires admin access
         */
        post: operations["hosted_signaling_server-request-trial"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/hostedsignalingserver/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete the account
         * @description This endpoint requires admin access
         */
        delete: operations["hosted_signaling_server-delete-account"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Stop all bridges
         * @description This endpoint requires admin access
         */
        delete: operations["matterbridge_settings-stop-all-bridges"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Matterbridge version
         * @description This endpoint requires admin access
         */
        get: operations["matterbridge_settings-get-matterbridge-version"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/welcome/{serverId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the welcome message of a recording server
         * @description This endpoint requires admin access
         */
        get: operations["recording-get-welcome-message"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/settings/sip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update SIP bridge settings
         * @description This endpoint requires admin access
         */
        post: operations["settings-setsip-settings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/welcome/{serverId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the welcome message from a signaling server
         * @description Only available for logged-in users because guests can not use the apps right now.
         *     This endpoint requires admin access
         */
        get: operations["signaling-get-welcome-message"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        Bot: {
            description: string | null;
            /** Format: int64 */
            id: number;
            name: string;
            /** Format: int64 */
            state: number;
        };
        BotWithDetails: components["schemas"]["Bot"] & {
            /** Format: int64 */
            error_count: number;
            /** Format: int64 */
            features: number;
            /** Format: int64 */
            last_error_date: number;
            last_error_message: string;
            url: string;
            url_hash: string;
        };
        Capabilities: {
            features: string[];
            "features-local": string[];
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
                    "start-without-media": boolean;
                    /** Format: int64 */
                    "max-duration": number;
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
                federation: {
                    enabled: boolean;
                    "incoming-enabled": boolean;
                    "outgoing-enabled": boolean;
                    "only-trusted-servers": boolean;
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
            "config-local": {
                [key: string]: string[];
            };
            version: string;
        };
        OCSMeta: {
            status: string;
            statuscode: number;
            message?: string;
            totalitems?: string;
            itemsperpage?: string;
        };
        PublicCapabilities: {
            spreed: components["schemas"]["Capabilities"];
        } | unknown[];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    "bot-admin-list-bots": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Bot list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: components["schemas"]["BotWithDetails"][];
                        };
                    };
                };
            };
        };
    };
    "certificate-get-certificate-expiration": {
        parameters: {
            query: {
                /** @description Host to check */
                host: string;
            };
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Certificate expiration returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                /** Format: int64 */
                                expiration_in_days: number | null;
                            };
                        };
                    };
                };
            };
            /** @description Getting certificate expiration is not possible */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "hosted_signaling_server-request-trial": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Server URL */
                    url: string;
                    /** @description Display name of the user */
                    name: string;
                    /** @description Email of the user */
                    email: string;
                    /** @description Language of the user */
                    language: string;
                    /** @description Country of the user */
                    country: string;
                };
            };
        };
        responses: {
            /** @description Trial requested successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                [key: string]: Record<string, never>;
                            };
                        };
                    };
                };
            };
            /** @description Requesting trial is not possible */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                message: string;
                            };
                        };
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "hosted_signaling_server-delete-account": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account deleted successfully */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Deleting account is not possible */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                message: string;
                            };
                        };
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "matterbridge_settings-stop-all-bridges": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description All bridges stopped successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: boolean;
                        };
                    };
                };
            };
            /** @description Stopping all bridges is not possible */
            406: {
                headers: {
                    [name: string]: unknown;
                };
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
    "matterbridge_settings-get-matterbridge-version": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Bridge version returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                version: string;
                            };
                        };
                    };
                };
            };
            /** @description Getting bridge version is not possible */
            400: {
                headers: {
                    [name: string]: unknown;
                };
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
    "recording-get-welcome-message": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
                /** @description ID of the server */
                serverId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Welcome message returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                /** Format: double */
                                version: number;
                            };
                        };
                    };
                };
            };
            /** @description Recording server not found or not configured */
            404: {
                headers: {
                    [name: string]: unknown;
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
            500: {
                headers: {
                    [name: string]: unknown;
                };
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
    "settings-setsip-settings": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description New SIP groups
                     * @default []
                     */
                    sipGroups?: string[];
                    /**
                     * @description New dial info
                     * @default
                     */
                    dialInInfo?: string;
                    /**
                     * @description New shared secret
                     * @default
                     */
                    sharedSecret?: string;
                };
            };
        };
        responses: {
            /** @description Successfully set new SIP settings */
            200: {
                headers: {
                    [name: string]: unknown;
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
        };
    };
    "signaling-get-welcome-message": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v3";
                /** @description ID of the signaling server */
                serverId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Welcome message returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                [key: string]: Record<string, never>;
                            };
                        };
                    };
                };
            };
            /** @description Signaling server not found */
            404: {
                headers: {
                    [name: string]: unknown;
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
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                error: string;
                                version?: string;
                            };
                        };
                    };
                };
            };
        };
    };
}
