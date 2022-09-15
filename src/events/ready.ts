import { Event } from "../strucures/event";

export default new Event("ready", () => {
    console.log("Bot is online");
});