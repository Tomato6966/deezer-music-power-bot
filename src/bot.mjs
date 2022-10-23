import { BotClient } from "./structures/BotClient.mjs";
import { i18n, inlineLocale, inlineLocalization } from "./structures/i18n.mjs";

// https://discord.com/api/oauth2/authorize?client_id=1032998523123290182&permissions=2192919040&scope=bot
const client = new BotClient();

client.on("DeezCordLoaded", async () => {
    client.logger.info("Now starting the bot");
    
    // Test locales:
    // console.log(inlineLocale("en-US", `play.description`))
    // console.log(i18n.getLocales().map(locale => inlineLocalization(locale, "query", "play.options.query")))
   
    client.login(process.env.DISCORD_TOKEN)
})
