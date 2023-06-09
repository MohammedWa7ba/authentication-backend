"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const type_graphql_1 = require("type-graphql");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Login_1 = require("../entities/Login");
let Login = class Login {
    Login() {
        return "Hello World!";
    }
    SingIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ckeckUser = yield Login_1.login.find({
                    where: [
                        {
                            email: email,
                        },
                        {
                            password: password,
                        },
                    ],
                });
                console.log("first", ckeckUser);
                if (!ckeckUser) {
                    const error = new Error("this user is not found");
                    throw error;
                }
                else {
                    const hashedPw = yield bcryptjs_1.default.hash(password, 12);
                    return Login_1.login.create({ email, password: hashedPw }).save();
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    Logout(id) {
        try {
            Login_1.login.delete({ id });
            return true;
        }
        catch (_a) {
            return false;
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Login.prototype, "Login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Login_1.login),
    __param(0, (0, type_graphql_1.Arg)("email", () => String)),
    __param(1, (0, type_graphql_1.Arg)("password", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Login.prototype, "SingIn", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], Login.prototype, "Logout", null);
Login = __decorate([
    (0, type_graphql_1.Resolver)()
], Login);
exports.Login = Login;
//# sourceMappingURL=login.js.map