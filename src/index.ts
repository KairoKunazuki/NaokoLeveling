import NaokoLeveling from "./core/NaokoLeveling";

declare module 'discord.js' {
    interface Client {
        nlv: NaokoLeveling;
    }
}

export {
    NaokoLeveling
}