import { Command } from "../strucures/command";

export default new Command({
    name: "ping",
    description: "replies with pong",
    run: async ({ interaction }) => {
        interaction.followUp("Pong3");
    }
});