# Collatz Conjecture Calculator CLI

Outputs the Collatz Conjecture sequence of a given positive integer with a colorful terminal visualization.

## Install

```bash
npm install -g collatz-conjecture-cli
```

Then run:

```bash
collatz-conj 100
```

Or use without installing:

```bash
npx -y collatz-conjecture-cli 27
```

### Bun

```bash
bun install -g collatz-conjecture-cli
```

Requires Node `>=18` or Bun.

## Usage

```bash
collatz-conj <positive-integer>
```

## Example

```bash
collatz-conj 100
```

```
💡 Visual guide: Yellow is Even | Blue is Odd

100
50
25
76
38
19
58
29
88
44
22
11
34
17
52
26
13
40
20
10
5
16
8
4
2
1

🎉 Reached 1 in 25 steps!

Highest number reached: 100
```

_Colors and backgrounds render in a supported terminal (powered by `chalk`)._

## Development

```bash
bun install
bun run start -- 100       # run src/ directly
bun run build              # bundle to dist/cli.js (used by npm publish)
bun run compile:native     # produce a single-file native binary (./index)
bun run format             # prettier
```

`bun run build` produces `dist/cli.js` — the file referenced by `bin` in `package.json`. `npm publish` runs `prepublishOnly` automatically.

## License

[Apache-2.0](./LICENSE)
