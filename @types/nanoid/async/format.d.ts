declare module 'nanoid/async/format' {
  export default function format(random: (step: number) => Promise<Uint8Array>, alphabet: string, size: number): Promise<string>
}