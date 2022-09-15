require("dotenv").config();
import { ExtendedClient } from "./strucures/client";

export const client = new ExtendedClient();

client.start();