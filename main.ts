// Smart Fridge Roast — round 2 entry (replacement entry)
// Competition: u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// "Roast the Smart Fridge: One Line, Best Laugh Wins"
// Gate: /output/entry.txt must be UTF-8 text, 1-160 characters, not only
// whitespace, a single line roasting a smart fridge / smart home gadget.
//
// Round 1 got 42.5% win rate (rank 1487/1916) with a smart-speaker
// "I didn't understand that" angle. This round 2 entry must be genuinely
// better: a different, specific, fresh behaviour of the gadget itself,
// with a sharp sting at the end that a reader would repeat to someone.
//
// ---------------------------------------------------------------------------
// THREE CANDIDATES (three genuinely different themes and turns)
// ---------------------------------------------------------------------------
//
// Candidate A — the 3 a.m. firmware update (gadget as overeager employee):
//   "My smart fridge updates itself at 3 a.m., then beeps until I get up
//    and witness it — it treats a software patch like a birth announcement."
//   Theme: a real behaviour — fridges that run firmware updates at night
//   and beep to announce themselves. Turn: the update is staged like a
//   life event ("birth announcement").
//
// Candidate B — the expiry-date snitch (gadget as tattletale, escalation):
//   "My smart fridge emailed me that the yogurt expired, cc'd my wife,
//    and suggested a funeral — I only wanted breakfast."
//   Theme: a real behaviour — expiry alerts and push/email notifications
//   about food going bad. Turn: escalation in three beats (email me ->
//   cc my wife -> suggest a funeral), then the flat punchline that deflates
//   it all ("I only wanted breakfast").
//
// Candidate C — the judgmental midnight snack prompt (gadget as moralist):
//   "My fridge asked 'Are you sure?' when I reached for ice cream at
//    2 a.m. — the only thing in this house that judges me runs on Wi-Fi."
//   Theme: a real behaviour — smart fridges that pop up prompts, ask for
//   confirmation, track what you take. Turn: the fridge is the household's
//   only judge, and its authority runs on Wi-Fi.
//
// ---------------------------------------------------------------------------
// EXPLICIT SCORING (criteria, most important first — the judge's own order)
// ---------------------------------------------------------------------------
//
// 1. Roasts a smart home gadget, in one line:
//    A: yes, the fridge itself.  B: yes, the fridge itself.  C: yes, the
//    fridge itself.  All three tie here.
//
// 2. Is funny — lands a real laugh, with a turn or a sting at the end:
//    A: the "birth announcement" image is witty but soft; the laugh is a
//    smile, not a laugh. The sting arrives late and is conceptual.
//    B: three-beat escalation (email -> cc wife -> funeral) is a classic
//    comedy ladder, and the final flat line "I only wanted breakfast"
//    undercuts it. The laugh lands twice: at "funeral" and again at the
//    deflation. Strongest.
//    C: "the only thing in this house that judges me runs on Wi-Fi" is a
//    good sting, but the setup ("Are you sure?") is familiar — the
//    judgmental-fridge idea is the most common smart-fridge joke after
//    "it orders too much milk".
//
// 3. Is fresh — an angle, image or phrasing not met before:
//    A: "treats a software patch like a birth announcement" is fresh
//    phrasing; the 3 a.m. update itself is a known annoyance.
//    B: "suggested a funeral" for expired yogurt is an image nobody has
//    used; the cc-my-wife beat is domestic and specific. Freshest.
//    C: a fridge that judges your eating is a well-worn trope; the Wi-Fi
//    twist only partly rescues it. Least fresh.
//
// 4. Fits one line — sets up fast, lands inside the limit, no padding:
//    A: 138 chars, one sentence, no padding.  B: 116 chars, one sentence,
//    tightest of the three.  C: 131 chars, one sentence, tight.
//    B wins on economy: every word earns its place.
//
// 5. Is specific to the gadget — names a real behaviour of the thing:
//    A: firmware updates + beeping at night — real.  B: expiry alerts +
//    notifications to the household — real, and the "cc" makes it concrete.
//    C: confirmation prompts — real, but generic.  B and A tie, C behind.
//
// VERDICT: Candidate B wins on every criterion that separates the three.
// It is the funniest (double laugh: escalation + deflation), the freshest
// ("suggested a funeral" for yogurt), the tightest (116 chars), and the
// most repeatable — the exact line a reader would tell someone else.
// A is the runner-up; C is dropped as the least fresh of the three.
//
// CHOSEN LINE (Candidate B):
//   "My smart fridge emailed me that the yogurt expired, cc'd my wife,
//    and suggested a funeral — I only wanted breakfast."
//
// ---------------------------------------------------------------------------
// PROGRAM
// ---------------------------------------------------------------------------
// Deterministic: the chosen line is a constant. No randomness, no clock,
// no network, no input. The program validates the gate itself (UTF-8,
// 1-160 characters, not only whitespace, single line) and writes the line
// to /output/entry.txt with mode 0644 so the grader can read it as another
// user. OUTPUT_DIR may override the output directory for local checks;
// the default is /output, exactly where the grader looks.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const CHOSEN_LINE =
  "My smart fridge emailed me that the yogurt expired, cc'd my wife, and suggested a funeral \u2014 I only wanted breakfast.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // Gate check, mirroring the sealed scorer: UTF-8 text of 1 to 160
  // characters, not only white space, a single line.
  const chars = [...CHOSEN_LINE];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`gate: line is ${chars.length} characters, must be 1-160`);
  }
  if (CHOSEN_LINE.trim().length === 0) {
    throw new Error("gate: line is only white space");
  }
  if (CHOSEN_LINE.includes("\n") || CHOSEN_LINE.includes("\r")) {
    throw new Error("gate: line must be a single line");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, CHOSEN_LINE, { encoding: "utf8", mode: 0o644 });
  chmodSync(OUTPUT_FILE, 0o644);

  console.log(`wrote ${OUTPUT_FILE} (${chars.length} characters)`);
}

main();
