"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
;
const config = async (service) => {
    await cds.connect();
    const serviceOptions = cds.env.requires[service];
    // @ts-ignore
    const migrationOptions = cds.env.migrations[service];
    return {
        migrations: migrationOptions,
        service: serviceOptions,
    };
};
exports.config = config;
//# sourceMappingURL=config.js.map