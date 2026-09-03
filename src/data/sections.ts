/**
 * Section visibility.
 *
 * The site launched in September 2026 in a stripped-back form: enough to point
 * press and enquiries at while Lotte's company plans are on hold. The fuller
 * site — the mission statement and the speaking offer — is written, kept in
 * `content.ts` alongside everything else, and simply not rendered.
 *
 * To bring the full site back for the real launch, flip these to `true`. The
 * copy is still there and still type-checked, so it cannot rot in the meantime.
 * `git show full-site-v1` has the markup as it originally rendered.
 */
export const sections = {
  /** "My Mission" statement between About and Awards. Held back while Novo
   *  Nordisk could read it as competitive. */
  mission: false,

  /** "Invite Lotte to Speak" — the speaking lead, body and talk topics, plus
   *  the "For speaking, advisory..." line above the contact email. */
  speaking: false,

  /** Splits the awards into "Major awards" (pink, featured) and "More awards".
   *  Off, they render as one plain list so no award is ranked below another. */
  awardTiers: false,
} as const;
