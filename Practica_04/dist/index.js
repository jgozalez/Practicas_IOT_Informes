"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const producto_module_1 = require("./producto.module");
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(producto_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    return app.init();
};
exports.default = createNestServer;
//# sourceMappingURL=index.js.map